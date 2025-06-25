import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName } from '@atom/Icon/icon.types'
import styles from './Button.module.scss'
import clsx from 'clsx'

type ButtonSize =
    | "sm"
    | "md"
    | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon?: IconName
    size?: ButtonSize
    hideLabel?: boolean
    selected?: boolean
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    size = "md",
    hideLabel,
    selected,
    disabled,
    onClick,
}) => {
    return (
        <button
            className={clsx({
                [styles['suc-button']]: true,
                [styles['suc-button--icon']]: hideLabel,
                [styles['suc-button--sm']]: size === 'sm',
                [styles['suc-button--lg']]: size === 'lg',
                [styles['suc-button--selected']]: selected,
            })}
            {...(hideLabel && { 'aria-label': label })}
            {...(typeof selected === 'boolean' && { 'aria-pressed': selected })}
            {...(disabled && { disabled: true })}
            onClick={onClick}
        >
            {icon && <span className={clsx(styles['suc-button__icon'])}><Icon name={icon} /></span>}
            {!hideLabel && <span className={clsx(styles['suc-button__label'])}>{label}</span>}
        </button>
    )
}

export default Button
