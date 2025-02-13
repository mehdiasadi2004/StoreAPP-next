"use client"
import React, { createContext, useContext, useState } from "react";

type TShoppingCartContext = {
  cartItem: TCartItem[];
  handleIncreseProductCount:(id:number)=> void
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


    
  return (
    <ShoppingCartContext.Provider
      value={{ cartItem, handleIncreseProductCount }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
