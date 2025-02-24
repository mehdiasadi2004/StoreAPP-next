import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, {
  IProductPropsList,
  IProudctItemProps,
} from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";
import React from "react";

interface IProductProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_Page: string; title: string }>;
}

async function store({ searchParams }: IProductProps) {
  const page = (await searchParams).page ?? "1";
  const perPage = (await searchParams).per_Page ?? "5";
  const title = (await searchParams).title ?? "";

  const result = await fetch(
    `http://localhost:8000/products?_page=${page}&_per_page=${perPage}&title=${title}`
  );
  const data = (await result.json()) as IProductPropsList;


  
  return (
    <Container>
      <h1 className="py-4">store</h1>


      <Search/>


      <div className="grid grid-cols-4 gap-4">
        {data?.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={parseInt(perPage)} />
    </Container>
  );
}

export default store;
