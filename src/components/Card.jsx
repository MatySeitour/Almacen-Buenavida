import Image from "next/legacy/image";
import Link from "next/link";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";
import { useCart } from "@/context/CartContext";
import ButtonQuantityCard from "./ButtonQuantityCard";

export default function Card({
  productSrc,
  productName,
  productPrice,
  productStock,
  productOffer,
  productId,
}) {
  const { handleAddCart } = useCart();

  const element = useRef(null);
  const screen = useIntersection(element);

  let discountPriceOffer = productOffer != "2x1" ? parseInt(productOffer) : 0;
  discountPriceOffer = (productPrice * discountPriceOffer) / 100;
  discountPriceOffer = productPrice - discountPriceOffer;

  return (
    <li
      ref={element}
      className="relative w-[260px] h-[420px] p-4 mr-6 rounded-lg flex flex-col justify-around items-center"
    >
      {screen ? (
        <div className="animate-subtitleAppear w-full pb-4 h-full shadow-default bg-white rounded-lg flex flex-col justify-between items-center relative">
          {!productStock ? (
            <p className="absolute p-2 bg-green-500 left-3 top-2 font-bold text-white rounded-md z-[20]">
              SIN STOCK
            </p>
          ) : (
            <></>
          )}
          <span className="absolute w-[50px] h-[50px] rounded-full bg-green-500 -top-4 -right-4 flex text-center justify-center z-[20]">
            <p className="flex justify-center items-center text-white font-bold">
              {productOffer == "2x1" ? "2x1" : `-${productOffer}%`}
            </p>
          </span>

          <Link className="rounded-lg" href={`/products/${productId}`}>
            <figure className="rounded-t-lg">
              <Image
                className="object-cover rounded-t-lg object-center"
                priority={true}
                width={220}
                height={200}
                alt={productName}
                src={productSrc}
              />
            </figure>
          </Link>

          <div className="w-full h-auto flex flex-col justify-center items-center p-2 rounded-sm">
            <Link className="mb-4 w-full" href={`/products/${productId}`}>
              <h4 className="text-green-700 text-lg font-medium text-center w-full h-[48px]">
                {productName.length > 44
                  ? `${productName.slice(0, 44)}...`
                  : productName}
              </h4>
            </Link>

            <div className="w-full h-auto flex justify-center items-center mb-2">
              <p className="text-green-700 text-2xl font-bold tracking-wide mr-2">
                {`$${discountPriceOffer}`}
              </p>
              {productOffer !== "2x1" ? (
                <span className="line-through text-green-700 text-sm font-normal tracking-wide translate-y-[0.5px]">{`$${productPrice}`}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="w-full h-auto min-h-[40px] flex justify-evenly mb-2 px-2">
            {productStock ? (
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
                {/* <button className="bg-white border border-green-500 text-green-500 text-xs w-[30%] flex justify-center items-center p-1 rounded-md tracking-wider font-bold" type="text">VER</button> */}
              </>
            ) : (
              <>
                <button
                  className="bg-white text-green-500 text-xs border border-green-500 w-[90%] p-2 rounded-md tracking-wider font-bold"
                  type="text"
                >
                  VER
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
