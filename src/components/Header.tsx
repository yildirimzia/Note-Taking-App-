import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { shadow } from '@/styles/utils'
import { Button } from './ui/button'
import {DarkModelToggle} from './DarkModelToggle'

function Header() {
  const user = null;
  return (
    <header 
      className='relative flex h-24 w-full items-center justify-between px-3 sm:px-8'
      style={{boxShadow: shadow}}
    >
      <Link href="/" className='flex items-end gap-2'>
        <Image src="/goatius.png" height={60} width={60} alt='logo' className='rounded-full' priority/>
        <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>GOAT <span>notes</span></h1>
      </Link>

      <div className='flex gap-4'>
        {user ? (
          "Logout"
        ) : (
          <>  
            <Button asChild>
              <Link href="/sign-up" className='hidden sm:block'>Login</Link>
            </Button>
            <Button asChild variant={'outline'}>
            <Link href="/login">Login</Link>
          </Button>
          </>
        )}
        <DarkModelToggle />
      </div>
    </header>
  )
}

export default Header
