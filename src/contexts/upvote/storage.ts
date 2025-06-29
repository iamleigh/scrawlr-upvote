import { LOCAL_STORAGE_KEY, STORAGE_VERSION } from './constants'
import type { UpvoteList } from './types'

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
export const loadFromStorage = (): UpvoteList[] => {
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
export const saveToStorage = (data: UpvoteList[]) => {
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ version: STORAGE_VERSION, data }),
    )
}

/**
 * Debounced version of `saveToStorage` to reduce write frequency.
 *
 * Useful to avoid excessive `localStorage` writes during rapid updates,
 * especially when user interactions trigger frequent state changes.
 *
 * ⚠️ Optional Enhancement:
 * Helps reduce localStorage writes during rapid or large state updates.
 */

// Timer reference to control deferred writes
let debounceTimer: ReturnType<typeof setTimeout> | null = null

export const saveToStorageDebounced = (data: UpvoteList[], delay = 300) => {
    if (debounceTimer) {
        clearTimeout(debounceTimer)
    }

    debounceTimer = setTimeout(() => {
        saveToStorage(data)
    }, delay)
}
