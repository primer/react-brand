import React, {Children, useEffect, useRef, useState} from 'react'
import clsx from 'clsx'
import {useId} from '@reach/auto-id'
import {getAnchoredPosition} from '@primer/behaviors'
import type {AnchorSide, AnchorAlignment} from '@primer/behaviors'
import {isSupported, apply} from '@oddbird/popover-polyfill/fn'
import {useProvidedRefOrCreate} from '../hooks/useRef'

/** * Main Stylesheet (as a CSS Module) */
import styles from './Tooltip.module.css'

type TooltipDirection = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'
export type TooltipProps = React.PropsWithChildren<{
  direction?: TooltipDirection
  id?: string
  text: string
  type?: 'label' | 'description'
  children?: React.ReactNode
  className?: string
}>

export type TriggerPropsType = {
  'aria-describedby'?: string
  'aria-labelledby'?: string
  'aria-label'?: string
  onBlur?: React.FocusEventHandler
  onFocus?: React.FocusEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  ref?: React.RefObject<HTMLElement>
}

// map tooltip direction to anchoredPosition props
const directionToPosition: Record<TooltipDirection, {side: AnchorSide; align: AnchorAlignment}> = {
  nw: {side: 'outside-top', align: 'end'},
  n: {side: 'outside-top', align: 'center'},
  ne: {side: 'outside-top', align: 'start'},
  e: {side: 'outside-right', align: 'center'},
  se: {side: 'outside-bottom', align: 'start'},
  s: {side: 'outside-bottom', align: 'center'},
  sw: {side: 'outside-bottom', align: 'end'},
  w: {side: 'outside-left', align: 'center'},
}

// map anchoredPosition props to tooltip direction
const positionToDirection: Record<string, TooltipDirection> = {
  'outside-top-end': 'nw',
  'outside-top-center': 'n',
  'outside-top-start': 'ne',
  'outside-right-center': 'e',
  'outside-bottom-start': 'se',
  'outside-bottom-center': 's',
  'outside-bottom-end': 'sw',
  'outside-left-center': 'w',
}

// The list is from GitHub's custom-axe-rules https://github.com/github/github/blob/master/app/assets/modules/github/axe-custom-rules.ts#L3
const interactiveElements = [
  'a[href]',
  'button:not(:disabled)',
  'summary',
  'select',
  'input:not([type=hidden])',
  'textarea',
]

const isInteractive = (element: HTMLElement) => {
  return (
    interactiveElements.some(selector => element.matches(selector)) ||
    (element.hasAttribute('role') && element.getAttribute('role') === 'button')
  )
}
export const TooltipContext = React.createContext<{tooltipId?: string}>({})

export const Tooltip = React.forwardRef(
  ({direction = 's', text, type = 'description', children, id, className, ...rest}: TooltipProps, forwardedRef) => {
    const tooltipId = useId(id)
    const child = Children.only(children)
    const triggerRef = useProvidedRefOrCreate(forwardedRef as React.RefObject<HTMLElement>)
    const tooltipElRef = useRef<HTMLDivElement>(null)

    const [calculatedDirection, setCalculatedDirection] = useState<TooltipDirection>(direction)

    const openTooltip = () => {
      if (tooltipElRef.current && triggerRef.current && !tooltipElRef.current.matches(':popover-open')) {
        // @ts-ignore-next-line
        tooltipElRef.current.showPopover()
      }
    }
    const closeTooltip = () => {
      if (tooltipElRef.current && triggerRef.current && tooltipElRef.current.matches(':popover-open')) {
        // @ts-ignore-next-line
        tooltipElRef.current.hidePopover()
      }
    }

    useEffect(() => {
      if (!tooltipElRef.current || !triggerRef.current) return
      /*
       * ACCESSIBILITY CHECKS
       */
      // Has trigger element or any of its children interactive elements?
      const isTriggerInteractive = isInteractive(triggerRef.current)
      const triggerChildren = triggerRef.current.childNodes
      const hasInteractiveChild = Array.from(triggerChildren).some(child => {
        return child instanceof HTMLElement && isInteractive(child)
      })

      if (
        !(isTriggerInteractive || hasInteractiveChild) &&
        (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
      ) {
        throw new Error(
          'The `Tooltip` component expects a single React element that contains interactive content. Consider using a `<button>` or equivalent interactive element instead.',
        )
      }

      // If the tooltip is used for labelling the interactive element, the trigger element or any of its children should not have aria-label
      if (type === 'label') {
        const hasAriaLabel = triggerRef.current.hasAttribute('aria-label')
        const hasAriaLabelInChildren = Array.from(triggerRef.current.childNodes).some(
          child => child instanceof HTMLElement && child.hasAttribute('aria-label'),
        )

        if (
          (hasAriaLabel || hasAriaLabelInChildren) &&
          (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
        ) {
          // eslint-disable-next-line no-console
          console.warn(
            'The label type `Tooltip` is going to be used here to label the trigger element. Please remove the aria-label from the trigger element.',
          )
        }
      }

      // SSR safe polyfill apply
      if (typeof window !== 'undefined') {
        if (!isSupported()) {
          apply()
        }
      }

      /*
       * TOOLTIP POSITIONING
       */
      const tooltip = tooltipElRef.current
      const trigger = triggerRef.current
      tooltip.setAttribute('popover', 'auto')
      const settings = {
        side: directionToPosition[direction].side,
        align: directionToPosition[direction].align,
        anchorOffset: 8,
      }

      const positionSet = () => {
        const {top, left, anchorAlign, anchorSide} = getAnchoredPosition(tooltip, trigger, settings)

        tooltip.style.top = `${top}px`
        tooltip.style.left = `${left}px`
        // This is required to make sure the popover is positioned correctly i.e. when there is not enough space on the specified direction, we set a new direction to position the ::after
        const calculatedDirection = positionToDirection[`${anchorSide}-${anchorAlign}` as string]
        setCalculatedDirection(calculatedDirection)
      }

      tooltip.addEventListener('toggle', positionSet)

      return () => {
        tooltip.removeEventListener('toggle', positionSet)
      }
    }, [tooltipElRef, triggerRef, direction, type])

    return (
      <TooltipContext.Provider value={{tooltipId}}>
        <>
          {React.isValidElement(child) &&
            React.cloneElement(child as React.ReactElement<TriggerPropsType>, {
              ref: triggerRef,
              // If it is a type description, we use tooltip to describe the trigger
              'aria-describedby': type === 'description' ? tooltipId : child.props['aria-describedby'],
              // If it is a label type, we use tooltip to label the trigger
              'aria-labelledby': type === 'label' ? tooltipId : child.props['aria-labelledby'],
              onBlur: (event: React.FocusEvent) => {
                closeTooltip()
                child.props.onBlur?.(event)
              },
              onFocus: (event: React.FocusEvent) => {
                openTooltip()
                child.props.onFocus?.(event)
              },
              onMouseEnter: (event: React.MouseEvent) => {
                openTooltip()
                child.props.onMouseEnter?.(event)
              },
              onMouseLeave: (event: React.MouseEvent) => {
                closeTooltip()
                child.props.onMouseLeave?.(event)
              },
            })}
          <div
            className={clsx(styles.Tooltip, className)}
            ref={tooltipElRef}
            data-direction={calculatedDirection}
            {...rest}
            // Only need tooltip role if the tooltip is a description for supplementary information
            role={type === 'description' ? 'tooltip' : undefined}
            // stop AT from announcing the tooltip twice when it is a label type because it will be announced with "aria-labelledby"
            aria-hidden={type === 'label' ? true : undefined}
            id={tooltipId}
            // mouse leave and enter on the tooltip itself is needed to keep the tooltip open when the mouse is over the tooltip
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
          >
            {text}
          </div>
        </>
      </TooltipContext.Provider>
    )
  },
)
