import React from 'react'
import Button from '@atom/Button/Button'
import Header from '@molecule/Header/Header'
import Card from '@atom/Card/Card'
import UpvotePanel from '@organism/UpvotePanel/UpvotePanel'
import Footer from '@molecule/Footer/Footer'
import { UpvoteProvider } from '@context/upvote/context'
import { useUpvote } from '@context/upvote/hooks'

function App() {
    return (
        <UpvoteProvider>
            <AppWithUpvote />
        </UpvoteProvider>
    )
}

function AppWithUpvote() {
    const { panelCount, incrementPanelCount, resetPanelCount } = useUpvote()

    return (
        <>
            <Header title="Scrawlr Upvote">
                <Button label="Reset" onClick={resetPanelCount} />
                <Button label="Add List" onClick={incrementPanelCount} />
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
            </Card>

            <Footer />
        </>
    )
}

export default App
