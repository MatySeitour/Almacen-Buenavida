import { useCart } from "@/context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavMobile() {
    const { navMobileState } = useCart();
    const [navHamburgerIcon, setNavHamburgerIcon] = useState(false);

    return (
        <div className={navMobileState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <div className={navMobileState ? "fixed w-[80%] h-full translate-x-0 transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll p-2" : "fixed w-[80%] h-full -translate-x-[100%] transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll p-2"}>
                <div className="w-full h-full bg-red-200 relative">
                    <FontAwesomeIcon icon={faCross} />
                </div>
            </div>
        </div>
    )
}