import React from 'react'
import { useParams, useState, useEffect } from 'react'
import axios from 'axios';

const Products=()=>{
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isError, setisError] = useState(false);
    useEffect(() => {
        axios
          .get("https://fakestoreapi.com/products/"+id)
          .then((e) => setProduct(e.data))
          .catch(() => setisError(true));
      }, []);
      console.log(product)
  return (
    <div>
        {isError ? (
        <h1>Product Not Found</h1>
      ) : (
        <>
          <img src={product.image} alt=""></img>
          <h5>Product ID : {product.id}</h5>
          <h5>Product Name : {product.title}</h5>
          <h5>Product Price : {product.price}</h5>
          <h5>Product Description : {product.description}</h5>
        </>
      )}
    </div>
  )
}
export default Products