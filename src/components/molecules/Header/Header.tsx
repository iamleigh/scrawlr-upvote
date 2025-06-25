import type React from 'react'
import styles from './Header.module.scss'
import clsx from 'clsx'

interface HeaderProps {
    title?: string
    children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <header className={clsx({ [styles['suc-header']]: true })}>
            {title && <h1 className={clsx({ [styles['suc-header__title']]: true })}>{title}</h1>}
            {children && <div className={clsx({ [styles['suc-header__actions']]: true })}>{children}</div>}
        </header>
    )
}

export default Header
