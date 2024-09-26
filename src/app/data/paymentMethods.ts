import { PaymentMethodProps } from "@/types/Payment";

export const paymentMethods: PaymentMethodProps[] = [
    {
        id: "1",
        includeTax: false,
        key: "kdfvvsv",
        name: "Dinheiro",
        iconUrl: "@/assets/images/icons/dinheiro.jpg",
    },
    {
        id: "2",
        includeTax: false,
        key: "kdfcasssv",
        name: "PIX",
        iconUrl: "@/assets/images/icons/pix.jpg",
    },
    {
        id: "3",
        includeTax: true,
        key: "kscascsss",
        name: "Cartão de Crédito",
        iconUrl: "@/assets/images/icons/credito.jpg",

    }
]