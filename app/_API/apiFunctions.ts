import axiosInstance from "./axios"
import endPoints from "./endPoints"
import { AllProductsResponse, SingleProductResponse, TestFunctionResponse } from "@/types/types.interface"

export const testAPIFunction = async (): Promise<TestFunctionResponse> => {
    try {
        const response = await axiosInstance.get(endPoints.test)
        return {
            success: true,
            message: "API is working properly",
            data: {
                method: response?.data?.method,
                status: response?.status as unknown as string,
            }
        }
    } catch (error) {
        return {
            success: false,
            message: "API connection failed",
            error: error as Error,
        }
    }
}

export const allProductsFunction = async (): Promise<AllProductsResponse> => {
    try {
        const response = await axiosInstance.get(endPoints.allProducts)
        return {
            success: true,
            message: "All Products Fetched",
            data: response?.data
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch products",
            error: error as Error,
        }
    }
}

export const singleProductFuntion = async (productId: number): Promise<SingleProductResponse> => {
    try {
        const response = await axiosInstance.get(`${endPoints.allProducts}/${productId}`)
        return {
            success: true,
            message: "Successfully fetched the requested product",
            data: response?.data
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch the requested product",
            error: error as Error,
        }
    }
}