import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <div className='bg-violet-500 flex items-center text-center justify-between px-5 py-5 h-10'>
      <h1>SAGGAM.</h1>
      <div className='flex gap-5'>
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Careers'>Career</Link>
        <Link href='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header