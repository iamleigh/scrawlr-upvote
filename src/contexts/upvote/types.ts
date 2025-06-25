export type UpvoteList = {
    listId: string
    upvotes: number
    selected: boolean
}

export type UpvoteContextType = {
    panelCount: UpvoteList[]
    incrementPanelCount: () => void
    resetPanelCount: () => void
    incrementUpvotes: (listId: string, upvotes: number) => void
    toggleUpvotes: (listId: string) => void
}
