import React from 'react'
import Title from './title'
import Countdown from './countdown'
import Waitlist from './waitlist'


export default function Main() {
    const imageUrl = '/background.jpg'
  return (
    <div className="grid min-h-screen w-screen md:grid-cols-12">
      <div className="hidden md:flex md:col-span-5 bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <span className="text-5xl font-bold text-gray-500 pt-28 pl-28">Dar Es Salaam</span>
      </div>
      <div className="container md:col-span-7 h-screen w-full md:px-7 md:py-24 space-y-12 flex flex-col pt-24 pl-7">
        <Title />
        <Countdown />
        <Waitlist />
      </div>
    </div>
  )
}
