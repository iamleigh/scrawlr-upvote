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

// Used to version the structure of localStorage data.
// Increment only when the data format changes and older data needs to be handled differently.
const STORAGE_VERSION = 1

/**
 * Loads panel state from localStorage.
 *
 * Handles both current and legacy data formats:
 * - Current (v1): { version: 1, data: UpvoteList[] }
 * - Legacy (v0): UpvoteList[] (plain array)
 *
 * This helps to fall back to default state if storage is corrupted or missing
 * enabling backwards compatibility without requiring explicit migrations.
 */
const loadFromStorage = (): UpvoteList[] => {
    try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!raw) return []
        const parsed = JSON.parse(raw)

        if (Array.isArray(parsed)) {
            // Migration from v0 (base array)
            return parsed
        }

        if (parsed.version === STORAGE_VERSION && Array.isArray(parsed.data)) {
            return parsed.data
        }

        return []
    } catch {
        return []
    }
}

/**
 * Saves panel state to localStorage using a versioned wrapper.
 *
 * This allows future version of the app to detect format changes
 * and preserve compatibility with older persistent data.
 */
const saveToStorage = (data: UpvoteList[]) => {
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, data }),
    )
}

const createDefaultPanel = (): UpvoteList => ({
    listId: uuidv4(),
    upvotes: 1,
    selected: false,
})

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
        setPanelCount((prev) => [
            ...prev,
            { listId: uuidv4(), upvotes: 1, selected: false },
        ])
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
