import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="text-2xl ">basket</h1>

      <div className="">
        <CartItem /> <CartItem /> <CartItem />
      </div>
      <div className="border shadow p-4">
        <h3>
          total cost <span>${20}</span>
        </h3>
        <h3>
          discount <span>${20}</span>
        </h3>
        <h3>
          final cost <span>${40}</span>
        </h3>
        <div>
          <input className="border px-4 py-2 rounded bg-gray-900" placeholder="discount code" type="text" />
          <button className="bg-sky-500 text-white px-4 py-2 rounded" >add discount code</button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
