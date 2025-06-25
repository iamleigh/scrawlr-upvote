import React from 'react'
import Upvote from '@atom/Upvote/Upvote'
import Tag from '@atom/Tag/Tag'
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
    const MAX_DISPLAYED = 5
    const BUTTON_SIZE = 'lg'
    const hiddenCount = upvotes > MAX_DISPLAYED ? upvotes - MAX_DISPLAYED : 0
    const formatCount = (count: number): string => {
        if (count >= 1_000_000_000) return '999M+'
        if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
        if (count >= 1_000) return `${(count / 1_000).toFixed(1)}k`

        return `${count}`
    }

    return (
        <div
            role="toolbar"
            aria-label="Upvote Buttons"
            className={clsx(styles['suc-upvote-toolbar'])}
        >
            {Array.from({ length: Math.min(upvotes, MAX_DISPLAYED) }).map(
                (_, index) => (
                    <Upvote
                        key={`upvote-${index}`}
                        size={BUTTON_SIZE}
                        selected={selected}
                        onClick={onToggle}
                    />
                ),
            )}

            {hiddenCount > 0 && (
                <Tag
                    label={`+${formatCount(hiddenCount)}`}
                    size={BUTTON_SIZE}
                />
            )}
        </div>
    )
}

export default UpvoteList
