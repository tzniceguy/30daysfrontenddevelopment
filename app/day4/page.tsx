import React from 'react'
import Header from './components/Header'
import Main from './components/main'
import Join from './components/join'
import Reinvented from './components/reinvented'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="h-full w-full">
        <Header />
        <Main />
        <Join />
        <Reinvented />
        <Footer />
    </main>
  )
}
