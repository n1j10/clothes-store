'use client';

import { FirstColumn, SecondColumn, FourthColumn } from './CartItemColumns';
import ThirdColumn from './ThirdColumn';
import { CartItemWithProduct } from '@/utils/type';

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div className='border-t'>
      {cartItems.map((cartItem) => {
        const { id, amount, size, color } = cartItem;
        const { image, name, price, id: productId, description } = cartItem.product;

        return (
          <div
            key={id}
            className='grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto_auto] gap-x-6 gap-y-4 py-6 border-b items-start'
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} description={description} productId={productId} size={size} color={color} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </div>
        );
      })}
    </div>
  );
}
export default CartItemsList;
