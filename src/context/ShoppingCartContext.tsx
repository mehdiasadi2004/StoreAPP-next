"use client"
import { HeroUIProvider } from "@heroui/react";
import React, { createContext, useContext, useEffect, useState } from "react";

type TShoppingCartContext = {
  cartItem: TCartItem[];
  handleIncreseProductCount: (id: number) => void;
  getProductCount: (id: number) => number;
  cartTotalCount: number;
  handleDecreaseProductCount: (id: number) => void;
  handleRemoveProduct:(id:number)=>void
};


const ShoppingCartContext = createContext({} as TShoppingCartContext);


export const useShppingCartContext =()=>{
    return useContext(ShoppingCartContext)
}


type TShoppingCartContextProviderProps = {
  children: React.ReactNode;
  
};
type TCartItem = {
    id:number,
    count:number
}
export function ShoppingCartContextProvider({
  children,
}: TShoppingCartContextProviderProps) {
const [cartItem, setCartItem] = useState<TCartItem[]>([])


const cartTotalCount = cartItem.reduce((totalCount,item)=>{
  return  totalCount + item.count
},0)

const getProductCount =(id:number)=>{
  return cartItem.find(item => item.id == id)?.count || 0
}



const handleIncreseProductCount =(id:number)=>{
    setCartItem(currentItem => {
        let isNotProductExist = currentItem.find(item => item.id == id) == null

        if(isNotProductExist){
            return [...currentItem ,{id:id ,count :1}]
        }
        else{
            return currentItem.map(item => {
                if( item.id ==id){
                    return {
                        ...item,
                        count : item.count + 1
                }
                
                }
                else{
                    return item
                }
            })
        }

    })
}
const handleDecreaseProductCount =(id:number)=>{
    setCartItem(currentItem => {
        let isLastOne = currentItem.find(item => item.id == id)?.count == 1

        if (isLastOne) {
          return currentItem.filter(item => item.id != id);
        } else {
          return currentItem.map((item) => {
            if (item.id == id) {
              return {
                ...item,
                count: item.count - 1,
              };
            } else {
              return item;
            }
          });
        }

    })
}



const handleRemoveProduct =(id:number)=>{
  setCartItem((currentItem) =>{
    return currentItem.filter(item=> item.id != id);

  });
}

useEffect(()=>{
  const storedCartItem = localStorage.getItem("cartItem")
  if (storedCartItem) {
    setCartItem(JSON.parse(storedCartItem));
  }
},[])


useEffect(()=>{
  localStorage.setItem("cartItem",JSON.stringify(cartItem))
},[cartItem])



    
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        handleIncreseProductCount,
        cartTotalCount,
        getProductCount,
        handleDecreaseProductCount,
        handleRemoveProduct,
      }}
    >
      
        {children}
    </ShoppingCartContext.Provider>
  );
}
