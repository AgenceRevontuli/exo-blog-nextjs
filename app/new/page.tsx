import FormArticle from '../components/FormArticle'

export default function Page() {
  return (
    <div>
      <div className="text-center flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold">Rédigez un nouvel article</h1>
        <p>utilisez le formulaire ci-dessous pour écrir un nouvel article</p>
      </div>
      <div className="p-8">
        <FormArticle />
      </div>
    </div>
  )
}
