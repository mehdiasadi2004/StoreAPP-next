import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProudctItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";
import { motion } from "framer-motion";

interface ICartItemProps {
  id: number;
  count: number;
}

function CartItem({ id, count }: ICartItemProps) {
  const [data, setdata] = useState({} as IProudctItemProps);

  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then((result) => {
      const { data } = result;
      setdata(data);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-12 bg-slate-800 mb-4 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        className="col-span-3 object-cover h-full w-full"
        src={data.image}
        alt=""
      />
      <motion.div
        className="col-span-9 p-6 space-y-4"
        initial={{ x: 20 }}
        animate={{ x: 0 }}
      >
        <h2 className="text-2xl font-bold text-white">{data?.title}</h2>
        <div className="flex items-center space-x-2 text-gray-300">
          <span className="font-medium">تعداد:</span>
          <span className="bg-slate-700 px-3 py-1 rounded-full">{count}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <span className="font-medium">قیمت:</span>
          <span className="text-green-400 font-bold">${data.price}</span>
        </div>
        <AddToCart id={`${id}`} />
      </motion.div>
    </motion.div>
  );
}

export default CartItem;
