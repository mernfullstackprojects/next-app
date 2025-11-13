import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface TestFunctionResponse {
    success: boolean,
    message: string,
    error?: Error,
    data?: {
        status: string,
        method: string,
    }
}

interface SingleProductData {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    reviews: {
        rating: number,
        comment: string,
        date: Date,
        reviewerName: string,
        reviewerEmail: string,
    }[],
    meta: {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode?: string,
    },
    thumbnail: string,
}

export interface SingleProductResponse {
    success: boolean,
    message: string,
    error?: Error,
    data?: SingleProductData
}


export interface AllProductsResponse {
    success: boolean,
    message: string,
    error?: Error,
    data?: {
        products: SingleProductData[]
    }

}