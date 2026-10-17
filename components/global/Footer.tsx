import Link from 'next/link'
import Container from './Container'

const columns = [
  {
    title: 'Shop',
    links: [
      { href: '/products?gender=WOMEN', name: 'Women' },
      { href: '/products?gender=MEN', name: 'Men' },
      { href: '/products?gender=KIDS', name: 'Kids' },
      { href: '/products', name: 'All products' },
    ],
  },
  {
    title: 'Account',
    links: [
      { href: '/orders', name: 'Orders' },
      { href: '/favorites', name: 'Wishlist' },
      { href: '/cart', name: 'Bag' },
    ],
  },
  {
    title: 'House',
    links: [{ href: '/about', name: 'Our story' }],
  },
]

function Footer() {
  return (
    <footer className='border-t mt-24 bg-foreground text-background'>
      <Container className='py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]'>
        <div>
          <p className='font-display text-4xl italic'>Atelier</p>
          <p className='mt-4 max-w-xs text-sm opacity-70 leading-6'>
            Everyday clothing made with care, for the whole family.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className='text-[0.7rem] uppercase tracking-[0.25em] opacity-60 mb-4'>{column.title}</p>
            <ul className='space-y-2 text-sm'>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className='link-underline'>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className='py-6 border-t border-background/15 text-xs opacity-60'>
        © {new Date().getFullYear()} Atelier. All rights reserved.
      </Container>
    </footer>
  )
}

export default Footer
