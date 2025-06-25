import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'

interface FooterProps {
    author?: string
}

const Footer: React.FC<FooterProps> = ({ author = 'Leighton Quito' }) => {
    return (
        <footer className={clsx({ [styles['suc-footer']]: true })}>
            <p>
                2025 © Developed & Designed by <strong>{author}</strong>
            </p>
        </footer>
    )
}

export default Footer
