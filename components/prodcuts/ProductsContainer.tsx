import { fetchAllProducts } from '@/utils/api'
import React from 'react'
import Link from 'next/link';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { links } from '@/utils/links';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { genderLabels } from '../form/GenderSelect';
import EmptyList from '../global/EmptyList';
import { cn } from '@/lib/utils';

async function ProductsContainer({layout,search,gender}:{layout:string,search:string,gender?:string}) {

  const validGender = gender && gender in genderLabels ? gender as keyof typeof genderLabels : undefined;

  const products = await fetchAllProducts({search, gender: validGender});

  const searchTerm = search ? `&search=${search}` : '';
  const genderTerm = validGender ? `&gender=${validGender}` : '';
  const title = validGender ? genderLabels[validGender] : 'All clothing';

  return (
    <>
      <section className='mb-10'>
        <p className='eyebrow'>{search ? `Results for “${search}”` : 'The collection'}</p>
        <h1 className='mt-4 text-6xl sm:text-7xl tracking-tight italic'>{title}</h1>

        <div className='mt-10 flex flex-wrap items-center justify-between gap-4 border-y py-4'>
          <nav className='flex flex-wrap gap-6 text-[0.7rem] uppercase tracking-[0.2em]'>
            {[['', 'All'], ...Object.entries(genderLabels)].map(([value, label]) => (
              <Link
                key={label}
                href={`${links.PRODUCTS.href}?layout=${layout}${searchTerm}${value ? `&gender=${value}` : ''}`}
                className={cn(
                  'pb-1 border-b',
                  (validGender ?? '') === value ? 'border-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground'>
            <span>{products.length} piece{products.length !== 1 && 's'}</span>
            <Link
              href={`${links.PRODUCTS.href}?layout=grid${searchTerm}${genderTerm}`}
              aria-label='Grid view'
              className={layout === 'grid' ? 'text-foreground' : 'hover:text-foreground'}
            >
              <LuLayoutGrid className='size-4' />
            </Link>
            <Link
              href={`${links.PRODUCTS.href}?layout=list${searchTerm}${genderTerm}`}
              aria-label='List view'
              className={layout === 'list' ? 'text-foreground' : 'hover:text-foreground'}
            >
              <LuList className='size-4' />
            </Link>
          </div>
        </div>
      </section>

      <section>
        {products.length === 0 ? (
          <EmptyList title='Nothing matched your search' />
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </section>
    </>
  )
}

export default ProductsContainer
