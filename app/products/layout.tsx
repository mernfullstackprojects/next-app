const allProductsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <>Layout Header</>
            {children}
            <>Layout Footer</>
        </>
    )
}

export default allProductsLayout