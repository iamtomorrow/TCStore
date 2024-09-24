
import { ProductProps } from "@/types/Products";
import "./CheckoutProductCard.css";
import Image from "next/image";
import { Theme } from "@/theme/theme";
import { BiTrash } from "react-icons/bi";
import { Utils } from "@/utils/utils";

export const CheckoutProductCard = ({
    name,
    images,
    basePrice,
    productBarcode,
    productQRcode
    }: ProductProps) => {
    return (
        <div
        className="checkout-product-card">
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <div
                style={{
                    minWidth: "25%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 14,
                    backgroundColor: Theme.primary.backgroundColor
                }}>
                    <Image 
                        alt="Product Image"
                        src={ images[0].url }
                        width={1000}
                        height={1000}
                        style={{
                            width: "auto",
                            height: "100%"
                        }}
                    />
                </div>

                <div
                style={{
                    paddingLeft: 16,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}>
                    <h1
                    style={{
                        fontSize: 18,
                        color: Theme.primary.textColorOnSurface
                    }}>{ name }</h1>

                    <h1
                    style={{
                        fontSize: 24,
                        color: Theme.primary.textColorOnSurface
                    }}>R$ { Utils.formatPrice( basePrice.amount ) }</h1>
                </div>

                <div
                style={{
                    minWidth: 80,
                    height: "100%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    // backgroundColor: "green",
                }}>
                    <button
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <BiTrash 
                            size={22}
                            color={ Theme.primary.textColorOnSurface }
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}