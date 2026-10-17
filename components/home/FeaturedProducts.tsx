import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../prodcuts/ProductsGrid'
import { fetchFeaturedProducts } from '@/utils/api';
import EmptyList from '../global/EmptyList';

async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts();

  if (featuredProducts.length === 0) return <EmptyList title="Add new products" />

  return (
    <section className='pt-20'>
      <SectionTitle text='Featured pieces' eyebrow='Selected for you' />
      <ProductsGrid products={featuredProducts} />
    </section>
  )
}

export default FeaturedProducts
