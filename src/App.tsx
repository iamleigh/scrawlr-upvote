import { UpvoteProvider } from '@context/upvote/context'
import UpvoteLayout from '@template/UpvoteLayout/UpvoteLayout'

function App() {
    return (
        <UpvoteProvider>
            <UpvoteLayout />
        </UpvoteProvider>
    )
}

export default App
