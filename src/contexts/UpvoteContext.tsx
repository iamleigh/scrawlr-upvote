import React, {createContext, useState, useEffect} from "react"

type UpvoteContextType = {
    panelCount: number
    incrementPanelCount: () => void
    resetPanelCount: () => void
}

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined)

const LOCAL_STORAGE_KEY = 'upvotePanelCount'
const DEFAULT_COUNT = 1

const UpvoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [panelCount, setPanelCount] = useState<number>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
        return stored ? parseInt(stored, 10) : DEFAULT_COUNT
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, panelCount.toString())
    }, [panelCount])

    const incrementPanelCount = () => setPanelCount(prev => prev + 1)
    const resetPanelCount = () => setPanelCount(DEFAULT_COUNT)

    return (
        <UpvoteContext.Provider value={{panelCount, incrementPanelCount, resetPanelCount}}>
            {children}
        </UpvoteContext.Provider>
    )
}

export {UpvoteContext, UpvoteProvider}