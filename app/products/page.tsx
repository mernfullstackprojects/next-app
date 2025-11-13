'use client'
import { Suspense } from "react"
import { useAllProductsFn } from "../_query/productsQuery"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = () => {
    const { data } = useAllProductsFn()

    console.log(data?.data?.products)

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                {
                    data?.data?.products ?
                        <div className="flex flex-col items-center">
                            <section className="flex flex-wrap gap-3 w-fit">
                                {
                                    data?.data?.products.map(product => {
                                        return (
                                            <div className="bg-gray-400 flex flex-col w-[23%] pt-6" key={product.id} >
                                                <Image src={product.thumbnail} height={300} width={300} alt={`Product ${product.id}`} className="m-auto" />
                                                <p className="text-center">{product.title}</p>
                                                <Link href={`/products/${product.id}`} className="text-center mt-3 py-3 px-6 bg-amber-600">View</Link>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </div> :
                        <>Error fetching products</>
                }
            </Suspense>
        </>
    )
}

export default ProductsPage