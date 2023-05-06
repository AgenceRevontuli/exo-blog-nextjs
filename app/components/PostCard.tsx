import Link from 'next/link'
import Date from './Date'

type PostProps = {
    title: string, 
    content: string | null, 
    date: Date
}

export default function PostCard( { title, content, date }: PostProps ) {
  return (
    <li className="p-4 flex flex-col border rounded">
        <h2 className="text-xl font-bold">{title}</h2>
        <Date dateString={date} />
        <p>{content}</p>
        <Link href={`/posts/2`}>
            <p>Lire la suite</p>
        </Link>
  </li>
  )
}
