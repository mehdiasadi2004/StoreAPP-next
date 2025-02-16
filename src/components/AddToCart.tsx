"use client"
import { useShppingCartContext } from '@/context/ShoppingCartContext';
import React, { useContext } from 'react'

interface IAddToCartProps {
    id:string
}

function AddToCart({id}:IAddToCartProps) {
    const {
      cartItem,
      handleIncreseProductCount,
      handleDecreaseProductCount,
      getProductCount,
      handleRemoveProduct,
    } = useShppingCartContext();

    
  return (
    <div>
      <div className="mt-2">
        <button
          onClick={() => handleIncreseProductCount(parseInt(id))}
          className="px-4 py-2 bg-sky-500 rounded text-white"
        >
          +
        </button>
        <span className="mx-4">{getProductCount(parseInt(id))}</span>
        <button
          onClick={() => handleDecreaseProductCount(parseInt(id))}
          className="px-4 py-2 bg-sky-500 rounded text-white"
        >
          -
        </button>
      </div>
      <button
        onClick={() => handleRemoveProduct(parseInt(id))}
        className="bg-red-500 text-white rounded px-7 py-2 mt2
      "
      >
        delete
      </button>
    </div>
  );
}

export default AddToCart