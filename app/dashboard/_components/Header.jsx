"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname()

    useEffect(()=>{
        // console.log(path)
    },[])

  return (
    <div className='flex p-4 justify-between items-center bg-secondary shadow-md'>
        <Image src={'/logo.svg'} width={40} height={50} alt='logo'/>
        <ul className='hidden md:flex gap-4'>
            <li className={`hover:text-primary hover:font-bold transition cursor-pointer  ${path == '/dashboard' && 'text-primary font-bold'}`} >Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition cursor-pointer ${path == '/dashboard/question' && 'text-primary font-bold'}`} >Questions</li>

            <li className={`hover:text-primary hover:font-bold transition cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`} >Upgrades</li>
            <li className={`hover:text-primary hover:font-bold transition cursor-pointer ${path == '/dashboard/how' && 'text-primary font-bold'}`} >How it works</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header