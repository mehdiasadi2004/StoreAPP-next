"use client"
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/24/outline";

export interface IProudctItemProps {
  id: string;
  image: string;
  title: string;
  desc: string;
  price: string;
}

export interface IProductPropsList {
  first: number | null;
  last: number | null;
  items: number | null;
  next: number | null;
  prev: number | null;
  pages: number;
  data: IProudctItemProps[];
}

const ProductItem: React.FC<IProudctItemProps> = ({
  image,
  price,
  title,
  desc,
}) => {
  return (
    <motion.div
      className="shadow-md h-96 relative overflow-hidden rounded-lg bg-background group
        transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        className="h-1/2 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={image}
        alt={title}
      />
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3
          className="text-lg font-semibold mb-2 transition-colors hover:text-indigo-600
            "
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-bold text-indigo-600 "
          whileHover={{ scale: 1.05 }}
        >
          <span>{price}$</span>
        </motion.p>

        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-indigo-500 
          p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <p className="text-sm mb-3 ">{desc}</p>
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-background text-indigo-600 
                px-3 py-1 rounded-full text-sm"
            >
              <ShoppingCartIcon className="w-4 h-4" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-background text-indigo-600 
                px-3 py-1 rounded-full text-sm"
            >
              <EyeIcon className="w-4 h-4" />
              Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
