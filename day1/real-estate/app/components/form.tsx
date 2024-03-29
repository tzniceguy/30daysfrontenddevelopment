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
        <Oauth />
    </div>
  )
}
