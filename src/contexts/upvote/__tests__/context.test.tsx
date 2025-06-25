import React from 'react'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UpvoteContext, UpvoteProvider } from '../context'

const TestComponent = () => {
    const context = React.useContext(UpvoteContext)

    if (!context) {
        throw new Error('UpvoteContext must be used within UpvoteProvider')
    }

    return <span data-testid="panel-count">{context.panelCount.length}</span>
}

describe('UpvoteContext', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    /**
     * Scenario 1: Default init
     *
     * This test ensures that the app creates 3 panels when no
     * localStorage data exists.
     */
    it('inits 3 default panels when no data is available', () => {
        render(
            <UpvoteProvider>
                <TestComponent />
            </UpvoteProvider>,
        )

        expect(screen.getByTestId('panel-count').textContent).toBe('3')
    })

    /**
     * Scenario 2: Restores saved state
     *
     * This test verifies that versioned localStorage data is
     * correcly stored.
     */
    it('restores panel data when is available', () => {
        localStorage.setItem(
            'leighton_upvotes',
            JSON.stringify({
                version: 1,
                data: [
                    { listId: 'abc', upvotes: 2, selected: false },
                    { listId: 'def', upvotes: 5, selected: true },
                ],
            }),
        )

        render(
            <UpvoteProvider>
                <TestComponent />
            </UpvoteProvider>,
        )

        expect(screen.getByTestId('panel-count').textContent).toBe('2')
    })

    /**
     * Scenario 3: Loads legacy format
     *
     * This test accepts v0 plain array data from localStorage
     * for proper backwards compatibility.
     */
    it('migrates v0 data format (plain array) to v1 format', () => {
        localStorage.setItem(
            'leighton_upvotes',
            JSON.stringify([{ listId: 'xyz', upvotes: 4, selected: true }]),
        )

        render(
            <UpvoteProvider>
                <TestComponent />
            </UpvoteProvider>,
        )

        expect(screen.getByTestId('panel-count').textContent).toBe('1')
    })

    /**
     * Scenario 4: Handles corrupted data
     *
     * This test simulates corrupted data in localStorage (e.g. invalid JSON format).
     * The context should detect this and fall back to default state
     * if localStorage is corrupted.
     */
    it('handles corrupted data falling back to default', () => {
        localStorage.setItem('leighton_upvotes', 'invalid json')

        render(
            <UpvoteProvider>
                <TestComponent />
            </UpvoteProvider>,
        )

        expect(screen.getByTestId('panel-count').textContent).toBe('3')
    })
})
