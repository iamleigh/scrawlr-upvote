import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import UpvoteList from './UpvoteList'

describe('UpvoteList', () => {
    const MAX_DISPLAYED = 5

    /**
     * Scenario 1: Rendered buttons
     *
     * This test ensures that the `Upvote` component never renders more than
     * the maximum allowed (MAX_DISPLAYED).
     */
    it('renders max allowed upvote buttons', () => {
        render(<UpvoteList upvotes={8} selected={false} onToggle={() => {}} />)
        const buttons = screen.getAllByTestId('upvote-button')

        expect(buttons).toHaveLength(MAX_DISPLAYED)
    })

    /**
     * Scenario 2: Upvotes summary visibility
     *
     * When the upvote count exceeds the max displayed, a summary tag should
     * appear once and show the correct hidden count.
     */
    it('renders summary tag with counter', () => {
        render(<UpvoteList upvotes={8} selected={false} onToggle={() => {}} />)
        const tagLabel = screen.getByText('+3')
        const tagElement = screen.getAllByTestId('summary-tag')

        expect(tagLabel).toBeInTheDocument()
        expect(tagElement).toHaveLength(1)
    })

    /**
     * Scenario 3: Upvote click triggers toggle
     *
     * This test ensures the component calls the `onToggle` callback when an
     * individual `Upvote` is clicked.
     */
    it('toggles upvotes selected state when clicked', () => {
        const Wrapper = () => {
            const [selected, setSelected] = React.useState(false)
            return (
                <UpvoteList
                    upvotes={3}
                    selected={selected}
                    onToggle={() => setSelected(!selected)}
                />
            )
        }

        render(<Wrapper />)
        const buttons = screen.getAllByTestId('upvote-button')

        expect(buttons[2]).toHaveAttribute('aria-pressed', 'false')

        fireEvent.click(buttons[0])
        expect(buttons[1]).toHaveAttribute('aria-pressed', 'true')
    })
})
