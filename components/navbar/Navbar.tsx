import React, { Suspense } from 'react'
import Link from 'next/link'
import Container from '../global/Container'
import Logo from './Logo'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'
import { getCurrentUser } from '@/utils/api'

const sections = [
  { href: '/products?gender=WOMEN', name: 'Women' },
  { href: '/products?gender=MEN', name: 'Men' },
  { href: '/products?gender=KIDS', name: 'Kids' },
  { href: '/products', name: 'New in' },
]

async function Navbar() {
  const user = await getCurrentUser();
  const isAdmin = user?.role === 'ADMIN';

  return (
    <header className='sticky top-0 z-40 border-b bg-background/90 backdrop-blur'>
      <Container className='grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-4'>
        <nav className='hidden md:flex gap-6 text-[0.7rem] uppercase tracking-[0.2em]'>
          {sections.map((section) => (
            <Link key={section.name} href={section.href} className='link-underline'>
              {section.name}
            </Link>
          ))}
        </nav>
        <div className='md:hidden' />

        <Logo />

        <div className='flex gap-1 items-center justify-end'>
          <Suspense fallback={null}>
            <NavSearch />
          </Suspense>
          <DarkMode />
          <LinksDropdown isSignedIn={!!user} isAdmin={isAdmin} imageUrl={user?.imageUrl} />
          <CartButton />
        </div>
      </Container>
    </header>
  )
}

export default Navbar
