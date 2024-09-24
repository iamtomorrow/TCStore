"use client";

import "./page.css";
import { ProductProps } from "@/types/Products";
import { ChildrenProps } from "@/types/Props";
import { createContext, useState } from "react";

interface CheckoutContextProps {
    products: ProductProps[]
    subtotal: number 
    discounts: number
    total: number 

    addToCheckout: ( product: ProductProps ) => void
    removeFromCheckout: ( id: string ) => void
}

const CheckoutContextInitialState: CheckoutContextProps = {
    products: [],
    subtotal: 0,
    discounts: 0,
    total: 0,

    addToCheckout: ( ) => { },
    removeFromCheckout: ( ) => { }
}

export const CheckoutContext = createContext<CheckoutContextProps>( CheckoutContextInitialState);

export const CheckoutContextProvider = ({ children }: ChildrenProps ) => {
    const [ products, setProducts ] = useState<ProductProps[]>([]);
    const [ subtotal, setSubtotal ] = useState<number>(0);
    const [ discounts, setDiscounts ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);

    const addToCheckout = ( product: ProductProps ) => {

    }

    const removeFromCheckout = ( id: string ) => {

    }

    return (
        <CheckoutContext.Provider value={{
            products,
            subtotal,
            discounts,
            total,

            addToCheckout,
            removeFromCheckout
        }}>
            { children }
        </CheckoutContext.Provider>
    )
}