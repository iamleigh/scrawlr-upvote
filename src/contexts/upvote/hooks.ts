import { useContext } from 'react'
import { UpvoteContext } from './context'

export const useUpvote = () => {
    const context = useContext(UpvoteContext)

    if (!context) {
        throw new Error('useUpvote must be used within UpvoteProvider')
    }

    return context
}
