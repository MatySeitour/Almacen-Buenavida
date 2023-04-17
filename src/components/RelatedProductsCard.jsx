import Image from "next/image";
import Link from "next/link";
import useIntersection from "@/CustomHooks/useIntersection"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function RelatedProductsCard({ productStock, productName, productPrice, productSrc, productId }) {
    const element = useRef(null);
    const screen = useIntersection(element);
    return (
        <div ref={element} className="relative w-[40%] h-[280px] mb-8 mr-2 flex flex-col justify-evenly items-center">
            {screen ?
                <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-xl flex flex-col items-center">
                    {!productStock ? <p className="absolute p-2 text-sm bg-green-500 left-2 top-2 font-bold text-white rounded-md">SIN STOCK</p> : <></>}
                    <Link href={`/products/${productId}`}>
                        <figure className="mb-2">
                            <Image className="object-cover rounded-md object-center w-full h-full" width={140} height={140} priority={true} alt={productName} src={productSrc} />
                        </figure>
                    </Link>
                    <div className="w-full h-full flex justify-around items-center flex-col">
                        <div className="w-full text-left pl-2 mb-2"><h4 className="text-green-500 text-xs font-bold">{productName}</h4></div>
                        <div className="w-full text-left pl-2 mb-2"><p className="text-green-500 text-xs font-bold tracking-wide">{productPrice}</p></div>
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