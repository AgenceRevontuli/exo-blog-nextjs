import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <div className="text-center flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold">Voici mon super blog !</h1>
        <p>Retouvez ici la liste de mes articles</p>
      </div>
      <div className="p-8">
        <ul className="flex gap-4 justify-between">
          <li className="p-4 flex flex-col gap-4 border rounded">
            <h2 className="text-xl font-bold">Titre du contenu</h2>
            <p>Résumé du post</p>
            <Link href={`/posts/2`}>
              <p>Lire la suite</p>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
