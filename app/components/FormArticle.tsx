import { prisma } from '../lib/prismadb'

export default function FormArticle() {
    const handleSubmit = async (formData: FormData) => {
        'use server'
        await prisma.posts.create({
            data:{
                title: formData.get('title') as string, 
                content: formData.get('content') as string
            }
        })
      }

  return (
    <form 
          className="flex flex-col gap-4"
          action={handleSubmit}
          >
          <input 
            type="text" 
            name="title"
            id="title"
            placeholder="Titre de l'article"
            className="rounded border py-2 px-4"
          />
          <textarea 
            name="content" 
            id="content"
            placeholder="Écrire ici le contenu de l'article" 
            cols={30} 
            rows={10}
            className="rounded border py-2 px-4"
          ></textarea>
          <button
            className="bg-slate-400 rounded font-bold py-2 px-4 m-auto"
          >
            Enregistrer le post
          </button>
        </form>
  )
}
