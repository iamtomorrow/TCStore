import { PaymentMethodProps } from "@/types/Payment";

export const paymentMethods: PaymentMethodProps[] = [
    {
        id: "1",
        includeTax: false,
        key: "kdfvvsv",
        name: "Dinheiro"
    },
    {
        id: "2",
        includeTax: false,
        key: "kdfcasssv",
        name: "PIX"
    },
    {
        id: "3",
        includeTax: true,
        key: "kscascsssv",
        name: "Cartão de Crédito"
    }
]