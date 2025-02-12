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
  const result = await fetch(`http://localhost:3004/products/${id}`);
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
          <div className="mt-2">
            <button className="px-4 py-2 bg-sky-500 rounded text-white">
              +
            </button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 bg-sky-500 rounded text-white">
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
