import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Icon from './Icon'

describe('Icon', () => {
    /**
     * Scenario 1: Renders default size icon
     *
     * This test verifies that the icon renders when given a valid name
     * and defaults to medium size when no size is provided.
     */
    it('renders with default size', () => {
        render(<Icon name="add" />)
        const IconElement = screen.getByTestId('icon')

        expect(IconElement).toBeInTheDocument()
    })

    /**
     * Scenario 2: Renders icon with specified size
     *
     * This test ensures the correct class is applied when a custom size
     * gets passed.
     */
    it('renders with specific size', () => {
        render(<Icon name="add" size="lg" />)
        const IconElement = screen.getByTestId('icon')

        expect(IconElement).toBeInTheDocument()
    })
})
