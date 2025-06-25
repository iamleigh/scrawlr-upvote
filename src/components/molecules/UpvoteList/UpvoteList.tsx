import React from 'react'
import Upvote from '@atom/Upvote/Upvote'
import styles from './UpvoteList.module.scss'
import clsx from 'clsx'

interface UpvoteListProps {
    upvotes: number
    selected: boolean
    onToggle: () => void
}

const UpvoteList: React.FC<UpvoteListProps> = ({
    upvotes,
    selected,
    onToggle,
}) => {
    return (
        <div
            role="toolbar"
            aria-label="Upvote Buttons"
            className={clsx(styles['suc-upvote-toolbar'])}
        >
            {Array.from({ length: upvotes }).map((_, index) => (
                <Upvote
                    key={`upvote-${index}`}
                    selected={selected}
                    onClick={onToggle}
                />
            ))}
        </div>
    )
}

export default UpvoteList
