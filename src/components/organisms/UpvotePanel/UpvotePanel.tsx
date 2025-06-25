import React from 'react'
import ButtonIcon from '@atom/ButtonIcon/ButtonIcon'
import UpvoteList from '@molecule/UpvoteList/UpvoteList'
import styles from './UpvotePanel.module.scss'
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

            <ButtonIcon
                label="Add New Upvote"
                icon="add"
                size="lg"
                onClick={() => incrementUpvotes(listId, 100)}
            />
        </div>
    )
}

export default UpvotePanel
