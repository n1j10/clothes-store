import { Product } from '@/utils/type'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'
import { genderLabels } from '../form/GenderSelect'

function ProductsList({ products }: { products: Product[] }) {
  return (
    <section className='border-t'>
      {products.map((product, index) => {
        const { id, name, price, image, description, gender, sizes } = product;

        return (
          <div key={id} className='group relative border-b'>
            <Link href={`/products/${id}`} className='grid grid-cols-[auto_1fr] md:grid-cols-[3rem_10rem_1fr_auto] gap-6 py-6 items-center'>
              <span className='hidden md:block font-display text-2xl italic text-muted-foreground'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='relative w-28 md:w-40 aspect-[3/4] overflow-hidden bg-muted'>
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes='160px'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              </div>
              <div>
                <p className='eyebrow'>{genderLabels[gender]}</p>
                <h2 className='mt-2 text-2xl md:text-3xl'>{name}</h2>
                <p className='mt-3 max-w-xl text-sm leading-6 text-muted-foreground line-clamp-2'>{description}</p>
                {sizes.length > 0 && (
                  <p className='mt-3 text-xs tracking-[0.15em] uppercase text-muted-foreground'>
                    {sizes.join(' · ')}
                  </p>
                )}
              </div>
              <p className='col-start-2 md:col-start-auto text-lg font-medium md:pr-14'>{formatCurrency(price)}</p>
            </Link>
            <div className='absolute top-6 right-0 z-5'>
              <FavoriteToggleButton productId={id} />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductsList
