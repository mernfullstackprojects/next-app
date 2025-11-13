'use client'
import { useSingleProductFn } from "@/app/_query/productsQuery"
import Image from "next/image"
import { Suspense, use } from "react"

const SingleProduct = ({params}: {params: Promise<{slug: number}>}) => {
    const { slug } = use(params)
    const {data} = useSingleProductFn(slug)
    console.log(data, slug)
    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <div>
                    {data?.data?.thumbnail && <Image src={data.data.thumbnail} alt="product" height={600} width={600}/>}
                </div>
            </Suspense>
        </>
    )
}

export default SingleProduct