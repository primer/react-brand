import React, {useRef, useState, useMemo} from 'react'
import clsx from 'clsx'
import {ChevronDownIcon} from '@primer/octicons-react'

import {BaseProps} from '../component-helpers'
import {useVisibilityObserver} from './useVisibilityObserver'
import type {VisibilityMap} from './useVisibilityObserver'

import styles from './SubdomainNavBar.module.css'

export function NavigationVisbilityObserver({children, className, ...rest}) {
  const navRef = useRef<HTMLUListElement | null>(null)
  const [visibilityMap] = useVisibilityObserver(navRef)

  return (
    <ul className={clsx(styles['SubdomainNavBar-secondary-nav-list'], className)} ref={navRef} {...rest}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: clsx(
            child.props.className,
            !!visibilityMap[child.props['data-navitemid']] &&
              styles['SubdomainNavBar-secondary-nav-list-item--visible'],
            !visibilityMap[child.props['data-navitemid']] &&
              styles['SubdomainNavBar-secondary-nav-list-item--invisible']
          )
        })
      })}

      <AnchoredOverlay visibilityMap={visibilityMap}>{children}</AnchoredOverlay>
    </ul>
  )
}

type AnchoredOverlayProps = {
  visibilityMap: VisibilityMap
} & BaseProps<HTMLDivElement>

function AnchoredOverlay({children, className, visibilityMap}: React.PropsWithChildren<AnchoredOverlayProps>) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    if (anchorEl) {
      handleClose()
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const shouldShowMenu = useMemo(() => Object.values(visibilityMap).some(v => v === false), [visibilityMap])

  if (!shouldShowMenu) {
    return null
  }

  return (
    <li className={clsx(className)} style={{order: 99, position: 'relative', right: 0}}>
      <button
        aria-expanded={open ? 'true' : 'false'}
        aria-label="more"
        aria-controls="more-navigation"
        aria-haspopup="true"
        onClick={handleClick}
        className={clsx(styles['SubdomainNavBar-link'], styles['SubdomainNavBar-more-link'])}
      >
        More
        <ChevronDownIcon />
      </button>

      <nav
        id="more-navigation"
        style={{display: open ? 'block' : 'none'}}
        className={clsx(styles['SubdomainNavBar-overflow-menu'])}
      >
        <ul className={clsx(styles['SubdomainNavBar-overflow-menu-list'])}>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              const navItemChild = child.props['data-navitemid']

              if (!visibilityMap[navItemChild]) {
                return (
                  <React.Fragment>
                    {React.cloneElement(child, {
                      onClick: handleClose,
                      className: clsx(styles['SubdomainNavBar-overflow-menu-item'], child.props.className)
                    })}
                  </React.Fragment>
                )
              }
            }
            return null
          })}
        </ul>
      </nav>
    </li>
  )
}
