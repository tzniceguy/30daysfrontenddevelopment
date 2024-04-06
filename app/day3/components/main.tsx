import React from 'react'
import Button from './mainbutton'
import Patners from './patners'

export default function Main() {
  return (
    <div className=" p-6 md:p-24 h-full">
        <div className="space-y-5">
            <div className="space-y-4">
                <h3 className="font-semibold text-blue-500 text-center text-4xl md:text-7xl">Developer Centric Conversational AI for African Languages</h3>
                <h2 className="text-center text-lg md:text=2xl">Sarufi: No code builders for customizable inter-driven chatbotsm powered by providers like OpenAI, Anthropic and Cohere.</h2>
            </div>
            <div className="flex items-center justify-center space-x-5">
                <Button color='blue' label='Get Started'/>
                <Button color='white' label='Explore Docs'/>
            </div>
            <Patners />
        </div>
    </div>
  )
}