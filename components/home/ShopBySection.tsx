import Image from 'next/image'
import Link from 'next/link'
import { fetchAllProducts } from '@/utils/api'
import SectionTitle from '../global/SectionTitle'

const sections = [
  { gender: 'WOMEN', name: 'Women' },
  { gender: 'MEN', name: 'Men' },
  { gender: 'KIDS', name: 'Kids' },
]

async function ShopBySection() {
  const covers = await Promise.all(
    sections.map(async (section) => {
      const [first] = await fetchAllProducts({ gender: section.gender });
      return { ...section, image: first?.image };
    }),
  );

  return (
    <section className='pt-20'>
      <SectionTitle text='Shop by section' eyebrow='The edit' />
      <div className='grid gap-3 sm:grid-cols-3'>
        {covers.map((section, index) => (
          <Link
            key={section.gender}
            href={`/products?gender=${section.gender}`}
            className='group relative block aspect-[3/4] overflow-hidden bg-muted'
          >
            {section.image && (
              <Image
                src={section.image}
                alt={section.name}
                fill
                sizes='(max-width:640px) 100vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0' />
            <div className='absolute bottom-6 left-6 right-6 flex items-end justify-between text-white'>
              <h3 className='text-4xl italic'>{section.name}</h3>
              <span className='text-[0.65rem] uppercase tracking-[0.25em]'>0{index + 1} — Shop</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ShopBySection
