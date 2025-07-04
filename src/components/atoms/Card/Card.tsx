import React from 'react'
import clsx from 'clsx'
import styles from './Card.module.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <div className={clsx({ [styles['suc-card']]: true })} {...props}>
            {children}
        </div>
    )
}

export default Card
