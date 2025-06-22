import React from "react"
import Upvote from "../../atoms/Upvote/Upvote"
import Button from "../../atoms/Button/Button"
import styles from "./upvoteList.module.scss"
import clsx from "clsx"

const UpvoteList: React.FC = () => {
    const [upvotes, setUpvotes] = React.useState<number>(1)
    const [selected, setSelected] = React.useState(false)

    return (
        <div className={clsx(styles['suc-upvote-group'])}>
            <div role="toolbar" aria-label="Upvote Buttons" className={clsx(styles['suc-upvote-toolbar'])}>
                {Array.from({ length: upvotes }).map((_, index) => (
                    <Upvote 
                        key={`upvote-${index}`} 
                        selected={selected} 
                        onClick={() => setSelected(!selected)} 
                    />
                ))}
            </div>

            <Button label="Add Upvote" icon="add" hideLabel={true} onClick={() => setUpvotes(upvotes+1)} />
        </div>
    )

}

export default UpvoteList