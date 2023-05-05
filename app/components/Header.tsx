import Link from 'next/link'

export default function Header() {
    
  return (
    <header className="p-8 flex flex-row justify-between items-center">
        <div>
            <Link href="/">
                <p className="text-xl font-bold">Logo</p>
            </Link>

        </div>
        <nav>
            <div 
                className="bg-slate-400 py-2 px-4 rounded font-bold"
            >
                <Link href="/new">
                    Rédiger un article
                </Link>
            </div>
        </nav>
    </header>
  )
}
