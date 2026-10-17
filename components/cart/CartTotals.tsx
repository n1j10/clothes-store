import { formatCurrency } from '@/utils/format';
import { createOrderAction } from '@/utils/api';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { Cart } from '@/utils/type';

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div className='bg-muted p-8 lg:sticky lg:top-28'>
      <p className='eyebrow mb-6'>Order summary</p>
      <CartTotalRow label='Subtotal' amount={cartTotal} />
      <CartTotalRow label='Shipping' amount={shipping} />
      <CartTotalRow label='Tax' amount={tax} />
      <div className='mt-4 pt-4 border-t border-foreground/30 flex justify-between items-baseline'>
        <span className='font-display text-2xl'>Total</span>
        <span className='text-xl font-medium'>{formatCurrency(orderTotal)}</span>
      </div>
      <FormContainer action={createOrderAction}>
        <SubmitButton text='Checkout' className='w-full mt-8' />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({ label, amount }: { label: string; amount: number }) {
  return (
    <p className='flex justify-between text-sm py-2'>
      <span className='text-muted-foreground'>{label}</span>
      <span>{formatCurrency(amount)}</span>
    </p>
  );
}

export default CartTotals;
