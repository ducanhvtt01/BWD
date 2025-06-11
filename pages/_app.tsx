import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
