import React from 'react'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Products=()=>{
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({});
    const [isError, setisError] = useState(false);
    useEffect(() => {
        axios
          .get("https://fakestoreapi.com/products/" + id)
          .then((e) => setProduct(e.data))
          .catch((err) => setisError(true));
      }, []);
      console.log(product)
  return (
    <div>
        {isError ? (
        <h1>Product Not Found</h1>
      ) : (
        <div className='detailedDisplay'>
          <img src={product.image} alt=""></img>
          <table>
            <tr>
                <th><strong>Product ID :</strong></th>
                <td>{product.id}</td>
            </tr>
            <tr>
                <th><strong>Product Name :</strong></th>
                <td>{product.name}</td>
            </tr>
            <tr>
                <th><strong>Product Price :</strong></th>
                <td>$ {product.price}</td>
            </tr>
            <tr>
                <th><strong>Product Description :</strong></th>
                <td>{product.description}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  )
}
export default Products