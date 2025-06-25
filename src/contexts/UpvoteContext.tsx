import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

type UpvoteList = {
    listId: string
    upvotes: number
    selected: boolean
}

type UpvoteContextType = {
    panelCount: UpvoteList[]
    incrementPanelCount: () => void
    resetPanelCount: () => void
    incrementUpvotes: (listId: string, upvotes: number) => void
    toggleUpvotes: (listId: string) => void
}

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined)

const LOCAL_STORAGE_KEY = 'leighton_upvotes'
const DEFAULT_COUNT = 3
const createDefaultPanel = (): UpvoteList => ({
    listId: uuidv4(),
    upvotes: 1,
    selected: false,
})

const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [panelCount, setPanelCount] = useState<UpvoteList[]>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
        return stored
            ? JSON.parse(stored)
            : Array.from({ length: DEFAULT_COUNT }).map(() => createDefaultPanel())
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(panelCount))
    }, [panelCount])

    const incrementPanelCount = () => {
        setPanelCount((prev) => [
            ...prev,
            { listId: uuidv4(), upvotes: 1, selected: false },
        ])
    }
    const resetPanelCount = () => {
        setPanelCount(
            Array.from({ length: DEFAULT_COUNT }).map(() => ({
                listId: uuidv4(),
                upvotes: 1,
                selected: false,
            })),
        )
    }

    const incrementUpvotes = (listId: string, delta: number) => {
        setPanelCount((prev) =>
            prev.map((item) =>
                item.listId === listId
                    ? { ...item, upvotes: Math.max(0, item.upvotes + delta) }
                    : item,
            ),
        )
    }

    const toggleUpvotes = (listId: string) => {
        setPanelCount((prev) =>
            prev.map((item) =>
                item.listId === listId
                    ? { ...item, selected: !item.selected }
                    : item,
            ),
        )
    }

    return (
        <UpvoteContext.Provider
            value={{
                panelCount,
                incrementPanelCount,
                resetPanelCount,
                incrementUpvotes,
                toggleUpvotes,
            }}
        >
            {children}
        </UpvoteContext.Provider>
    )
}

export { UpvoteContext, UpvoteProvider }
