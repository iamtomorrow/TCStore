
import Image from "next/image"
import "./ShippingCard.css";
import { Theme } from "@/theme/theme";

interface Props {
    title: string 
    iconUrl: any
    active: boolean
    onClick: ( ) => void
}

export const ShippingCard = ({ title, iconUrl, active, onClick }: Props ) => {
    return (
        <div
        onClick={ onClick }
        className="shipping-card--container"
        style={{
            opacity: active ? 1 : 0.4,
        }}>
            <Image 
                src={ iconUrl }
                alt="Shipping Icon Image"
                width={1000}
                height={1000}
                style={{
                    width: "70%",
                }}
            />
            <h1
            style={{
                color: Theme.primary.textColorOnSurface,
                fontSize: 16
            }}>{ title }</h1>
        </div>
    )
}