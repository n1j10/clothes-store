import Link from 'next/link';
import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import EmptyList from '@/components/global/EmptyList';
import { fetchCart } from '@/utils/api';

async function CartPage() {
  // GET /cart returns the cart with recalculated totals (created if missing)
  const currentCart = await fetchCart();
  const { cartItems } = currentCart;

  return (
    <>
      <p className='eyebrow'>{currentCart.numItemsInCart} item{currentCart.numItemsInCart !== 1 && 's'}</p>
      <h1 className='mt-4 mb-10 text-6xl italic tracking-tight'>Your bag</h1>

      {cartItems.length === 0 ? (
        <>
          <EmptyList title='Your bag is empty' />
          <div className='mt-8 text-center'>
            <Link href='/products' className='eyebrow link-underline'>Continue shopping</Link>
          </div>
        </>
      ) : (
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-8'>
            <CartItemsList cartItems={cartItems} />
          </div>
          <div className='lg:col-span-4'>
            <CartTotals cart={currentCart} />
          </div>
        </div>
      )}
    </>
  );
}
export default CartPage;
