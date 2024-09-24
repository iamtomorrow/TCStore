
export const Utils = {
    formatPrice: ( price: number ): string => {
        let formated = "";

        formated = price.toString( ).replace(".", ",");
        return formated;
    }
}