import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { IProudctItemProps } from "@/components/ProductItem";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Products() {
  const [products, setProducts] = useState<IProudctItemProps[]>([]);

  useEffect(() => {
    axios("http://localhost:8000/products").then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-white truncate">
              {product.title}
            </h2>
            <p className="text-gray-400 line-clamp-2">{product.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-400 font-bold">${product.price}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                افزودن به سبد
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
