import React from 'react'

export interface IProudctItemProps {
  id: string;
  image: string;
  title: string;
  desc: string;
  price: string;
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