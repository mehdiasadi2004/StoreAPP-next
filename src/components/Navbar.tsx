"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import Container from './Container';
import { useShppingCartContext } from '@/context/ShoppingCartContext';

function Navbar() {
    const pathmname=usePathname()

    const navLinks =[
        {
            href:"/",
            title:"Home"
        },
        {
            href:"/store",
            title:"Store"
        }
    ]

const { cartTotalCount } = useShppingCartContext();


  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={`mr-4 ${
                  pathmname === item.href ? "text-sky-500" : null
                }`}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div >
            <span className='px-3 py-1 bg-red-500 rounded-full text-white'>{cartTotalCount}</span>
            <Link
              className={`mr-4 ${
                pathmname === "/cart" ? "text-sky-500" : null
              }`}
              href="/cart"
            >
              basket
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar