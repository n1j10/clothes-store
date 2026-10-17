import React from 'react'
import { Product } from '@/utils/type'
import Link from 'next/link'
import { links } from '@/utils/links'
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';
import { genderLabels } from '../form/GenderSelect';

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <section className='pb-14 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4'>
      {products.map((product) => (
        <div key={product.id} className='group relative'>
          <Link href={`${links.PRODUCTS.href}/${product.id}`}>
            <div className='relative aspect-[3/4] overflow-hidden bg-muted'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes='(max-width:1024px) 50vw, 25vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              {product.featured && (
                <span className='absolute top-3 left-3 bg-brand text-brand-foreground px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em]'>
                  Featured
                </span>
              )}
            </div>
            <div className='mt-4 flex items-start justify-between gap-3'>
              <div>
                <p className='eyebrow'>{genderLabels[product.gender]}</p>
                <h3 className='mt-1 font-sans text-sm group-hover:underline underline-offset-4'>{product.name}</h3>
                {product.colors.length > 0 && (
                  <p className='mt-1 text-xs text-muted-foreground'>
                    {product.colors.length} colour{product.colors.length > 1 && 's'}
                  </p>
                )}
              </div>
              <p className='text-sm font-medium whitespace-nowrap'>{formatCurrency(product.price)}</p>
            </div>
          </Link>
          <div className='absolute top-2 right-2 z-5'>
            <FavoriteToggleButton productId={product.id} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductsGrid
