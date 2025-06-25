import React, { createContext, useState, useEffect } from 'react'
import type { UpvoteList, UpvoteContextType } from './upvoteTypes'
import { DEFAULT_COUNT } from './UpvoteConstants'
import { loadFromStorage, saveToStorage } from './upvoteStorage'
import { createDefaultPanel } from './upvoteUtils'

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined)

const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [panelCount, setPanelCount] = useState<UpvoteList[]>(() => {
        const stored = loadFromStorage()
        return stored.length > 0
            ? stored
            : Array.from({ length: DEFAULT_COUNT }).map(() =>
                  createDefaultPanel(),
              )
    })

    useEffect(() => {
        saveToStorage(panelCount)
    }, [panelCount])

    const incrementPanelCount = () => {
        setPanelCount((prev) => [...prev, createDefaultPanel()])
    }
    const resetPanelCount = () => {
        setPanelCount(
            Array.from({ length: DEFAULT_COUNT }).map(() =>
                createDefaultPanel(),
            ),
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
