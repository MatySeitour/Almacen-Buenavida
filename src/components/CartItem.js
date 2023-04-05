import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "@/context/CartContext"

export default function CartItem({ itemName, itemSrc, itemQuantity, itemPrice, itemId }) {
    const { handleRemoverCart, handleAddCart } = useCart();

    return (
        <li className="w-full h-[100px] flex flex-row justify-between p-2">
            <figure className="w-auto h-auto flex justify-center items-center">
                <Image className="object-cover" src={itemSrc} width={100} height={100} alt={itemName} />
            </figure>
            <div className="w-full pl-2 h-full flex flex-col justify-around relative">
                <div className="w-full h-auto flex justify-between items-center mb-2">
                    <h5 className="text-base max-w-[200px] text-green-500 font-medium">{itemName}sadasasdasddsa</h5>
                    <FontAwesomeIcon className="text-lg text-green-400" icon={faTrash} />
                </div>
                <div className="w-full h-auto flex justify-between items-center">
                    <div className="border-2 border-gray-400 flex flex-row rounded-md justify-between items-center">
                        <button
                            onClick={() => {
                                const newCartItem = {
                                    name: itemName,
                                    price: itemPrice,
                                    quantity: itemQuantity,
                                    id: itemId,
                                }
                                handleRemoverCart(newCartItem)
                            }}
                            className="w-[34px] h-[34px] font-bold text-2xl text-green-500 rounded-sm flex justify-center items-center" type="text">-</button>
                        <p className="text-lg text-green-500 w-[20px] h-[20px] flex justify-center items-center text-center bg-transparent outline-none">{itemQuantity}</p>
                        <button
                            onClick={() => {
                                const newCartItem = {
                                    name: itemName,
                                    price: itemPrice,
                                    quantity: itemQuantity,
                                    id: itemId,
                                }
                                handleAddCart(newCartItem)
                            }}
                            className="w-[34px] h-[34px] font-bold text-xl text-green-500 rounded-sm flex justify-center items-center" type="text">+</button>
                    </div>
                    <p className="text-black text-sm font-semibold tracking-wider">{`$${itemPrice * itemQuantity}`}</p>
                </div>
            </div>
        </li>
    )
}