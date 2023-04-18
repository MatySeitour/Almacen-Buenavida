import Image from "next/image";
import Link from "next/link";
import useIntersection from "@/CustomHooks/useIntersection"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function RelatedProductsCard({ productStock, productName, productPrice, productSrc, productId, productOffer }) {
    const element = useRef(null);
    const screen = useIntersection(element);

    const discountPriceProductRelated = productOffer != "2x1" ? parseInt(productOffer) : null;
    const discountPriceTotalProductRelated =  productPrice - (discountPriceProductRelated * productPrice / 100)

    console.log(productStock);

    return (
        <div ref={element} className="relative w-[42%] h-[280px] mb-8 mr-2 flex flex-col justify-evenly items-center">
            {screen ?
                <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-md flex flex-col items-center">
                    {!productStock ? <p className="absolute p-1 text-xs bg-green-500 left-2 top-2 font-bold text-white rounded-sm">SIN STOCK</p> : <></>}
                    <span className="absolute w-[40px] h-[40px] rounded-full bg-green-500 -top-4 -right-4 flex text-center justify-center z-[20]">
                            <p className="flex justify-center items-center text-white font-bold text-xs">{productOffer == "2x1" ? "2x1" : `${productOffer}% OFF`}</p>
                    </span>
                    <Link href={`/products/${productId}`}>
                        <figure className="mb-2 w-[140px] h-[140px]">
                            <Image className="object-cover rounded-md object-center max-h-[140px] min-h-[140px] w-full h-full" width={140} height={140} priority={true} alt={productName} src={productSrc} />
                        </figure>
                    </Link>
                    <div className="w-full h-full flex justify-around items-center flex-col">
                        <div className="w-full text-left pl-2 mb-2 h-[32px]"><h4 className="text-green-700 text-xs font-bold">{productName.length > 40 ? `${productName.slice(0, 40)}...` : productName}</h4></div>
                        <div className="w-full h-auto flex pl-2 justify-start items-center mb-2">
                                <p className="text-green-700 text-base font-bold tracking-wide mr-2">
                                    {`$${discountPriceTotalProductRelated}`}
                                </p>
                                {productOffer !== "2x1" ? <span className="line-through text-green-700 text-xs font-normal tracking-wide -translate-y-[2px]">{`$${productPrice}`}</span> : <></>}
                            </div>
                        <div className="w-full p-2 h-auto mb-2">
                            <button className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center" type="text"><FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCartShopping} /></button>
                        </div>
                    </div>
                </div>

                :

                <></>
            }
        </div>
    )
}