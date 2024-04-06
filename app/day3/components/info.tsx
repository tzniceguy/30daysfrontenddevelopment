import React from 'react'
import Image from 'next/image'

export default function Information() {
  return (
    <div className="p-6 md:p-24 h-full md:grid md:grid-cols-2">
        <div className="p-2 space-y-3">
            <h3 className="text-3xl md:text-5xl font-semibold">Simplified Conversational AI Development for African Languages</h3>
            <p className="text-xl">At Sarufi, We are on a mission to empower African developers to build chatbots and conversational experiences that are tailored to African languages. We believe that language is at the core of communication, and our goal is to democratize natural language processing tools around African languages. </p>
            
            <div className="absolute md:hidden">
                <Image src={'/bot_flow.svg'} alt='bot-flows' fill/>
            </div>

            <p className="text-xl">Our team of experts is constantly working to refine and optimize our algorithms, ensuring that our conversational AI engine can handle even most complex and nuanced language interactions. Whether it is understanding local dialects or interpreting complex sentence structures, our platform is designed to provide a seamless and intuitive experience for end-users across all messaging channels.
            </p>
        </div>
        <div className="relative hidden md:block">
            <Image src={'/bot_flow.svg'} alt='bot-flows' fill/>
        </div>
    </div>
  )
}
