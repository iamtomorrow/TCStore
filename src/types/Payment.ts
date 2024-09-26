
export interface PaymentMethodProps {
    id: string
    key: string
    name: string
    includeTax: boolean
    iconUrl: string
}

export interface PriceByPaymentMethodProps {
    paymentMethod: PaymentMethodProps
    priceDetails: {
        amount: number
        currency: string
        discount: number
        additionalFees: number
        totalPrice: number
        description: string
    }
}