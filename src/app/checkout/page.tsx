"use client";

import "./page.css";
import { Theme } from "@/theme/theme";
import { Header } from "@/components/Header/Header";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/Products";
import { CheckoutProductCard } from "@/components/CheckoutProductCard/CheckoutProductCard";

const Checkout = ( ) => {
    const [ products, setProducts ] = useState<ProductProps[]>([]);
    const [ code, setCode ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ addEnable, setAddEnable ] = useState<boolean>(false);

    useEffect(( ) => {
        if ( code.length === 11 ) {
            setAddEnable( true );
        } else {
            setAddEnable( false );
        }
    }, [ code ]);

    const getProduct = async ( ) => {
        if ( code.length > 0 ) {
            setLoading( true );
            const data = await fetch(`/api/products/${code}`);
            const product = await data.json( );

            console.log( code, " === ", product );
            setProducts( prev => [product[0], ...prev]);
        }

        console.log( products );
    }

    return (
        <div 
        style={{
            backgroundColor: Theme.primary.backgroundColor,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <Header restricted={ true }/>

            <div
            style={{
                width: "100%",
                height: "auto",
            }}>
                <div
                style={{
                    width: "100%",
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>

                </div>

                <div
                style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div
                    className="checkout-form--container">
                        <div
                        style={{
                            width: "100%",
                            height: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <p
                            style={{
                                fontSize: 30,
                                color: Theme.primary.textColorOnSurface
                            }}>Checkout</p>
                        </div>

                        <div
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            {
                                products &&
                                products.map((item, index) => (
                                    <CheckoutProductCard 
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
                                        stockQuantity={ item.stockQuantity }                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div
                style={{
                    width: "100%",
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>

                </div>
            </div>


            <div
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: 140,
                backgroundColor: Theme.primary.surfaceColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div
                style={{
                    width: "70%",
                    height: 50,
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "row",
                    border: `1px solid rgba(256, 256, 256, 0.3)`,
                    // border: `1px solid ${ Theme.primary.borderColorOnSurface }`,
                    // backgroundColor: "red"
                }}>
                    <input 
                        placeholder="Digite o código"
                        style={{
                            flex: 1,
                            maxWidth: "auto",
                            height: "100%",
                            background: "none",
                            border: "none",
                            outline: "none",
                            paddingLeft: 20,
                            paddingRight: 20,
                            color: Theme.primary.textColorOnSurface
                        }}
                        value={ code }
                        onChange={ (e) => setCode(e.target.value) }
                    />
                </div>

                <button
                onClick={ getProduct }
                // disabled={ addEnable ? true : false }
                className="checkout-add-button"
                style={{
                    opacity: addEnable ? 1 : 0.2,
                }}>
                    <p>Adicionar</p>
                </button>
            </div>
        </div>
    )
}

export default Checkout;