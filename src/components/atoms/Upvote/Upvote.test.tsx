import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Upvote from './Upvote'

describe('Upvote', () => {
    /**
     * Scenario 1: Renders upvote button
     *
     * Ensures the upvote button is rendered with default props.
     */
    it('renders with default props', () => {
        render(<Upvote selected={false} onClick={() => {}} />)
        const ButtonElement = screen.getByTestId('upvote-button')

        expect(ButtonElement).toBeInTheDocument()
    })

    /**
     * Scenario 2: Renders selected state
     *
     * Verifies the upvote button applies selected state attributes.
     */
    it('applies selected state', () => {
        render(<Upvote selected={true} onClick={() => {}} />)
        const ButtonElement = screen.getByTestId('upvote-button')

        expect(ButtonElement).toHaveAttribute('aria-pressed', 'true')
    })

    /**
     * Scenario 3: Triggers onClick handler
     *
     * Ensures clicking the button calls the onClick callback.
     */
    it('calls onClick when clicked', () => {
        const handleClick = vi.fn()
        render(<Upvote selected={false} onClick={handleClick} />)
        const ButtonElement = screen.getByTestId('upvote-button')

        ButtonElement.click()

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    /**
     * Scenario 4: Applies correct size
     *
     * Confirms the size prop is passed and affects rendering.
     */
    it('applies specified size class', () => {
        render(<Upvote selected={false} onClick={() => {}} size="sm" />)
        const ButtonElement = screen.getByTestId('upvote-button')

        expect(ButtonElement.className).toMatch(/suc-button-icon--sm/)
    })
})
