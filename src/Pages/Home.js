import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import App from '../App'
import '../App.css'

export default function Home() {
    const [productList, setProductList]=useState([])
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/')
            .then((e)=>setProductList(e.data))
    },[])
  return (
    <div className='cardWrapper'>
        {
            productList.map((item)=>(
               <div className='cardBox'>
                    <img src={item.image} alt=""></img><br/>
                    <h1>$ {item.price}</h1>
                    <Link to={"/products/" +item.id}>{item.title}</Link>
               </div> 
            ))
        }
    </div>
  )
}
