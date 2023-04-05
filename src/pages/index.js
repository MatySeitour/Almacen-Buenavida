
import Home from "@/components/Home";
import Offers from "@/components/Offers";
import CategoriesHome from "@/components/CategoriesHome";
import ContactSection from "@/components/ContactSection";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function home() {
  return (
    <main className="w-screen h-screen bg-white">
      <Home />
      <Offers />
      <FeaturedProduct />
      <CategoriesHome />
      <ContactSection />
    </main>
  )
}
