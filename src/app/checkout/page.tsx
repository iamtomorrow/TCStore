"use client";

import "./page.css";
import { Theme } from "@/theme/theme";
import { Header } from "@/components/Header/Header";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/Products";
import { CheckoutProductCard } from "@/components/CheckoutProductCard/CheckoutProductCard";
import { useCheckoutContext } from "@/contexts/CheckoutContext";
import { Utils } from "@/utils/utils";
import { CheckoutStep } from "@/components/CheckoutStep/CheckoutStep";
import { ShippingCard } from "@/components/ShippingCard/ShippingCard";
import { ShippingProps } from "@/types/Shipping";
import { ShippingMethods } from "../data/shippingMethods";

const Checkout = ( ) => {
    const [ steps, setSteps ] = useState<number>(0);
    const [ _products, setProducts ] = useState<ProductProps[]>([]);
    const [ code, setCode ] = useState<string>("");
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ addEnable, setAddEnable ] = useState<boolean>(false);
    const [ shippingMethod, setShippingMethod ] = useState<string | null>(null);

    const { 
        products, 
        addToCheckout, 
        subtotal,
        discounts,
        total } = useCheckoutContext( );

    useEffect(( ) => {
        if ( code.length >= 11 ) {
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

            // console.log( code, " === ", product );
            setProducts( prev => [product[0], ...prev]);
            addToCheckout( product[0] );
        }

        // console.log( _products );
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
                            height: 200,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <p
                            style={{
                                fontSize: 30,
                                color: Theme.primary.textColorOnSurface
                            }}>Checkout { steps }</p>

                            <div
                            style={{
                                width: "100%",
                                height: 120,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-around",
                                // backgroundColor: "orange"
                            }}>
                                <CheckoutStep 
                                    checked={ steps >= 1 ? true : false }
                                    step={ 1 }
                                    title="Montar carrinho"
                                />

                                <CheckoutStep 
                                    checked={ shippingMethod !== null ? true : false }
                                    step={ 2 }
                                    title="Entrega"
                                />

                                <CheckoutStep 
                                    checked={ false }
                                    step={ 3 }
                                    title="Pagamento"
                                />
                            </div>
                        </div>

                        <div
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom: 20,
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

                        {
                            steps >= 2 &&
                            <div
                            style={{
                                width: "100%",
                                height: 180,
                                paddingLeft: 30,
                                paddingRight: 30,
                                // backgroundColor: "orange"
                            }}>
                                <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <h2
                                    style={{
                                        color: Theme.primary.textColorOnSurface
                                    }}>Qual a forma de entrega?</h2>
    
                                    <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        // backgroundColor: "red"
                                    }}>
                                        {
                                            ShippingMethods.map((item) => (
                                                <ShippingCard 
                                                    iconUrl={ item.iconUrl }
                                                    title={ item.title }
                                                    active={ shippingMethod === item.id ? true : false }
                                                    onClick={ ( ) => setShippingMethod( item.id )}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            steps >= 3 &&
                            <div
                            style={{
                                width: "100%",
                                height: 200,
                                paddingLeft: 30,
                                paddingRight: 30,
                            }}>
                                <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}>
                                    <h1
                                    style={{
                                        color: Theme.primary.textColorOnSurface,
                                        fontSize: 26,
                                    }}>Vamos pagar bebê?</h1>
                                </div>
                            </div>
                        }

                        <div
                        style={{
                            width: "100%",
                            height: 180,
                            paddingLeft: 30,
                            paddingRight: 30,
                            paddingBottom: 30,
                            // backgroundColor: "blue"
                        }}>
                            <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                // backgroundColor: "green",
                            }}>
                                <div
                                className="checkout-price-info--container">
                                    <h3
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>Subtotal</h3>

                                    <h3 
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>R$ { Utils.formatPrice( subtotal ) }</h3>
                                </div>

                                <div
                                className="checkout-price-info--container">
                                    <h3
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>Descontos</h3>

                                    <h3 
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>R$ 34,00 {}</h3>
                                </div>

                                <div
                                className="checkout-price-info--container">
                                    <h3
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>Frete</h3>

                                    <h3 
                                    style={{
                                        fontSize: 16,
                                        color: Theme.primary.textColorOnSurface
                                    }}>R$ 0,00 {}</h3>
                                </div>

                                <div
                                className="checkout-price-info--container">
                                    <h3
                                    style={{
                                        fontSize: 30,
                                        fontWeight: "700",
                                        color: Theme.primary.textColorOnSurface
                                    }}>Total</h3>

                                    <h3 
                                    style={{
                                        fontSize: 30,
                                        fontWeight: "700",
                                        color: Theme.primary.textColorOnSurface
                                    }}>{ total }</h3>
                                </div>
                            </div>
                        </div>

                        {
                            products.length > 0 &&
                            <div
                            style={{
                                width: "100%",
                                height: 100,
                                paddingBottom: 20,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                paddingLeft: 30,
                                paddingRight: 30,
                                // backgroundColor: "yellow"
                            }}>
                                {
                                    steps >= 1 &&
                                    <button
                                    onClick={ ( ) => setSteps( prev => prev-1 ) }
                                    // disabled={ addEnable ? true : false }
                                    className="checkout-return-button">
                                        <p
                                        style={{
                                            color: Theme.secondary.textColorOnSurface
                                        }}>Voltar</p>
                                    </button>
                                }
                                <button
                                    onClick={ ( ) => setSteps( prev => prev+1 ) }
                                    // disabled={ addEnable ? true : false }
                                    className="checkout-next-button">
                                        <p>Continuar</p>
                                </button>
                            </div>
                        }
                    </div>
                </div>

                <div
                style={{
                    width: "100%",
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "red"
                }}>

                </div>
            </div>

            {
                steps < 2 &&
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
            }
        </div>
    )
}

export default Checkout;