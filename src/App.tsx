import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'

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

        <aside className='w-80 space-y-6  '>
          <form className='space-y-6'>
            <label htmlFor='video' className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center to-muted-foreground hover:bg-primary/5'>
              <FileVideo className='w-4 h-4' />
              Selecione um vídeo
            </label>
            <input type='file' id='video' className='sr-only' accept='video/mp4' />

            <Separator />

            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea
               id='transcription_prompt'
               className='h-20 leading-relaxed resize-none'
               placeholder='Inclua as palavras-chave mencionadas no vídeo separadas por vírgula'               
               />
            </div>

            < Button type='submit' className='w-full'>
              <Upload className='w-4 h-4 ml-2' />
              Carregar vídeo
            </Button>


          </form>

          <Separator />

          <form className='space-y-6'>


          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue  placeholder='Selecione um prompt'/>
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value='title'>Titulo</SelectItem>
                  <SelectItem value='description'>Descrição</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT-3.5-turbo 16k</SelectItem>
                </SelectContent>
                <span className='block text-xs text-muted-foreground italic'>Você poderá customizar em breve</span>
              </Select>
            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>
                <Slider min={0} max={1} step={0.1} />
                <span className='block text-xs text-muted-foreground italic leading-relaxed'>Valores mais altos deixam o resultado mais criativo e aleatório</span>
            </div>

            <Separator />


            < Button type='submit' className='w-full'>
              <Wand2 className='w-4 h-4 ml-2' />
                Executar
              </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}

export default App
