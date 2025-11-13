import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { allProductsFunction, singleProductFuntion, testAPIFunction } from "../_API/apiFunctions";
import { AllProductsResponse, SingleProductResponse, TestFunctionResponse } from "@/types/types.interface";

export const useTestAPIFn = (): UseQueryResult<TestFunctionResponse, Error> => {
    return useQuery({
        queryKey: ['TEST'],
        queryFn: testAPIFunction
    })
}

export const useAllProductsFn = (): UseQueryResult<AllProductsResponse, Error> => {
    return useQuery({
        queryKey: ["All_Products"],
        queryFn: allProductsFunction
    })
}

export const useSingleProductFn = (productId: number) : UseQueryResult<SingleProductResponse, Error> => {
    return useQuery({
        queryKey: ['Single_Product', productId],
        queryFn: () => singleProductFuntion(productId)
    })
}