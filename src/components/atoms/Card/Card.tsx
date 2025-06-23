import React from "react"
import clsx from 'clsx'
import styles from './card.module.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className={clsx({[styles['suc-card']]: true})}>{children}</div>
}

export default Card
