import { v4 as uuidv4 } from 'uuid'
import type { UpvoteList } from './types'

export const createDefaultPanel = (): UpvoteList => ({
    listId: uuidv4(),
    upvotes: 1,
    selected: false,
})
