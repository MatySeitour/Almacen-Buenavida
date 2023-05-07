import "react-multi-carousel/lib/styles.css";
import Logo from "@/components/Logo";
import CartHome from "./CartHome";
import Frase from "./Frase";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { cartShow, navMobilState } = useCart();

  return (
    <section className="w-full h-auto">
      <Logo />
      <Frase />
      <CartHome cartShow={cartShow} />
    </section>
  );
}
