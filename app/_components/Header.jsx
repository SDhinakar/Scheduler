"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex items-center justify-between
        p-5 shadow-sm
        '>
            <Image src='/logo.svg' width={100} height={100} alt='logo'
                className='w-[150px] md:w-[200px]'
            />
            <div className='flex gap-5'>
              <LoginLink> <Button variant="ghost">Login</Button></LoginLink> 
               <RegisterLink><Button>Get Started</Button></RegisterLink> 

            </div>
        </div>
    </div>
  )
}

export default Header