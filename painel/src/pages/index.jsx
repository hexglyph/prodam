import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 text-gray-900">
      <Head>
        <title>Prodam - Projetos, Templates e Componentes</title>
        <meta name="description" content="" />
      </Head>

      <main className="flex-col w-full h-full">
        <div className="flex w-full justify-start items-center shrink bg-gray-700/20 border-b border-indigo-700">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl font-bold p-4 text-gray-800 underline decoration-indigo-700">Prodam</h1> <h2 className="text-2xl font-bold p-4 text-gray-800">Projetos, Templates e Componentes</h2>
          </div>
        </div>
        <div className="flex w-full justify-start items-center">
          <Link href="https://prodam.dev" className="p-2 outline outline-indigo-600 hover:outline-violet-500 rounded-lg bg-indigo-300 hover:bg-indigo-200 m-2">Projetos</Link>
          <Link href="https://vue.prodam.dev" className="p-2 outline outline-indigo-600 hover:outline-violet-500 rounded-lg bg-indigo-300 hover:bg-indigo-200 m-2">Vue</Link>
          <Link href="https://next.prodam.dev" className="p-2 outline outline-indigo-600 hover:outline-violet-500 rounded-lg bg-indigo-300 hover:bg-indigo-200 m-2">Next</Link>
        </div>
      </main>

    </div>
  )
}
