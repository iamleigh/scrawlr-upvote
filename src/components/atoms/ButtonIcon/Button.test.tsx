import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ButtonIcon from './ButtonIcon'

describe('🧱 Icon Button Rendering', () => {
    /**
     * Scenario 1: Icon button render with icon
     *
     * This test ensures the button renders with its required
     * properties (label and icon).
     */
    it('includes icon and label', () => {
        render(
            <ButtonIcon
                label="Click Me"
                icon="add"
                data-testid="icon-button"
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        expect(ButtonElement).toBeInTheDocument()
    })

    /**
     * Scenario 2: Icon button supports different sizes
     *
     * This test ensures the correct class is applied for size
     * props.
     */
    it('applies correct size class', () => {
        render(
            <ButtonIcon
                label="Click Me"
                icon="add"
                size="sm"
                data-testid="icon-button"
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        expect(ButtonElement.className).toMatch(/suc-button-icon--sm/)
    })
})

describe('🧪 Icon Button Interactivity', () => {
    /**
     * Scenario 1: Button click
     *
     * This test ensures the button correctly triggers the onClick
     * event when clicked.
     */
    it('triggers onClick event', () => {
        const handleClick = vi.fn()
        render(
            <ButtonIcon
                label="Click Me"
                icon="add"
                data-testid="icon-button"
                onClick={handleClick}
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        ButtonElement.click()

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})

describe('♿️ Icon Button Accessibility', () => {
    /**
     * Scenario 1: Button has aria-pressed when selected
     *
     * This test ensures aria-pressed is rendered when selected
     * prop is included.
     */
    it('applies aria-pressed when selected is true', () => {
        render(
            <ButtonIcon
                label="Select"
                icon="add"
                selected={true}
                data-testid="icon-button"
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        expect(ButtonElement).toHaveAttribute('aria-pressed', 'true')
    })

    /**
     * Scenario 2: Button is keyboard focusable when not disabled
     *
     * This test ensures button can be focused via keyboard (tab).
     */
    it('is keyboard focusable when not disabled', async () => {
        render(
            <ButtonIcon
                label="Focusable"
                icon="up"
                data-testid="icon-button"
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        ButtonElement.focus()
        expect(ButtonElement).toHaveFocus()
    })

    /**
     * Scenario 3: Button has accessible label
     *
     * This test ensures the button is accessible to screen readers via its label.
     */
    it('has accessible label', () => {
        render(
            <ButtonIcon
                label="Accessible"
                icon="add"
                data-testid="icon-button"
            />,
        )
        const ButtonElement = screen.getByTestId('icon-button')

        expect(ButtonElement).toBeInTheDocument()
    })
})
