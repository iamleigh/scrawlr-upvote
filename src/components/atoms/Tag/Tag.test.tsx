import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tag from './Tag'

describe('Tag', () => {
    /**
     * Scenario 1: Renders tag with default size
     *
     * Ensures the tag renders with default (medium) size class
     * when no size prop is passed.
     */
    it('renders with default size', () => {
        render(<Tag label="Default Tag" />)
        const TagElement = screen.getByTestId('summary-tag')

        expect(TagElement).toBeInTheDocument()
        expect(TagElement.className).toMatch(/suc-tag/)
    })

    /**
     * Scenario 2: Renders tag with small size
     *
     * Ensures the tag renders with the small size class.
     */
    it('renders with small size', () => {
        render(<Tag label="Small Tag" size="sm" />)
        const TagElement = screen.getByTestId('summary-tag')

        expect(TagElement.className).toMatch(/suc-tag--sm/)
    })

    /**
     * Scenario 3: Renders tag with large size
     *
     * Ensures the tag renders with the large size class.
     */
    it('renders with large size', () => {
        render(<Tag label="Large Tag" size="lg" />)
        const TagElement = screen.getByTestId('summary-tag')

        expect(TagElement.className).toMatch(/suc-tag--lg/)
    })
})
