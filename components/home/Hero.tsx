import React, { Suspense } from 'react'
import Link from 'next/link'
import HeroCarousel from './HeroCarousel'
import { buttonVariants } from '../ui/button'
import { LoadingHero } from '../global/LoadingContainer'
import { cn } from '@/lib/utils'

function Hero() {
  return (
    <section className='grid gap-12 lg:grid-cols-12 items-end border-b pb-16'>
      <div className='lg:col-span-5'>
        <p className='eyebrow'>Autumn / Winter {new Date().getFullYear()}</p>
        <h1 className='mt-6 text-6xl sm:text-7xl xl:text-8xl leading-[0.95] tracking-tight'>
          Dressed <br />
          <span className='italic text-brand'>for every</span> <br />
          day.
        </h1>
        <p className='mt-8 max-w-sm text-base leading-7 text-muted-foreground'>
          Fresh fashion for men, women and kids. Find your size,
          pick your color and build a wardrobe you love to wear.
        </p>
        <div className='mt-10 flex flex-wrap gap-3'>
          <Link
            href='/products'
            className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-8 text-xs uppercase tracking-[0.2em]')}
          >
            Shop the collection
          </Link>
          <Link
            href='/about'
            className={cn(buttonVariants({ size: 'lg', variant: 'outline' }), 'h-12 px-8 text-xs uppercase tracking-[0.2em] bg-transparent')}
          >
            Our story
          </Link>
        </div>
      </div>

      <div className='lg:col-span-7'>
        <Suspense fallback={<LoadingHero />}>
          <HeroCarousel />
        </Suspense>
      </div>
    </section>
  )
}

export default Hero
