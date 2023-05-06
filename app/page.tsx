import PostCard from './components/PostCard'
import { prisma } from './lib/prismadb'
 
export default async function Home() {

  const posts = await prisma.posts.findMany()

  return (
    <main>
      <div className="text-center flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold">Voici mon super blog !</h1>
        <p>Retouvez ici la liste de mes articles</p>
      </div>
      <div className="p-8">
        <ul className="grid grid-cols-3 gap-4">
          {posts?.map(post => (
            <PostCard key={post.id} title={post.title} content={post.content} date={post.createdAt} />
          ))}
        </ul>
      </div>
    </main>
  )
}
