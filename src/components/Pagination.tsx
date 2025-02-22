"use client"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import { IProudctItemProps } from "./ProductItem"



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
    const current = new URLSearchParams(searchParams.toString());
    current.set("page", (selected + 1).toString());
    current.set("per_Page", pageCount.toString());
    router.push(`/store?${current.toString()}`);

  }
  return (
    <div>
      <ReactPaginate breakLabel="..." nextLabel="next" previousLabel="perv" pageRangeDisplayed={5} renderOnZeroPageCount={null} pageCount={data.length / pageCount} onPageChange={handlePageClick} />
    </div>
  );
}

export default Pagination