"use client";

import { ProductProps } from "@/types/Products"
import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ( ) => {
    const [ products, setProducts ] = useState<ProductProps[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(( ) => {
        const getProducts = async ( ) => {
            setLoading( true );
            try {
                let response = await fetch("/api/products");
                let data = await response.json( );
                setProducts( data );
            } catch(error) {
                setError( JSON.stringify(error) );
            } finally {
                setLoading( false );
            }
        }

        getProducts( );
    }, [ ]);

    return (
        <div
        style={{
            width: "100%",
            height: "auto",
            padding: 20,
            // background: "green",
            marginTop: 20
        }}>
            <div
            style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                {
                    loading &&
                    <p>Loading...</p>
                }
                {
                    products &&
                    products.map(( item, index ) => (
                        <ProductCard 
                            name={ item.name }
                            description={ item.description }
                            basePrice={ item.basePrice }
                            category={ item.category }
                            hasDiscount={ item.hasDiscount }
                            hasInstallement={ item.hasInstallement }
                            images={ item.images }
                            installment={ item.installment }
                            lastUpdated={ item.lastUpdated }
                            paymentMethods={ item.paymentMethods }
                            pricesByPaymentMethod={ item.pricesByPaymentMethod }
                            productBarcode={ item.productBarcode }
                            productID={ item.productID }
                            productQRcode={ item.productQRcode }
                            stockQuantity={ item.stockQuantity }
                        />
                    ))
                }
            </div>
        </div>
    )
}