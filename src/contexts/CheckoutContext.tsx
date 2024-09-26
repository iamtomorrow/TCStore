"use client";

import { paymentMethods } from "@/app/data/paymentMethods";
import { PaymentMethodProps } from "@/types/Payment";
import { ProductProps } from "@/types/Products";
import { ChildrenProps } from "@/types/Props";
import { createContext, useContext, useEffect, useState } from "react";

interface CheckoutContextProps {
    products: ProductProps[]
    subtotal: number 
    discounts: number
    total: number 
    paymentMethod: PaymentMethodProps | null

    addToCheckout: ( product: ProductProps ) => void
    removeFromCheckout: ( id: string ) => void
    updatePaymentMethod: ( id: string ) => void
}

const CheckoutContextInitialState: CheckoutContextProps = {
    products: [],
    subtotal: 0,
    discounts: 0,
    total: 0,
    paymentMethod: null,

    addToCheckout: ( ) => { },
    removeFromCheckout: ( ) => { },
    updatePaymentMethod: ( ) => { },
}

export const CheckoutContext = createContext<CheckoutContextProps>( CheckoutContextInitialState);

export const CheckoutContextProvider = ({ children }: ChildrenProps ) => {
    const [ products, setProducts ] = useState<ProductProps[]>([]);
    const [ subtotal, setSubtotal ] = useState<number>(0);
    const [ discounts, setDiscounts ] = useState<number>(0);
    const [ total, setTotal ] = useState<number>(0);
    const [ paymentMethod, setPaymentMethod ] = useState<PaymentMethodProps | null>(null);

    useEffect(( ) => {
        updateTotal( );
        updateSubtotal( );
    }, [ paymentMethod ]);

    useEffect(( ) => {
        updateSubtotal( );
    }, [ products ]);

    useEffect(( ) => {
        updateTotal( );
    }, [ products ])

    const updateSubtotal = ( ) => {
        let subtotal = 0;
        products.map(( item ) => {
            subtotal += item.basePrice.amount;
        });
        setSubtotal( subtotal );
    }

    const updateTotal = ( ) => {
        let _total = 0;
        products.map(( item ) => {
            _total += item.pricesByPaymentMethod[0].priceDetails.totalPrice;
        })
        setTotal( _total );
    }

    const addToCheckout = ( product: ProductProps ) => {
        setProducts( prev => [product, ...prev] );
    }

    const removeFromCheckout = ( code: string ) => {
        let updatedProducts = products.filter(( item ) => {
            return item.productBarcode !== code;
        })
        setProducts( prev => updatedProducts );
    }

    const updatePaymentMethod = ( id: string ) => {
        let selectedPaymentMethod = paymentMethods.filter((item) => {
            return item.id === id;
        })
        setPaymentMethod( selectedPaymentMethod[0] );
    }

    return (
        <CheckoutContext.Provider value={{
            products,
            subtotal,
            discounts,
            total,
            paymentMethod,

            addToCheckout,
            removeFromCheckout,
            updatePaymentMethod
        }}>
            { children }
        </CheckoutContext.Provider>
    )
}

export const useCheckoutContext = ( ) => {
    return useContext( CheckoutContext );
}