import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PlayerForm } from '../components/PlayerForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baseball Sim for Degens</title>
        <meta name="description" content="Generated by degenerates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8">
        <h1 className="w-full text-center text-4xl p-8">
          Baseball Sim for Degens
        </h1>
        <PlayerForm />
      </main>
    </div>
  )
}
