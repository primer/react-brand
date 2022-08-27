import React, {forwardRef} from 'react'
import clsx from 'clsx'

import type {BaseProps} from '../../component-helpers'
import type {FormInputSizes, FormValidationStatus} from '../form-types'

import '../../../lib/design-tokens/css/tokens/functional/components/control/base.css'
import styles from './TextInput.module.css'

export type TextInputProps = {
  /**
   * Applies full width styling.
   */
  fullWidth?: boolean
  /**
   * Applies inset styling
   */
  inset?: boolean
  /**
   * Applies non-interactive text to start of input.
   */
  leadingText?: string
  /**
   * Applies non-interactive iconography to start of input.
   */
  leadingVisual?: React.ReactNode
  /**
   * Applies monospace styling.
   */
  monospace?: boolean
  /**
   * Applies alternative sizing to the input
   */
  size?: FormInputSizes
  /**
   * Applies non-interactive text to end of input.
   */
  trailingText?: string
  /**
   * Applies non-interactive iconography to end of input.
   */
  trailingVisual?: React.ReactNode
  /**
   * Applies a required attribute to the input
   */
  required?: boolean
  /**
   *
   */
  validationStatus?: FormValidationStatus
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  BaseProps<HTMLInputElement>

const _TextInput = (
  {
    className,
    disabled,
    fullWidth = false,
    inset,
    leadingText,
    leadingVisual: LeadingVisual,
    monospace,
    placeholder,
    size = 'medium',
    trailingText,
    trailingVisual: TrailingVisual,
    validationStatus,
    ...rest
  }: TextInputProps,
  ref
) => {
  return (
    <span
      className={clsx(
        styles['TextInput-wrapper'],
        fullWidth && styles['TextInput-wrapper--fullWidth'],
        monospace && styles['TextInput-wrapper--monospace']
      )}
    >
      {leadingText && !LeadingVisual && (
        <span
          className={clsx(
            styles['TextInput-leading-text'],
            styles[`TextInput-leading-text--${size}`],
            inset && styles['TextInput-leading-text--inset'],
            validationStatus && styles[`TextInput-leading-text--${validationStatus}`]
          )}
        >
          <span
            className={clsx(styles['TextInput-leading-text-inner'], styles[`TextInput-leading-text-inner--${size}`])}
          >
            {leadingText}
          </span>
        </span>
      )}
      {LeadingVisual && !leadingText && (
        <span className={styles['TextInput-leading-visual']}>
          {typeof LeadingVisual === 'function' ? (
            <LeadingVisual
              className={clsx(
                styles['TextInput-leading-visual-icon'],
                styles[`TextInput-leading-visual-icon--${size}`]
              )}
            />
          ) : (
            LeadingVisual
          )}
        </span>
      )}
      <input
        type="text"
        ref={ref}
        className={clsx(
          styles.TextInput,
          'TextInput',
          styles[`TextInput--${size}`],
          fullWidth && styles['TextInput--fullWidth'],
          inset && styles['TextInput--inset'],
          LeadingVisual && styles[`TextInput--has-leading-visual--${size}`],
          TrailingVisual && styles['TextInput--has-trailing-visual'],
          validationStatus && styles[`TextInput--${validationStatus}`],
          leadingText && !LeadingVisual && styles['TextInput--has-leading-text'],
          trailingText && !TrailingVisual && styles['TextInput--has-trailing-text'],
          className
        )}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={validationStatus === 'error'}
        {...rest}
      />
      {TrailingVisual && !trailingText && (
        <span className={styles['TextInput-trailing-visual']}>
          {typeof TrailingVisual === 'function' ? (
            <TrailingVisual
              className={clsx(
                styles['TextInput-trailing-visual-icon'],
                styles[`TextInput-trailing-visual-icon--${size}`]
              )}
            />
          ) : (
            TrailingVisual
          )}
        </span>
      )}
      {trailingText && !TrailingVisual && (
        <span
          className={clsx(
            styles['TextInput-trailing-text'],
            styles[`TextInput-trailing-text--${size}`],
            inset && styles['TextInput-trailing-text--inset'],
            validationStatus && styles[`TextInput-trailing-text--${validationStatus}`]
          )}
        >
          <span
            className={clsx(styles['TextInput-trailing-text-inner'], styles[`TextInput-trailing-text-inner--${size}`])}
          >
            {trailingText}
          </span>
        </span>
      )}
    </span>
  )
}

export const TextInput = forwardRef(_TextInput)

TextInput.displayName = 'TextInput'
