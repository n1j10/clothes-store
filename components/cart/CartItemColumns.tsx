import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';

export const FirstColumn = ({ name, image }: { image: string; name: string; }) => {
  return (
    <div className='relative w-24 sm:w-28 aspect-[3/4] bg-muted overflow-hidden row-span-2 sm:row-span-1'>
      <Image
        src={image}
        alt={name}
        fill
        sizes='112px'
        className='object-cover'
      />
    </div>
  );
};

export const SecondColumn = ({ name, productId, size, color }: { name: string; description: string; productId: string; size?: string | null; color?: string | null; }) => {
  return (
    <div>
      <Link href={`/products/${productId}`}>
        <h3 className='text-2xl hover:underline underline-offset-4'>{name}</h3>
      </Link>
      {(size || color) && (
        <p className='mt-2 eyebrow'>
          {[color, size && `Size ${size}`].filter(Boolean).join(' · ')}
        </p>
      )}
    </div>
  );
};

export const FourthColumn = ({ price }: { price: number }) => {
  return <p className='font-medium sm:text-right'>{formatCurrency(price)}</p>;
};
