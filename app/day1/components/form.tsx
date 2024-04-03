import React from 'react'
import Input from './input'
import Button from './button'
import Checkbox from './checkbox'
import Oauth from './Oauth'


export default function Form() {
  return (
    <div className='p-2'>
        <label className="p-2">FirstName</label>
        <Input type='text' placeholder='John Doe' />
        <label className="p-2">Email</label>
        <Input type='email' placeholder='john@example.com' />
        <label className="p-2">Password</label>
        <Input type='password' placeholder='password (7+ characters)' />
        <div className="p-2">
            <Checkbox/>
            <span className="text-sm">I agree to terms & conditions</span>
        </div>
        <Button label='SignUp'/>
        <div className="flex items-center justify-center">
              <div className="bg-gray-300 h-px flex-grow t-2" />
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="bg-gray-300 h-px flex-grow t-2" />
        </div>
        <Oauth />
    </div>
  )
}
