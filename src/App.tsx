import { Github } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div>
      <div className='px-6 py-3 flex items-center justify-between  border-b'>

        <h1 className='text-xl font-bold'>upload.ai</h1>
        <Button variant='outline'>
          <Github className='w-4 h-4 mr-2' />
          Github
          </Button>

      </div>
    </div>
  )
}

export default App
