import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';

const Collections = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const res = await fetch("/api/product");
        console.log(res)
        if (!res.ok) {
          alert("Something went Wrong")
          return;
        }
        const data = await res.json()
        setProducts(data.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts();
  },[])
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-10 mt-10'>
      {
        products?.map((item,indx) => 
          <ProductItem key={indx} item={item}/>
        )
      }
    </div>
  )
}

export default Collections
