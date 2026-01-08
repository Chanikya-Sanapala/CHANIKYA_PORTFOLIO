import Head from 'next/head'
import AppleNavbar from './AppleNavbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white selection:bg-apple-blue selection:text-white">
      <Head>
        <title>Sanapala Chanikya — Full Stack Developer</title>
        <meta name="description" content="Sanapala Chanikya — Full Stack Developer. Building scalable, user-friendly web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppleNavbar />

      <main>
        {children}
      </main>
    </div>
  )
}
