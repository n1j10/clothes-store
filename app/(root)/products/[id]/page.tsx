import { genderLabels } from '@/components/form/GenderSelect';
import FavoriteToggleButton from '@/components/prodcuts/FavoriteToggleButton';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import AddtoCart from '@/components/single-prodcut/AddtoCart';
import BreadCrumb from '@/components/single-prodcut/BreadCrumb';
import ProductRating from '@/components/single-prodcut/ProductRating';
import ShareButton from '@/components/single-prodcut/shareButton';
import EmptyList from '@/components/global/EmptyList';
import { fetchSingleProduct, isSignedIn } from '@/utils/api';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    try {
        const product = await fetchSingleProduct(id);
        const signedIn = await isSignedIn();

        return (
            <>
                <BreadCrumb name={product.name} />
                <section className='mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16'>
                    <div className='lg:col-span-7 relative aspect-[3/4] bg-muted overflow-hidden'>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            className='object-cover'
                            sizes='(max-width:1024px) 100vw, 58vw'
                        />
                    </div>

                    <div className='lg:col-span-5 lg:sticky lg:top-28 self-start'>
                        <p className='eyebrow'>{genderLabels[product.gender]}</p>
                        <h1 className='mt-4 text-5xl leading-tight tracking-tight'>{product.name}</h1>
                        <div className='mt-4 flex items-center justify-between gap-4'>
                            <p className='text-2xl'>{formatCurrency(product.price)}</p>
                            <div className='flex items-center gap-1'>
                                <FavoriteToggleButton productId={id} />
                                <ShareButton id={id} name={product.name} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <ProductRating productId={product.id} />
                        </div>

                        <div className='mt-8 border-t pt-8'>
                            <AddtoCart
                                productId={product.id}
                                isSignedIn={signedIn}
                                sizes={product.sizes}
                                colors={product.colors}
                            />
                        </div>

                        <div className='mt-10 border-t pt-6'>
                            <p className='eyebrow mb-3'>Description</p>
                            <p className='leading-7 text-muted-foreground'>{product.description}</p>
                        </div>
                    </div>
                </section>

                <div className='mt-24'>
                    <ProductReviews productId={id} />
                    {signedIn && <SubmitReview id={id} />}
                </div>
            </>
        )
    } catch (error) {
        return (
            <section>
                <EmptyList title='Product not found' />
                <div className='mt-8 text-center'>
                    <Link href='/products' className='eyebrow link-underline'>Back to the collection</Link>
                </div>
            </section>
        )
    }
}

export default ProductDetailsPage
