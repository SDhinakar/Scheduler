"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20 px-6'>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className='text-center max-w-3xl'
      >
        <h2 className='font-bold text-[50px] md:text-[60px] text-slate-700 leading-tight'>
          Easy scheduling ahead
        </h2>
        <p className='text-lg md:text-xl mt-5 text-slate-500'>
          Scheduly is your scheduling automation platform for eliminating back-and-forth emails to find the perfect time — and so much more.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.5, duration: 0.8 }} 
        className='flex flex-col gap-5 mt-8'
      >
        <h3 className='text-sm text-gray-600'>Sign Up free with Google</h3>

        <div className='flex justify-center'>
          <LoginLink>
            <Button className="flex items-center gap-3 px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all duration-300">
              <Image src='/google.png' alt='Google' width={30} height={30} />
              Sign up with Google
            </Button>
          </LoginLink>
        </div>

        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <LoginLink>
          <h2 className='text-blue-600 hover:underline cursor-pointer text-lg font-semibold'>
            Sign up Free with Email.
          </h2>
        </LoginLink>
      </motion.div>
    </div>
  )
}

export default Hero
