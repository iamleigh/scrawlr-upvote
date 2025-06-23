import React from "react"
import clsx from "clsx"
import styles from './footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={clsx({[styles['suc-footer']]: true})}>
            <p>2025 © Developed & Designed by Leighton Quito</p>
        </footer>
    );
}

export default Footer
