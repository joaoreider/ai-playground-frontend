import { Github } from 'lucide-react'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='px-6 py-3 flex items-center justify-between  border-b'>

        <h1 className='text-xl font-bold'>upload.ai</h1>
        <Button variant='outline'>
          <Github className='w-4 h-4 mr-2' />
          Github
          </Button>

      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
              <Textarea placeholder='prompt para a IA...' className='resize-none p-4 leading-relaxed'/>
              <Textarea placeholder='Resultado gerado' className='resize-none  p-4 leading-relaxed '  readOnly/>
          </div>
          <p className='text-base text-muted-foreground'>Lembre-se: você pode usar a variável <code className='text-violet-400'>{'{transcription}'}</code> no prompt para adicionar o conteúdo da transcrição do vídeo</p>
        </div>

        <aside className='w-80'></aside>
      </main>
    </div>
  )
}

export default App
