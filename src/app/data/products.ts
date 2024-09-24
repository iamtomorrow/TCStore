
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
            },
        ],
        pricesByPaymentMethod: [
            {
                paymentMethod: {
                    id: "1",
                    key: "kdfvvsv",
                    name: "Dinheiro",
                    includeTax: false,
                },
                priceDetails: {
                    amount: 31.00,
                    currency: "BRL",
                    discount: 3.00,
                    additionalFees: 0.0,
                    totalPrice: 28.00,
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
                url: "https://down-br.img.susercontent.com/file/sg-11134201-7rd3m-lub6dwppb9sied"
            },
            {
                id: "jdnsjnd",
                height: 300,
                width: 300,
                url: "https://drive.google.com/file/d/16Hty31Fy7BKMx2e-_dWlh5T01cOZcTcP/view?usp=sharing",
            }
        ]
    }
]