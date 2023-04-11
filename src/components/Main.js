import Home from "@/components/Home";
import Offers from "@/components/Offers";
import CategoriesHome from "@/components/CategoriesHome";
import ContactSection from "@/components/ContactSection";
import FeaturedProduct from "@/components/FeaturedProduct";
import { useCart } from "@/context/CartContext";

export default function Main() {
    const { setFocus } = useCart();

    return (
        <div onClick={() => setFocus(false)} className="min-w-screen min-h-screen h-auto w-auto">
            <Home />
            <Offers />
            <FeaturedProduct />
            <CategoriesHome />
        </div>
    )
}