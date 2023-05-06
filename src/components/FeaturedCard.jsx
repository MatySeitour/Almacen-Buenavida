import Image from "next/image";
import Link from "next/link";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";
import ProductPriceCard from "./ProductPriceCard";
import ButtonQuantityCard from "./ButtonQuantityCard";

export default function FeaturedCard({ productSrc, productName, productStock, productPrice, productId, productOffer }) {
    const element = useRef(null);
    const screen = useIntersection(element);

    return (
        <li ref={element} className="relative w-[150px] h-[280px] rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center">
            {screen ?
                <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-default flex flex-col items-center">
                    {!productStock ? <p className="absolute p-2 text-sm bg-green-500 left-2 top-2 font-bold text-white rounded-md">SIN STOCK</p> : <></>}
                    <span className="absolute w-[40px] h-[40px] rounded-full bg-green-500 -top-4 -right-4 flex text-center justify-center z-[20]">
                        <p className="flex justify-center items-center text-white font-bold text-xs">{productOffer == "2x1" ? "2x1" : `-${productOffer}%`}</p>
                    </span>
                    <Link href={`/products/${productId}`} className="mb-2 w-full h-[140px]">
                    <figure className="w-full h-[100%] min-h-[140px]">
                        <Image className="object-cover rounded-t-md object-center w-full h-full" priority={true} width={140} height={140} alt={productName} src={productSrc} />
                    </figure>
                    </Link>
                    <div className="w-full h-full flex justify-around items-center flex-col">
                        <div className="w-full h-[32px] text-left pl-2 mb-2"><h4 className="text-green-700 text-xs font-bold">{productName.length > 40 ? `${productName.slice(0, 40)}...` : productName}</h4></div>
                            <ProductPriceCard 
                                productOffer={productOffer}
                                productPrice={productPrice}
                            />
                        <div className="w-full px-2 h-auto min-h-[34px] flex justify-center mb-2">
                            <ButtonQuantityCard 
                                productSrc={productSrc}
                                productId={productId}
                                productOffer={productOffer}
                                productName={productName}
                                productPrice={productPrice}
                            /> 
                        </div>
                    </div>
                </div>

                :

                <></>
            }
        </li>
    )
}