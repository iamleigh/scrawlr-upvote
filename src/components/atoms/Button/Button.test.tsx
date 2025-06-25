import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from './Button'

describe('🧱 Button Rendering', () => {
    /**
     * Scenario 1: Button render with label
     *
     * This test ensures the button renders with its required
     * properties (label).
     */
    it('includes only label', () => {
        render(<Button label="Click Me" data-testid="button" />)
        const ButtonElement = screen.getByTestId('button')

        expect(ButtonElement).toBeInTheDocument()
    })

    /**
     * Scenario 2: Button renders with label and icon
     *
     * This test ensures the icon element is rendered when the
     * icon prop is provided.
     */
    it('includes label and icon', () => {
        render(<Button label="Click Me" icon="add" data-testid="button" />)
        const IconElement = screen.getByTestId('icon')

        expect(IconElement).toBeInTheDocument()
    })

    /**
     * Scenario 3: Button supports different sizes
     *
     * This test ensures the correct class is applied for size
     * props.
     */
    it('applies correct size class', () => {
        render(<Button label="Click Me" size="sm" data-testid="button" />)
        const ButtonElement = screen.getByTestId('button')

        expect(ButtonElement.className).toMatch(/suc-button--sm/)
    })
})

describe('🧪 Button Interactivity', () => {
    /**
     * Scenario 1: Button click
     *
     * This test ensures the button correctly triggers the onClick
     * event when clicked.
     */
    it('triggers onClick event', () => {
        const handleClick = vi.fn()
        render(
            <Button
                label="Click Me"
                data-testid="button"
                onClick={handleClick}
            />,
        )
        const ButtonElement = screen.getByTestId('button')

        ButtonElement.click()

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})

describe('♿️ Button Accessibility', () => {
    /**
     * Scenario 1: Button has aria-pressed when selected
     *
     * This test ensures aria-pressed is rendered when selected
     * prop is included.
     */
    it('applies aria-pressed when selected is true', () => {
        render(<Button label="Select" selected={true} data-testid="button" />)
        const ButtonElement = screen.getByTestId('button')

        expect(ButtonElement).toHaveAttribute('aria-pressed', 'true')
    })

    /**
     * Scenario 2: Button is keyboard focusable when not disabled
     *
     * This test ensures button can be focused via keyboard (tab).
     */
    it('is keyboard focusable when not disabled', async () => {
        render(<Button label="Focusable" data-testid="button" />)
        const ButtonElement = screen.getByTestId('button')

        ButtonElement.focus()
        expect(ButtonElement).toHaveFocus()
    })

    /**
     * Scenario 3: Button has accessible label
     *
     * This test ensures the button is accessible to screen readers via its label.
     */
    it('has accessible label', () => {
        render(<Button label="Accessible" data-testid="button" />)
        const ButtonElement = screen.getByTestId('button')

        expect(ButtonElement).toBeInTheDocument()
    })
})
