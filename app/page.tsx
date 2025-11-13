'use client'
import { Suspense } from "react";
import { useTestAPIFn } from "./_query/productsQuery";
import Link from "next/link";

export default function Home() {

	const { data, isError, isLoading } = useTestAPIFn()

	console.log(data)

	return (
		<>
			<Suspense fallback={<>Loading...</>} >
				<p>Message: {data?.message}</p>
				<p>Success: {data?.success ? 'true' : 'false'}</p>
				<p>Status: {data?.data?.status}</p>
				<p>Method: {data?.data?.method}</p>
				<Link href='/products'>See Products</Link>
			</Suspense>
		</>
	);
}
