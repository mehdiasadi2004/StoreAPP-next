import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IProudctItemProps } from './ProductItem';
import AddToCart from './AddToCart';

interface ICartItemProps{
  id:number;
  count:number
}

function CartItem({id,count}: ICartItemProps) {

  
  const [data, setdata] = useState({}as IProudctItemProps);

  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then(result=>{
      const {data} = result
      setdata(data)
    })
  }, []);

  
  return (
    <div className="grid grid-cols-12 bg-slate-800 mb-4">
      <img
        className="col-span-3"
        src={data.image}
        alt=""
      />
      <div className="col-span-9 p-4">
        <h2 className="text-xl font-semibold">{data?.title}</h2>
        <p>
          number <span>{count}</span>
        </p>
        <p>
          cost <span>${data.price}</span>
        </p>
        <AddToCart id={`${id}`}/>
      </div>
    </div>
  );
}

export default CartItem