import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hair By Yasany</title>
        <meta name="Hair By Yasany" content="Hair By Yasany" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='pl-8 pr-8 bg-primary scroll-smooth'>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Cards />
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
