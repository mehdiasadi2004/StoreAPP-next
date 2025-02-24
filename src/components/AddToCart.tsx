"use client"
import { useShppingCartContext } from '@/context/ShoppingCartContext';
import { Button } from '@heroui/react';
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
        <Button
          onClick={() => handleIncreseProductCount(parseInt(id))}
         
          color='primary'
        >
          +
        </Button>
        <span className="mx-4">{getProductCount(parseInt(id))}</span>
        <Button
          onClick={() => handleDecreaseProductCount(parseInt(id))}
          color='danger'
        >
          -
        </Button>
      </div>
      <Button
        onClick={() => handleRemoveProduct(parseInt(id))}
      color='danger'
      >
        delete
      </Button>
    </div>
  );
}

export default AddToCart