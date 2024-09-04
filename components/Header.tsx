import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children,className}:HeaderProps) => {
  return (
    <div className={cn('header',className)}>
      <Link href={'/'} className=''>
      <Image src={'/assets/icons/logo.svg'} alt='' width={120} height={32} className='hidden md:block'/>
      {/* <Image src={'/assets/icons/logo-icon.svg'} alt='' width={32} height={32} className='hidden md:block'/> */}
      </Link>
      {children}
    </div>
  )
}

export default Header
