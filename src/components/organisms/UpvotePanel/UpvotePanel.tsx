import React from 'react'
import Button from '@atom/Button/Button'
import UpvoteList from '@molecule/UpvoteList/UpvoteList'
import styles from './upvotePanel.module.scss'
import clsx from 'clsx'
import { useUpvote } from '@context/upvote/hooks'

type UpvotePanelProps = {
    listId: string
    upvotes: number
    selected: boolean
}

const UpvotePanel: React.FC<UpvotePanelProps> = ({
    listId,
    upvotes,
    selected,
}) => {
    const { incrementUpvotes, toggleUpvotes } = useUpvote()

    return (
        <div className={clsx(styles['suc-upvote-panel'])}>
            <UpvoteList
                upvotes={upvotes}
                selected={selected}
                onToggle={() => toggleUpvotes(listId)}
            />

            <Button
                label="Add Upvote"
                icon="add"
                hideLabel={true}
                onClick={() => incrementUpvotes(listId, 100)}
            />
        </div>
    )
}

export default UpvotePanel
