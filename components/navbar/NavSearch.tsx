"use client";

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useSearchParams,useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { links } from '@/utils/links';

function NavSearch() {

  const searchParams = useSearchParams();   //react hook
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );
  const {replace} = useRouter()   //when I search will take me to product page and replace  current

  const handleSearch = useDebouncedCallback((value: string) => {  //useDebouncedCallback is fuction to delay search 
    const params = new URLSearchParams(searchParams); //read from url query parametrd
  if(value){
      params.set('search', value); 
  }else{
    params.delete('search');
  }
replace(`${links.PRODUCTS.href}?${params.toString()}`); //when I search will take me to product page and replace  current
},300);


  return (
    <Input
      type='search'
      placeholder='Search'
      className='hidden sm:block w-36 lg:w-48 border-0 border-b border-foreground/30 bg-transparent dark:bg-transparent shadow-none px-0 text-xs uppercase tracking-[0.15em] placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}

    />
  )
}

export default NavSearch