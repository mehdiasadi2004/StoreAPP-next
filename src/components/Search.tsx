"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
    const [title, setTitle] = useState("");

    const searchParams = useSearchParams()
    const router = useRouter();
    const handleSearch=()=>{
        const current = new URLSearchParams(searchParams.toString());
        current.set("title",title)
        router.push(`/store?${current.toString()}`);
    }

  return (
    <div>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='search'  className='p-2 text-black  rounded-md'/>
        <button onClick={handleSearch} className='bg-sky-500 text-white p-2 rounded-md'>search</button>
    </div>
  )
}

export default Search