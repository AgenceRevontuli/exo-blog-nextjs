export default function page() {
  return (
    <div>
      <div className="text-center flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold">Rédigez un nouvel article</h1>
        <p>utilisez le formulaire ci-dessous pour écrir un nouvel article</p>
      </div>
      <div className="p-8">
        <form className="flex flex-col gap-4">
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
      </div>
    </div>
  )
}
