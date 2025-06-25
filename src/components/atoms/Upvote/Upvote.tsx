import React from 'react'
import ButtonIcon from '@atom/ButtonIcon/ButtonIcon'

interface UpvoteProps {
    selected: boolean
    onClick: () => void
}

const Upvote: React.FC<UpvoteProps> = ({ selected, onClick }) => {
    return (
        <ButtonIcon
            label="Upvote"
            icon="up"
            size="lg"
            selected={selected}
            onClick={onClick}
        />
    )
}

export default Upvote
