// Key used to identify upvote data in localStorage.
const LOCAL_STORAGE_KEY = 'leighton_upvotes'

// Default number of upvote panels created on first load or reset.
const DEFAULT_COUNT = 3

// Used to version the structure of localStorage data.
// Increment only when the data format changes and older data needs to be handled differently.
const STORAGE_VERSION = 1

export { LOCAL_STORAGE_KEY, DEFAULT_COUNT, STORAGE_VERSION }
