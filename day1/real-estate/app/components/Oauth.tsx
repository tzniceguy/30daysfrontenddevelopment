import React from 'react'
import Button from './button'
import Image from 'next/image'
import AppleIcon from '../../public/apple-logo.svg'
import GoogleIcon from '../../public/google-logo.svg'

export default function Oauth() {
  return (
    <div className="space-y-4">
      <Button label={`${<Image src={GoogleIcon.src} height={10} width={10} alt='google-icon'  className="text-[#DB4437] mr-2" />} SignUp with Google`} />
      <Button label={`${<AppleIcon className="text-white mr-2" />} SignUp with Google`} />
    </div>
  )
}
 