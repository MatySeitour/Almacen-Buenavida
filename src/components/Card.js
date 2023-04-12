import Image from "next/image"
import Link from "next/link";
import useIntersection from '@/CustomHooks/useIntersection';
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";

export default function Card({ productSrc, productName, productPrice, productStock, productOffer, productId }) {
    const element = useRef(null);
    const screen = useIntersection(element);
    let discountPrice = productOffer != "2x1" ? parseInt(productOffer) : 0;
    discountPrice = (productPrice * discountPrice) / 100;
    discountPrice = productPrice - discountPrice;

    const { cartItems, handleAddCart } = useCart();


    return (

        <div ref={element} className="relative w-[250px] h-[450px] p-4 mr-8 rounded-md flex flex-col justify-around items-center">
            {
                screen ?
                    <div className="animate-subtitleAppear w-[220px] pb-4 h-full shadow-lg bg-white rounded-md flex flex-col justify-between items-center relative">
                        {!productStock ? <p className="absolute p-2 bg-green-500 left-4 top-2 font-bold text-white rounded-md">SIN STOCK</p> : <></>}
                        <span className="absolute w-[50px] h-[50px] rounded-full bg-green-500 -top-4 -right-4 flex text-center justify-center">
                            <p className="flex justify-center items-center text-white font-bold">{productOffer == "2x1" ? "2x1" : `${productOffer}%`}</p>
                        </span>

                        <Link className="" href={`/products/${productId}`}>
                            <figure className="rounded-t-lg">
                                <Image className="object-cover rounded-t-lg object-center" priority={true} width={220} height={200} alt={productName} src={productSrc} />
                            </figure>
                        </Link>

                        <div className="w-full h-[120px] min-h-[132px] max-h-[132px] flex flex-col justify-center items-center p-4">
                            <Link className="mb-4" href={`/products/${productId}`}>
                                <h4 className="text-green-500 text-base font-bold text-center h-[48px] w-full">{productName.length > 40 ? `${productName.slice(0, 40)}...` : productName}</h4>
                            </Link>

                            <div className="w-full h-auto flex justify-center items-center">
                                {productOffer !== "2x1" ? <span className="line-through text-green-500 text-sm font-bold tracking-wide mr-2 translate-y-[0.5px]">{`$${productPrice}`}</span> : <></>}
                                <p className="text-green-500 text-xl font-bold tracking-wide">
                                    {`$${discountPrice}`}
                                </p>
                            </div>

                        </div>
                        <div className="w-full h-auto flex justify-evenly mb-2">
                            {productStock ?
                                <>
                                    <button onClick={() => {
                                        const newCartItem = {
                                            name: productName,
                                            price: productPrice,
                                            offer: productOffer,
                                            id: productId,
                                            src: productSrc
                                        }
                                        handleAddCart(newCartItem)
                                    }}
                                        className="bg-green-400 text-white text-xl min-w-[90px] max-w-[100px] p-2 rounded-full tracking-wider font-bold" type="text"><FontAwesomeIcon icon={faCartShopping} /></button>
                                    <button className="bg-white text-green-500 text-xs border border-green-500 w-[90px] p-2 rounded-full tracking-wider font-bold" type="text">VER</button>
                                </>

                                :

                                <>
                                    <button className="bg-white text-green-500 text-xs border border-green-500 w-[90%] p-2 rounded-full tracking-wider font-bold" type="text">VER</button>
                                </>
                            }
                        </div>
                    </div>

                    :

                    <></>

            }
        </div>
    )
}