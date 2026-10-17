'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';
import { removeCartItemAction, updateCartItemAction } from '@/utils/api';
import SelectProductAmount, { Mode } from '../single-prodcut/SelectProductAmount';

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {

  const [amount, setAmount] = useState(quantity);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleAmountChange = async (value: number) => {

    setIsLoading(true);
    toast('', { description: 'Calculating...' });
    const result = await updateCartItemAction({ amount: value, cartItemId: id });
    setAmount(value);
    toast('', { description: result.message });
    setIsLoading(false);
    router.refresh();
  };

  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove' />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
