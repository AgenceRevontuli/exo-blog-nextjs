import Date from '@/app/components/Date'
import { prisma } from '../../lib/prismadb'

export default async function Page({
  params,
}: {
  params: {id: number}
}
) {
  const key = params.id
  const post = await prisma.posts.findUnique({
    where:{
      id: Number(key)
    }
  })

  return (
    <div>
      <div className="text-center flex flex-col gap-4 py-12">
        <h1 className="text-4xl font-bold">{post?.title}</h1>
        <h2><Date dateString={post?.createdAt} /></h2>
        <p>{post?.content}</p>
      </div>
    </div>
  )
}
