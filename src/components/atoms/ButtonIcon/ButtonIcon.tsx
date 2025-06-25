import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName } from '@atom/Icon/icon.types'
import styles from './ButtonIcon.module.scss'
import clsx from 'clsx'

import type { ButtonSize } from '../Button/button.types'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon: IconName
    size?: ButtonSize
    selected?: boolean
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonIcon: React.FC<ButtonProps> = ({
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
                [styles['suc-button-icon']]: true,
                [styles['suc-button-icon--sm']]: size === 'sm',
                [styles['suc-button-icon--lg']]: size === 'lg',
                [styles['suc-button-icon--selected']]: selected,
            })}
            aria-label={label}
            {...(typeof selected === 'boolean' && { 'aria-pressed': selected })}
            {...(disabled && { disabled: true })}
            onClick={onClick}
        >
            <Icon name={icon} size={size} />
        </button>
    )
}

export default ButtonIcon
