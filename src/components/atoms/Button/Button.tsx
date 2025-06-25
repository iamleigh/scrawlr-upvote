import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName } from '@atom/Icon/icon.types'
import type { ButtonSize } from './button.types'
import styles from './Button.module.scss'
import clsx from 'clsx'

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
    size = 'md',
    selected,
    disabled,
    onClick,
}) => {
    return (
        <button
            className={clsx({
                [styles['suc-button']]: true,
                [styles['suc-button--sm']]: size === 'sm',
                [styles['suc-button--lg']]: size === 'lg',
                [styles['suc-button--selected']]: selected,
            })}
            {...(typeof selected === 'boolean' && { 'aria-pressed': selected })}
            {...(disabled && { disabled: true })}
            onClick={onClick}
        >
            {icon && <Icon name={icon} size={size} />}
            {label}
        </button>
    )
}

export default Button
