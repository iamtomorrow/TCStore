import { Theme } from "@/theme/theme"
import { ProductProps } from "@/types/Products"
import { Utils } from "@/utils/utils"
import Image from "next/image"
import { BiShoppingBag } from "react-icons/bi"

export const ProductCard = ({ 
    name, 
    description,
    images,
    basePrice }: ProductProps) => {
    return (
        <div
        style={{
            width: 240,
            height: 460,
            borderRadius: 20,
            // backgroundColor: "red",
        }}>
            <div
            style={{
                width: "100%",
                height: "60%",
                borderRadius: 20,
                padding: 30,
                backgroundColor: Theme.secondary.surfaceColor,
            }}>
                <Image 
                    src={ images[0].url }
                    alt="Product Image"
                    height={1000}
                    width={1000}
                    draggable={ false }
                    itemID={ images[0].id }
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            <div
            style={{
                width: "100%",
                height: "auto",
                // backgroundColor: "green",
            }}>
                <h2
                style={{
                    fontSize: 20,
                }}>{ name }</h2>
            </div>

            <div
            style={{
                width: "100%",
                height: 60,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // backgroundColor: "yellow"
            }}>
                <p
                style={{
                    fontSize: 14,
                    lineHeight: 1.4,
                    color: Theme.secondary.textColorOnBackground
                }}>Vendido e entregue por:</p>
                <h2 
                style={{
                    fontSize: 18,
                    lineHeight: 0.8,
                    textTransform: "uppercase"
                }}>TC Store</h2>
            </div>
            
            <div
            style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                // backgroundColor: "green",
            }}>
                <h2
                style={{
                    fontSize: 26,
                    fontWeight: "bold",
                }}>R$</h2>
                <h2
                style={{
                    fontSize: 46,
                    lineHeight: 1,
                    fontWeight: "700",
                    letterSpacing: -5,
                }}>{ Utils.formatPrice( basePrice.amount ) }</h2>
            </div>

            <div
            style={{
                width: "100%",
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // backgroundColor: "violet"
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
                    }}>Comprar</p>
                </button>

                <button
                style={{
                    width: 42,
                    height: 42,
                    borderRadius: 25,
                    backgroundColor: Theme.primary.surfaceColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <BiShoppingBag 
                        width={36}
                        style={{
                            color: Theme.primary.textColorOnSurface
                        }}
                    />
                </button>
            </div>
        </div>
    )
}