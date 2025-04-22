import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Context = createContext();

export default function MainContext( {children} ) {
  
    const oldCart = JSON.parse(localStorage.getItem("CART")) ?? [];
    const oldLoginData = localStorage.getItem("token") ?? "";
    const [cart, setCart] = useState(oldCart);
    const [user, setUser] = useState(oldLoginData);

    useEffect(
      () => {
        localStorage.setItem("CART", JSON.stringify(cart))
      },[cart]
    )

    useEffect(
      () => {
        localStorage.setItem("token", user);
      }, [user]
    )

  return (
    <>
    <Context.Provider value={{cart, setCart, toast, user, setUser}}>
    {children}
    <Toaster position="top-right"/>
    </Context.Provider>
    
    </>
  )
}
