'use client';
import { useState } from 'react';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { ProductSignInButton, SubmitButton } from '../form/Buttons';
import { Button } from '../ui/button';
import { addToCartAction } from '@/utils/api';

function OptionPicker({ title, options, value, onChange }: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  if (!options.length) return null;
  return (
    <div className='mb-6'>
      <p className='eyebrow mb-3'>
        {title} <span className='text-foreground normal-case tracking-normal'>— {value}</span>
      </p>
      <div className='flex flex-wrap gap-2'>
        {options.map((option) => (
          <Button
            key={option}
            type='button'
            variant={value === option ? 'default' : 'outline'}
            className='h-10 min-w-12 px-3 text-xs uppercase tracking-wider'
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}

function AddToCart({ productId, isSignedIn, sizes, colors }: {
  productId: string;
  isSignedIn: boolean;
  sizes: string[];
  colors: string[];
}) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(sizes[0] ?? '');
  const [color, setColor] = useState(colors[0] ?? '');

  return (
    <div>
      <OptionPicker title='colour' options={colors} value={color} onChange={setColor} />
      <OptionPicker title='size' options={sizes} value={size} onChange={setSize} />

      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />

      {isSignedIn ? (
        <FormContainer action={addToCartAction}>
          <input type='hidden' name='productId' value={productId} />
          <input type='hidden' name='amount' value={amount} />
          <input type='hidden' name='size' value={size} />
          <input type='hidden' name='color' value={color} />
          <SubmitButton text='Add to bag' className='mt-8 w-full' />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
export default AddToCart;
