import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedCard({ productSrc, productName, productStock, productPrice }) {
    const element = useRef(null);
    const screen = useIntersection(element);
    return (
        <div ref={element} className="relative w-[40%] h-[280px] bg-white rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center">
            {screen ?
                <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-xl flex flex-col items-center">
                    {!productStock ? <p className="absolute p-2 text-sm bg-green-500 left-2 top-2 font-bold text-white rounded-md">SIN STOCK</p> : <></>}
                    <figure className="mb-2">
                        <Image className="object-cover rounded-md object-center w-full h-full" priority={true} width={140} height={140} alt={productName} src={productSrc} />
                    </figure>
                    <div className="w-full h-full flex justify-around items-center flex-col">
                        <div className="w-full text-left pl-2 mb-2"><h4 className="text-green-500 text-xs font-bold">{productName}</h4></div>
                        <div className="w-full text-left pl-2 mb-2"><p className="text-green-500 text-xs font-bold tracking-wide">{productPrice}</p></div>
                        <div className="w-full px-2 h-auto flex justify-start mb-2">
                            <button className="bg-green-400 text-white w-full rounded-md tracking-wider font-bold" type="text"><FontAwesomeIcon icon={faCartShopping} /></button>
                        </div>
                    </div>
                </div>

                :

                <></>
            }
        </div>
    )
}