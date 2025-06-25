import { UpvoteProvider } from '@context/upvote/context'
import UpvoteLayout from './components/templates/UpvoteLayout'

function App() {
    return (
        <UpvoteProvider>
            <UpvoteLayout />
        </UpvoteProvider>
    )
}

export default App
