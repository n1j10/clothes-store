'use client';

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { useFormStatus } from "react-dom";
import { VscLoading } from "react-icons/vsc";
import Link from "next/link";


type btnSize = 'default' | 'lg' | 'sm';

interface SubmitButtonProps {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({ className = '', text = 'submit', size = 'lg', }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn('mt-4 h-12 px-8 text-xs uppercase tracking-[0.2em]', className)}
      size={size}
    >
      {pending ? (
        <>
          <VscLoading className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}


export default SubmitButton 



export const ProductSignInButton = () => {
  return (
    <Link
      href='/sign-in'
      className={cn(buttonVariants(), 'mt-8 h-12 w-full px-8 text-xs uppercase tracking-[0.2em]')}
    >
      Sign in to add to bag
    </Link>
  );
};