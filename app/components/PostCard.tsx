import Link from 'next/link'
import Date from './Date'

type PostProps = {
    title: string, 
    content: string | null, 
    date: Date,
    id: number
}

export default function PostCard( { title, content, date, id }: PostProps ) {
  return (
    <li className="p-4 flex flex-col border rounded">
        <h2 className="text-xl font-bold">{title}</h2>
        <Date dateString={date} />
        <p>{content}</p>
        <Link href={`/posts/${id}`}>
            <p>Lire la suite</p>
        </Link>
  </li>
  )
}
