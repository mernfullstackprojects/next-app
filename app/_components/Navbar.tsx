import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="flex py-4 px-[100px] items-center justify-between bg-orange-300">
            <div className="logo_container">
                <Image src="/logo.png" alt="Logo" className="w-16 rounded-full" height={100} width={100} loading="eager"/>
            </div>
            <div className="menu_items_container">
                <ul className="flex gap-2.5">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/products'>Products</Link>
                    </li>
                    <li>
                        <Link href='#'>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar