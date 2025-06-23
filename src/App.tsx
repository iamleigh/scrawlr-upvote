import React from 'react'
import Button from '@atom/Button/Button'
import Header from '@molecule/Header/Header'
import Card from '@atom/Card/Card'
import UpvotePanel from '@organism/UpvotePanel/UpvotePanel'
import Footer from '@molecule/Footer/Footer'
import { UpvoteProvider } from './contexts/UpvoteContext'
import { useUpvote } from './contexts/useUpvote'

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
                {Array.from({ length: panelCount }).map((_, index) => (
                    <UpvotePanel key={`upvote-panel-${index}`} />
                ))}
            </Card>

            <Footer />
        </>
    )
}

export default App
