"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ButtonAddCart({productName, productId, productOffer, productPrice, icon, productSrc, handleAddCart}){
    return(
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
        className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center" type="text"><FontAwesomeIcon className="w-[20px] h-[20px]" icon={icon} /></button>
    )
}