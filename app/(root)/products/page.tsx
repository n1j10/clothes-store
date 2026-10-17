import ProductsContainer from '@/components/prodcuts/ProductsContainer'
import React from 'react'


interface ProductsPageProps {
    searchParams: {
        layout?: string
        search:string
        gender?: string
    }
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => { //if there is error I can change ProductsPageProps with any  means type any

    const {layout='grid'} = await searchParams || {};    //='grid' means default value
    const {search, gender} = await searchParams;
    // const search = searchParams.search || '';
    // console.log(search,"test search")
    return (
        <ProductsContainer layout={layout} search={search} gender={gender}/>
    )
}

export default ProductsPage










//   const {layout} = await searchParams|| 'grid';