import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext";

export default function Nav() {
    const [navSearchState, setNavSearchState] = useState(false);
    const { cartItems, cartShow, setCartShow } = useCart();

    useEffect(() => {
        if (cartShow) {
            document.body.classList.add("scroll")
        }
        else if (!cartShow) {
            document.body.classList.remove("scroll")
        }
    }, [cartShow])


    return (
        <header className="bg-green-500 shadow-lg w-full h-auto p-2 fixed z-[9999] overflow-hidden">
            <nav className="relative navbar p-0 bg-green-500 justify-between overflow-hidden flex-col">
                <div className="w-full flex justify-between">
                    <div className="flex justify-center items-center w-14 h-14">
                        <FontAwesomeIcon icon={faBars} className={"text-white text-2xl w-full"} />
                    </div>
                    <div className="w-14 h-14">
                        <Image width={56} height={56} alt="logo" src={"/logo.jpg"} className="rounded-full" />
                    </div>
                    <div onClick={() => setCartShow(state => !state)} className="w-14 h-14 flex justify-center items-center relative">
                        <span className="absolute top-1 right-2 bg-green-800 text-white rounded-full text-xs w-[16px] h-[16px] flex justify-center items-center">
                            {cartItems.length}
                        </span>
                        <FontAwesomeIcon icon={faCartShopping} className={"text-white text-2xl w-full"} />
                    </div>
                </div>

                <div className="w-[90%] h-auto flex py-2 flex-row items-center justify-center relative">
                    <div className="h-full w-full p-2 rounded-md bg-white flex items-center justify-center">
                        <input placeholder="¿Qué estás buscando?" type="text" className="placeholder:text-green-500 pl-1 w-full h-full inline-block bg-white outline-none text-green-500 text-lg" />
                        <FontAwesomeIcon icon={faSearch} className={" text-green-500 text-2xl"} />
                    </div>
                </div>
            </nav>
        </header>
    )
}