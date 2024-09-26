
import { ProductProps } from "@/types/Products"

export const products: ProductProps[] = [
    {
        productID: "AJNCJAC83727895732",
        productBarcode: "83727895732",
        productQRcode: "83727895732",
        name: "Blusa Masculina Tigre Militar",
        category: {
            id: "1",
            key: "kmkmvz",
            name: "blusa"
        },
        description: "Blusa masculina tigre militar",
        hasDiscount: true,
        hasInstallement: true,
        installment: {
            installmentPlan: {
                description: "",
                installmentAmount: 3,
                interestRate: 0.0,
                maxInstallmentsCount: 4,
                totalPrice: 31.00
            }
        },
        lastUpdated: new Date(1727131846699 * 1000),
        basePrice: {
            amount: 31.50,
            currency: "BRL",
            includeTax: false
        },
        paymentMethods: [
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
                key: "kscascsssv",
                name: "Cartão de Crédito",
                iconUrl: "@/assets/images/icons/credito.jpg",
            },
        ],
        pricesByPaymentMethod: [
            {
                paymentMethod: {
                    id: "1",
                    key: "kdfvvsv",
                    name: "Dinheiro",
                    includeTax: false,
                    iconUrl: "@/assets/images/icons/dinheiro.jpg",
                },
                priceDetails: {
                    amount: 31.00,
                    currency: "BRL",
                    discount: 3.00,
                    additionalFees: 0.0,
                    totalPrice: 28.00,
                    description: "Pagamento no dinheiro com 10% de desconto"
                }
            },
            {
                paymentMethod: {
                    id: "3",
                    key: "kscascsssv",
                    name: "Cartão de Crédito",
                    includeTax: true,
                    iconUrl: "@/assets/images/icons/credito.jpg",
                },
                priceDetails: {
                    amount: 31.00,
                    currency: "BRL",
                    discount: 0.00,
                    additionalFees: 0.0,
                    totalPrice: 31.00,
                    description: "Pagamento no cartão de crédito sem desconto"
                }
            }
        ],
        stockQuantity: 8,
        images: [
            {
                id: "jdnsjnd",
                height: 300,
                width: 300,
                url: "https://down-br.img.susercontent.com/file/sg-11134201-7rd3m-lub6dwppb9sied"
            },
            {
                id: "jdnsjnd",
                height: 300,
                width: 300,
                url: "https://drive.google.com/file/d/16Hty31Fy7BKMx2e-_dWlh5T01cOZcTcP/view?usp=sharing",
            }
        ]
    },
    {
        productID: "AJNCJAC1727224254898",
        productBarcode: "1727224254898",
        productQRcode: "1727224254898",
        name: "Tênis Nike Revolution 7 Masculino - Preto+Branco",
        category: {
            id: "2",
            key: "kmkmvw",
            name: "calçado"
        },
        description: "Tênis Nike Revolution 7 Masculino - Preto+Branco",
        hasDiscount: true,
        hasInstallement: true,
        installment: {
            installmentPlan: {
                description: "",
                installmentAmount: 3,
                interestRate: 0.0,
                maxInstallmentsCount: 4,
                totalPrice: 149.49
            }
        },
        lastUpdated: new Date(1727224254898 * 1000),
        basePrice: {
            amount: 149.49,
            currency: "BRL",
            includeTax: false
        },
        paymentMethods: [
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
                key: "kscascsssv",
                name: "Cartão de Crédito",
                iconUrl: "@/assets/images/icons/credito.jpg",
            },
        ],
        pricesByPaymentMethod: [
            {
                paymentMethod: {
                    id: "1",
                    key: "kdfvvsv",
                    name: "Dinheiro",
                    includeTax: false,
                    iconUrl: "@/assets/images/icons/dinheiro.jpg",
                },
                priceDetails: {
                    amount: 149.49,
                    currency: "BRL",
                    discount: 10.00,
                    additionalFees: 0.0,
                    totalPrice: 139.49,
                    description: "Pagamento no dinheiro com 10% de desconto"
                }
            }
        ],
        stockQuantity: 8,
        images: [
            {
                id: "jdnsjnd",
                height: 300,
                width: 300,
                url: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-masculino/26/JD8-6364-026/JD8-6364-026_zoom1.jpg?ts=1723646099?ims=400x"
            },
            {
                id: "jdnswnd",
                height: 300,
                width: 300,
                url: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-masculino/26/JD8-6364-026/JD8-6364-026_zoom1.jpg?ts=1723646099?ims=400x"
            }
        ]
    }
]