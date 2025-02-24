"use client"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { IProudctItemProps } from "./ProductItem"
import { motion } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Pagination = ({pageCount} : {pageCount :number}) => {
  const router = useRouter()
  const searchParams = useSearchParams();

  const [data, setdata] = useState<IProudctItemProps[]>([]);
  useEffect(() => {
    axios(`http://localhost:8000/products`).then((result) => {
      const { data } = result;
      setdata(data);
    });
  }, []);

  const handlePageClick =({selected}:{selected:number})=>{
    console.log(selected)
    const current = new URLSearchParams(searchParams?.toString() || "");
    current.set("page", (selected + 1).toString());
    current.set("per_Page", pageCount.toString());
    router.push(`/store?${current.toString()}`);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mt-8"
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRightIcon className="w-5 h-5" />}
        previousLabel={<ChevronLeftIcon className="w-5 h-5" />}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        pageCount={data.length / pageCount}
        onPageChange={handlePageClick}
        className="flex items-center gap-2"
        pageClassName="overflow-hidden rounded-lg"
        pageLinkClassName="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        activeClassName="bg-indigo-600 text-white hover:bg-indigo-700"
        previousClassName="overflow-hidden rounded-lg"
        nextClassName="overflow-hidden rounded-lg"
        previousLinkClassName="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        nextLinkClassName="flex items-center justify-center w-8 h-8 text-sm border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        breakClassName="text-gray-500"
      />
    </motion.div>
  );
}

export default Pagination