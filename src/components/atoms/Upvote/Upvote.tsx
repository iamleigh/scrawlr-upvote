import React from 'react'
import ButtonIcon from '@atom/ButtonIcon/ButtonIcon'
import type { ButtonSize } from '../Button/button.types'

interface UpvoteProps {
    size?: ButtonSize
    selected: boolean
    onClick: () => void
}

const Upvote: React.FC<UpvoteProps> = ({ size = 'md', selected, onClick }) => {
    return (
        <ButtonIcon
            label="Upvote"
            icon="up"
            size={size}
            selected={selected}
            onClick={onClick}
            data-testid="upvote-button"
        />
    )
}

export default Upvote
