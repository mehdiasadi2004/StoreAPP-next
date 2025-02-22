"use client"
import Container from '@/components/Container'
import axios from 'axios'
import React, { useState } from 'react'

const Dashboard = () => {
    const [newProduct , setNewProduct] = useState({
        title:"",
        desc:"",
        image:"",
        price:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        axios({
            method:"post",
            url:"http://localhost:8000/products",
            data:{
                id:Math.floor(Math.random() * 10000).toString(),
                title:newProduct.title,
                desc:newProduct.desc,
                image:newProduct.image,
                price:newProduct.price
            }
        })
    }
  return (
    <Container>
      <h1>Dashboard</h1>
      <div className='grid grid-cols-3 gap-4'>
        <input onChange={handleChange} name='title' type="text" placeholder="title" className='p-2 rounded-md' />
       
        <input onChange={handleChange} name='image' type="text" placeholder="image" className='p-2 rounded-md' />
        <input onChange={handleChange} name='price' type="text" placeholder="price" className='p-2 rounded-md' />
      </div> 
      <textarea onChange={handleChange} name='desc' placeholder="desc" className='p-2 rounded-md w-full mt-4' />
      <button onClick={handleSubmit} className="bg-sky-500 py-2 px-8 rounded-md">add</button>
    </Container>
  );
}

export default Dashboard

// "id": "10",
//       "title": "ford",
//       "desc": "ford gt",
//       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3Wjq4jd0bNsc2vLEoyHIUgoB8x3WEbDGmg&s",
//       "price": "80"