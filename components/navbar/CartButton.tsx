import React from 'react'
import Link from 'next/link'
import { links } from '@/utils/links'
import { fetchCartItems } from '@/utils/api'

async function CartButton() {
  const cartItems = await fetchCartItems();

  return (
    <Link
      href={links.CART.href}
      className='ml-2 text-[0.7rem] uppercase tracking-[0.2em] link-underline whitespace-nowrap'
    >
      Bag ({cartItems})
    </Link>
  )
}

export default CartButton
