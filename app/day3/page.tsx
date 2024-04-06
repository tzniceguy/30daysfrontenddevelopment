import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Information from './components/info'
export default function Page() {
  return (
    <main className="min-h-screen ">
        <Header />
        <Main />
        <Information />
    </main>
  )
}
