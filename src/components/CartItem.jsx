import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "@/context/CartContext"
import { useEffect, useState } from "react";

export default function CartItem({ itemName, itemSrc, itemQuantity, itemPrice, itemId, itemOffer }) {
    const { handleRemoverCart, handleAddCart, cartItems, handleDeleteCart } = useCart();
    const discountProductCart = ((parseInt(itemOffer) * itemPrice) / 100) * itemQuantity;
    const discountTotalCart = (itemPrice * itemQuantity) - discountProductCart;

    return (
        <li className="w-full h-[auto] min-h-[100px] flex flex-col justify-between p-2 mb-4 border-b border-gray-200">
            <div className="w-full h-auto flex flex-col px-2 mb-4">
                <div className="w-full h-auto flex flex-row">
                    <figure className="w-auto h-[100px] flex justify-start items-center mr-2 relative">
                        {itemOffer !== "2x1" ? <span></span> : <span className="w-6 h-6 flex justify-center items-center absolute -top-0 -right-1 text-xs p-1 bg-green-500 text-white font-medium rounded-full">{itemOffer}</span>}
                        <Image className="object-cover" src={itemSrc} priority={true} width={100} height={100} alt={itemName} />
                    </figure>
                    <div className="w-full h-auto flex justify-between items-center mb-2">
                        <h5 className="text-base max-w-[200px] text-green-500 font-medium">{itemName.length > 37 ? `${itemName.slice(0, 37)}...` : itemName}</h5>
                        <FontAwesomeIcon
                            onClick={() => {
                                const cartItemDelete = {
                                    name: itemName,
                                    price: itemPrice,
                                    quantity: itemQuantity,
                                    id: itemId,
                                }
                                handleDeleteCart(cartItemDelete)
                            }} className="w-[24px] h-[24px] text-green-400" icon={faTrash} />
                    </div>
                </div>
                <div className="w-[120px] flex flex-row rounded-md justify-between items-center">
                    <button
                        onClick={() => {
                            const newCartItem = {
                                name: itemName,
                                price: itemPrice,
                                quantity: 1,
                                id: itemId,
                            }
                            handleRemoverCart(newCartItem)
                        }}
                        className="w-[34px] h-[34px] bg-green-500 ont-bold text-2xl text-white rounded-sm flex justify-center items-center" type="text">-</button>
                    <p className="text-lg text-green-500 w-[20px] h-[20px] flex justify-center items-center text-center bg-transparent outline-none">{itemQuantity}</p>
                    <button
                        onClick={() => {
                            const newCartItem = {
                                name: itemName,
                                price: itemPrice,
                                quantity: 1,
                                id: itemId,
                            }
                            handleAddCart(newCartItem)
                        }}
                        className="w-[34px] h-[34px] bg-green-500 font-bold text-xl text-white rounded-sm flex justify-center items-center" type="text">+</button>
                </div>
            </div>
            <div className="w-full px-2 h-full flex flex-col justify-around relative">
                <div>
                    <p className="text-black font-medium flex w-full justify-between items-center">Subtotal: <b>{`$${itemPrice * itemQuantity}`}</b></p>
                    <p className="text-black font-medium flex w-full justify-between items-center">{itemOffer == "2x1" ? "" : "Oferta:"}<b>{itemOffer != "2x1" ? `-%${itemOffer}` : <></>}</b></p>
                    <p className="text-black font-medium flex w-full justify-between items-center">{itemOffer == "2x1" ? "" : "Descuento:"} <b>{itemOffer != "2x1" ? `- $${discountProductCart}` : <></>}</b></p>
                    <p className="text-black font-medium flex w-full justify-between items-center">Total: <b>{itemOffer != "2x1" ? `$${discountTotalCart}` : `$${itemQuantity * itemPrice}`}</b></p>
                </div>
            </div>
        </li>
    )
}