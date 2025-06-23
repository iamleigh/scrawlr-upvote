import React from 'react'
import Button from '@atom/Button/Button'
import UpvoteList from '@molecule/UpvoteList/UpvoteList'
import styles from './upvotePanel.module.scss'
import clsx from 'clsx'

const UpvotePanel: React.FC = () => {
    const [upvotes, setUpvotes] = React.useState<number>(1)
    const [selected, setSelected] = React.useState<boolean>(false)

    return (
        <div className={clsx(styles['suc-upvote-panel'])}>
            <UpvoteList
                upvotes={upvotes}
                selected={selected}
                onToggle={() => setSelected(!selected)}
            />

            <Button
                label="Add Upvote"
                icon="add"
                hideLabel={true}
                onClick={() => setUpvotes(upvotes + 1)}
            />
        </div>
    )
}

export default UpvotePanel
