"use client";

import { useEffect, useRef, useState } from "react";
import "./Barcode.css";
import JsBarcode from "jsbarcode";
import QRCode from "qrcode";
import { Utils } from "@/utils/utils";

interface Props {
    title: string 
    sku: string 
    price: number 
}

export const Barcode = ({ title, sku, price }: Props ) => {
    const barcodeRef = useRef<SVGSVGElement>(null);
    const [ qrCode, setQRCode ] = useState<string>("");

    const now = Date.now( );
    const date = new Date(now);

    useEffect(( ) => {
        generateBarcode( );
        generateQRCode( );
    }, [ ]);

    const generateBarcode = ( ) => {
        JsBarcode(barcodeRef.current, sku, {
            format: "CODE128",
            lineColor: "#000000",
            background: "rgba(0, 0, 0, 0)",
            width: .85,
            height: 30,
            displayValue: false,
            fontSize: 12,
        });
    }

    const generateQRCode = ( ) => {
        QRCode.toDataURL(sku, ( err, url ) => {
            setQRCode( url );
        });
    }

    return (
        <div
        className="barcode-layout--container">
            <div
            className="barcode-layout">
                <div
                style={{
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "green",
                }}>
                    <div
                    style={{
                        width: 100,
                        height: 100,
                        borderColor: "#000000",
                        // borderWidth: 1,
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red",
                    }}>
                        {
                            qrCode &&
                            <img 
                                src={ qrCode ? qrCode : "" }
                                style={{
                                    width: 86,
                                    height: 86,
                                    borderRadius: 10,
                                }}
                            />
                        }
                    </div>
                </div>

                <div
                style={{
                    height: "100%",
                    width: 140 ,
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "yellow"
                }}>
                    <div
                    style={{
                        width: "100%",
                        height: "50%",
                        paddingTop: 10,
                        paddingRight: 10,
                        // backgroundColor: "blue",
                    }}>
                        <div
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "1px solid #000000"
                        }}>
                            <div
                            style={{
                                width: "100%",
                                height: "50%",
                                borderBottomWidth: 1,
                                borderBottomColor: "#000000",
                                // backgroundColor: "red",
                            }}>
                                <div
                                style={{
                                    height: "100%",
                                    width: "50%",
                                    borderRightColor: "#000000",
                                    borderRightWidth: 1,
                                    padding: 2,
                                }}>
                                    <p
                                    style={{
                                        fontSize: 8,
                                    }}>TC STORE</p>
                                </div>
                            </div>

                            <div
                            style={{
                                width: "100%",
                                height: "50%",
                                display: "flex",
                                flexDirection: "row",
                                // backgroundColor: "red",
                            }}>
                                <div
                                style={{
                                    height: "100%",
                                    width: "50%",
                                    borderRightColor: "#000000",
                                    borderRightWidth: 1,
                                }}>
                                    <div
                                    style={{
                                        width: "100%",
                                        height: "50%",
                                        borderBottomColor: "#000000",
                                        borderBottomWidth: 1,
                                        paddingLeft: 2,
                                    }}>
                                        <p
                                        style={{
                                            fontSize: 7,
                                        }}>{ Utils.formateBarcodeTitle( title ) }</p>
                                    </div>

                                    <div
                                    style={{
                                        width: "100%",
                                        height: "50%",
                                        // backgroundColor: "green"
                                    }}>

                                    </div>
                                </div>

                                <div
                                style={{
                                    height: "100%",
                                    width: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "start",
                                    // backgroundColor: "blue",
                                    paddingLeft: 4,
                                }}>
                                    <p
                                    style={{
                                        fontSize: 18,
                                        letterSpacing: -2
                                    }}>R$ { Utils.formatPrice(price) }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                    style={{
                        width: "100%",
                        height: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // backgroundColor: "yellow",
                        paddingBottom: 10,
                        paddingRight: 10,
                    }}>
                        <p
                        style={{
                            fontSize: 4,
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-around"
                        }}>{ date.toString( ) }</p>
                        <svg 
                            ref={ barcodeRef }
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: "red"
                            }}></svg>
                        <p
                        style={{
                            backgroundColor: "#ffffff",
                            position: "absolute",
                            marginTop: 26,
                            fontSize: 7,
                            fontWeight: "700",
                            paddingLeft: 2,
                            paddingRight: 2,
                        }}>{ sku }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}