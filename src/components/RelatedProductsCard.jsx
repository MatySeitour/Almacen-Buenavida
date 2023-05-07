import Image from "next/image";
import Link from "next/link";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";
import ButtonQuantityCard from "./ButtonQuantityCard";
import { useCart } from "@/context/CartContext";
import ProductPriceCard from "./ProductPriceCard";

export default function RelatedProductsCard({
  productStock,
  productName,
  productPrice,
  productSrc,
  productId,
  productOffer,
}) {
  const element = useRef(null);
  const screen = useIntersection(element);

  const { handleAddCart } = useCart();

  return (
    <div
      ref={element}
      className="relative w-[150px] h-[280px] mb-8 mr-2 flex flex-col justify-evenly items-center"
    >
      {screen ? (
        <div className="animate-subtitleAppear w-full h-full bg-white shadow-default flex flex-col items-center rounded-md">
          {!productStock ? (
            <p className="absolute p-1 text-xs bg-green-500 left-2 top-2 font-bold text-white rounded-sm">
              SIN STOCK
            </p>
          ) : (
            <></>
          )}
          <span className="absolute w-[40px] h-[40px] rounded-full bg-green-500 -top-4 -right-4 flex text-center justify-center z-[20]">
            <p className="flex justify-center items-center text-white font-bold text-xs">
              {productOffer == "2x1" ? "2x1" : `-${productOffer}%`}
            </p>
          </span>
          <Link className="w-full" href={`/products/${productId}`}>
            <figure className="mb-2 w-[100%] h-[140px]">
              <Image
                className="object-cover rounded-t-md object-center w-full h-full"
                width={140}
                height={140}
                priority={true}
                alt={productName}
                src={productSrc}
              />
            </figure>
          </Link>
          <div className="w-full h-full flex justify-around items-center flex-col">
            <div className="w-full text-left pl-2 mb-2 h-[32px]">
              <h4 className="text-green-700 text-xs font-bold">
                {productName.length > 40
                  ? `${productName.slice(0, 40)}...`
                  : productName}
              </h4>
            </div>
            <ProductPriceCard
              productOffer={productOffer}
              productPrice={productPrice}
            />
            <div className="w-full px-2 h-auto min-h-[30px] flex justify-center mb-2">
              <>
                <ButtonQuantityCard
                  productName={productName}
                  productPrice={productPrice}
                  productOffer={productOffer}
                  productId={productId}
                  productSrc={productSrc}
                  handleAddCart={handleAddCart}
                  productStock={productStock}
                />
              </>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
