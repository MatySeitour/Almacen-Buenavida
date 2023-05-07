import Home from "@/components/Home";
import Offers from "@/components/Offers";
import CategoriesHome from "@/components/CategoriesHome";
import FeaturedProduct from "@/components/FeaturedProduct";
import { useCart } from "@/context/CartContext";
import CarouselContainer from "@/components/CarouselContainer";
import CardsInfoContainer from "@/components/CardsInfoContainer";

export default function Main() {
  const { setFocus } = useCart();

  return (
    <div
      onClick={() => setFocus(false)}
      className="min-w-screen min-h-screen h-auto w-auto"
    >
      <Home />
      <CarouselContainer />
      <CardsInfoContainer />
      <Offers />
      <FeaturedProduct />
      <CategoriesHome />
    </div>
  );
}
