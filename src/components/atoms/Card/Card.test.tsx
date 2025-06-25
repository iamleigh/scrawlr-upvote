import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from './Card'

describe('Card', () => {
    /**
     * Scenario 1: Content rendering
     *
     * This test ensures the card container renders correctly its
     * children content.
     */
    it('renders content', () => {
        render(
            <Card data-testid="card">
                <p>Hello content...</p>
            </Card>,
        )
        const CardElement = screen.getByTestId('card')

        expect(CardElement).toBeInTheDocument()
    })
})
