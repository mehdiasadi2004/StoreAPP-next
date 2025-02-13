"use client"
import { useShppingCartContext } from '@/context/ShoppingCartContext';
import React, { useContext } from 'react'

interface IAddToCartProps {
    id:string
}

function AddToCart({id}:IAddToCartProps) {
    const { cartItem, handleIncreseProductCount } = useShppingCartContext();

    
  return (
    <div className="mt-2">
      <button
        onClick={() => handleIncreseProductCount(parseInt(id))}
        className="px-4 py-2 bg-sky-500 rounded text-white"
      >
        +
      </button>
      <span className="mx-4">3</span>
      <button className="px-4 py-2 bg-sky-500 rounded text-white">-</button>
    </div>
  );
}

export default AddToCart