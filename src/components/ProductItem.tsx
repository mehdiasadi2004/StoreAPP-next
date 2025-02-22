import React from 'react'

export interface IProudctItemProps {
  id: string;
  image: string;
  title: string;
  desc: string;
  price: string;
}

export interface IProductPropsList {
  first: number|null;
  last: number|null;
  items: number | null;
  next: number|null;
  prev: number|null;
  pages: number;
  data: IProudctItemProps[];
}

function ProductItem({ image, price, title }: IProudctItemProps) {
  return (
    <div className="shadow-md h-96">
      <img className='h-1/2 w-full' src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p className="font-bold">
          cost: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem