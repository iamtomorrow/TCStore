
import "./PaymentMethodCard.css";
import { Theme } from "@/theme/theme"
import Image from "next/image"

interface Props {
    title: string 
    iconUrl: any
    active: boolean
    onClick: ( ) => void
}

export const PaymentMethodCard = ({ title, iconUrl, active, onClick }: Props ) => {
    return (
        <div
        onClick={ onClick }
        className="payment-method-card--container"
        style={{
            opacity: active ? 1 : 0.4,
        }}>
            <Image 
                src={ "" }
                alt="Payment Method Icon Image"
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