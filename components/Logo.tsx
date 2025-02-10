import Link from "next/link"

export default function Home() {
  return (
    <Link
      href="/"
      className="inline-block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent hover:cursor-pointer"
    >
      PageForm
    </Link>
  )
}
