import React from 'react'
import clsx from 'clsx'
import styles from './Tag.module.scss'
import type { TagSize } from './tag.types'

interface TagProps {
    label: string
    size?: TagSize
}

const Tag: React.FC<TagProps> = ({ label, size = 'md' }) => {
    return (
        <span
            className={clsx({
                [styles['suc-tag']]: true,
                [styles['suc-tag--sm']]: size === 'sm',
                [styles['suc-tag--lg']]: size === 'lg',
            })}
            data-testid="summary-tag"
        >
            {label}
        </span>
    )
}

export default Tag
