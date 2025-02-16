import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProudctItemProps } from "@/components/ProductItem";
import { promises } from "dns";
import React from "react";

interface IProductProps {
    params:Promise<{id:string}>;
    searchParams:Promise<{}>
}
async function Product({params}: IProductProps) {
    const {id} =await params
  const result = await fetch(`http://localhost:8000/products/${id}`);
  const data = (await result.json()) as IProudctItemProps;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-3">
          <img src={data.image} alt="" />
        </div>
        <div className="col-span-9 p-4 ">
          <h2 className="font-bold text-xl">{data.title}</h2>
          <p className="text-gray-600">{data.desc}</p>
          <p className="font-bold">
            cost <span>${data.price}</span>
          </p>
          <AddToCart id={id}/>
        </div>
      </div>
    </Container>
  );
}

export default Product;
