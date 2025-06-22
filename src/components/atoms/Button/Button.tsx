import React from "react"
import Icon from "@atom/Icon/Icon"
import type { IconName } from "../../../types/icon"
import styles from "./button.module.scss"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon?: IconName
    hideLabel?: boolean
    selected?: boolean
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    hideLabel,
    selected,
    disabled,
    onClick
}) => {
    return (
        <button
            className={clsx({
                [styles['suc-button']]: true,
                [styles['suc-button--selected']]: selected,
            })}
            {...(hideLabel && { "aria-label": label })}
            {...(typeof selected === "boolean" && { "aria-pressed": selected })}
            {...(disabled && { "disabled": true })}
            onClick={onClick}>
            {icon && <Icon name={icon} />}
            {!hideLabel && label}
        </button>
    )
}

export default Button