"use client";

import { Header } from "@/components/Header/Header";
import { Theme } from "@/theme/theme";
import { barcodes } from "../data/barcodes";
import { Barcode } from "@/layouts/Barcode/Barcode";

const Print = ( ) => {
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
            <Header restricted={true} />

            <div
            style={{
                width: "100%",
                height: 100,
                // background: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}> 
                <h2
                style={{
                    fontSize: 20,
                }}>Imprimir códigos</h2>
            </div>

            <div
            style={{
                width: "100%",
                height: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <button
                style={{
                    width: 190,
                    height: 42,
                    borderRadius: 25,
                    backgroundColor: Theme.primary.surfaceColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <p
                    style={{
                        color: Theme.primary.textColorOnSurface
                    }}>Imprimir todos</p>
                </button>

                <button
                style={{
                    width: 190,
                    height: 42,
                    borderRadius: 25,
                    backgroundColor: Theme.primary.surfaceColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <p
                    style={{
                        color: Theme.primary.textColorOnSurface
                    }}>Imprimir novos</p>
                </button>
            </div>

            <div
            style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexWrap: "wrap",
                rowGap: 4,
                columnGap: 4,
                padding: 10,
            }}>
                {
                    barcodes.map((item) => (
                        <Barcode 
                            price={ item.price }
                            sku={ item.sku }
                            title={ item.title }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Print;