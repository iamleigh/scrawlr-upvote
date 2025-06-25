import React from 'react'
import Button from '@atom/Button/Button'
import Header from '@molecule/Header/Header'
import Card from '@atom/Card/Card'
import UpvotePanel from '@organism/UpvotePanel/UpvotePanel'
import Footer from '@molecule/Footer/Footer'
import { useUpvote } from '@context/upvote/hooks'
import styles from './UpvoteLayout.module.scss'
import clsx from 'clsx'

const UpvoteLayout: React.FC = () => {
    const { panelCount, incrementPanelCount, resetPanelCount } = useUpvote()

    return (
        <>
            <Header title="Scrawlr Upvote">
                <Button label="Reset" onClick={resetPanelCount} />
                <Button
                    label="Add New List"
                    disabled={panelCount.length >= 5}
                    onClick={incrementPanelCount}
                />
            </Header>

            <Card>
                {panelCount.map((panel) => (
                    <UpvotePanel
                        key={panel.listId}
                        listId={panel.listId}
                        upvotes={panel.upvotes}
                        selected={panel.selected}
                    />
                ))}

                {panelCount.length >= 5 && <small className={clsx({ [styles['suc-upvote-fineprint']]: true })}>You reached the limit of allowed lists</small>}
            </Card>

            <Footer />
        </>
    )
}

export default UpvoteLayout
