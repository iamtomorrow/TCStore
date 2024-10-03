
export const Utils = {
    formatPrice: ( price: number ): string => {
        let formated = "";

        formated = price.toFixed(2).toString( ).replace(".", ",");
        return formated;
    },

    formateBarcodeTitle: ( title: string ) => {
        let formated = "";
        
        if ( title.length > 20 ) {
            formated = title.substring(0, 20) + "...";
        } else {
            formated = title;
        }

        return formated
    }
}