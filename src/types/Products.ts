import { PaymentMethodProps, PriceByPaymentMethodProps } from "./Payment"

export interface ProductProps {
    productID: string
    productBarcode: string
    productQRcode: string
    name: string
    description: string
    category: {
      id: string
      key: string
      name: string
    }
    lastUpdated: Date
    hasDiscount: boolean
    hasInstallement: boolean
    stockQuantity: number
    basePrice: {
      amount: number
      currency: string
      includeTax: boolean
    }
    paymentMethods: PaymentMethodProps[]
    pricesByPaymentMethod: PriceByPaymentMethodProps[]
    installment: {
      installmentPlan: {
        maxInstallmentsCount: number
        interestRate: number
        installmentAmount: number
        totalPrice: number
        description: string
      }
    } | null
    images: ProductImage[]
  }
  
interface ProductImage {
    id: string 
    height: number 
    width: number 
    url: string
}