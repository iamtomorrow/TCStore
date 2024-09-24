
import { products } from "@/app/data/products";
import { NextRequest, NextResponse } from "next/server";

interface ParamsProps {
    params: {
        code: string
    }
}

export async function GET( req: NextRequest, { params }: ParamsProps ) {
    const { code } = params;

    const product = products.filter(( item ) => {
        return item.productBarcode === code;
    })

    if ( !product ) {
        return NextResponse.json({ error: "Product code have not match product."}, { status: 404 });
    }
    return NextResponse.json( product );
}
