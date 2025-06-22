import React from "react"
import Button from "../Button/Button"

interface UpvoteProps {
    selected: boolean
    onClick: () => void
}

const Upvote: React.FC<UpvoteProps> = ({ selected, onClick }) => {
    return <Button label="Upvote" icon="up" hideLabel={true} selected={selected} onClick={onClick} />
}

export default Upvote