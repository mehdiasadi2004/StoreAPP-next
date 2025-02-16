"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProudctItemProps } from "@/components/ProductItem";
import { useShppingCartContext } from "@/context/ShoppingCartContext";
import { formatNumber } from "@/utils/number";
import axios from "axios";

import React, { useEffect, useState } from "react";

interface IDiscountData {
  id: number; code: string, percent: number
}

function Cart() {

  const {cartItem} = useShppingCartContext()

    const [data, setdata] = useState([] as IProudctItemProps[]);

    const [finalprice, setfinalprice] = useState(0)
    const [discountPrice, setdiscountPrice] = useState(0)
   
    useEffect(() => {
      axios(`http://localhost:8000/products`).then((result) => {
        const { data } = result;
        setdata(data);
      });
    }, []);

    let totalPrice = cartItem.reduce((total, item) => {
      let selectedProduct = data.find(
        (product) => product.id == item.id.toString()
      );

      return total + (selectedProduct?.price || 0) * item.count;
    }, 0);

 const [discountCode, setdiscountCode] = useState("")

 const handleSubmitDiscount =()=>{
  axios(`http://localhost:8000/discount?code=${discountCode}`).then((result) => {
    const data = result.data as IDiscountData[]

    let discountPrice =totalPrice * data[0].percent/100
    let finalPrice = totalPrice - discountPrice
    setdiscountPrice(discountPrice)
    setfinalprice(finalPrice)
  }
)
}


  return (
    <Container>
      <h1 className="text-2xl ">basket</h1>

      <div className="">
        {cartItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="border shadow p-4">
        <h3>
          total cost <span>${formatNumber(totalPrice)}</span>
        </h3>
        <h3>
          discount <span>${formatNumber(discountPrice)}</span>
        </h3>
        <h3>
          final cost <span>${formatNumber(finalprice)}</span>
        </h3>
        <div>
          <input
            className="border px-4 py-2 rounded bg-gray-900"
            placeholder="discount code"
            type="text"
            onChange={(e) => setdiscountCode(e.target.value)}
          />
          <button
            onClick={handleSubmitDiscount}
            className="bg-sky-500 text-white px-4 py-2 rounded"
          >
            add discount code
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
