import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "@/context/CartContext"
import CartItem from "./CartItem";

export default function CartHome({ cartShow }) {
    const { cartItems, setCartShow, totalCart } = useCart();

    return (
        <div className={cartShow ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <div className={cartShow ? "fixed w-full h-full translate-x-0 transition-all bg-gray-100 top-0 right-0 z-[10000] pt-[70px] duration-200" : "fixed w-full h-full translate-x-[500px] transition-all duration-200 bg-white top-0 right-0 z-[10000] overflow-y-scroll pt-[70px]"}>
                <div className="fixed top-0 w-full h-auto min-h-[60px] flex justify-between items-center z-[10000000] px-4">
                    <div onClick={() => setCartShow(state => !state)} className="w-[40px] h-[40px] shadow-md rounded-md flex justify-center items-center bg-white">
                        <FontAwesomeIcon className="w-7 h-7 text-green-500 text-lg" icon={faAngleLeft} />
                    </div>
                    <div className="w-[70%] p-2 text-center">
                        <h4 className="text-green-500 text-base tracking-wide font-medium">CARRITO DE COMPRAS</h4>
                    </div>
                    <div></div>
                </div>

                {cartItems.length !== 0 ?
                    <div className="w-full h-full flex flex-col justify-between items-center">
                        <ul className="w-full h-full max-h-[500px] overflow-y-scroll">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    itemName={item.name}
                                    itemId={item.id}
                                    itemSrc={item.src}
                                    itemQuantity={item.quantity}
                                    itemPrice={item.price}
                                    itemOffer={item.offer}
                                />
                            ))}
                        </ul>

                        <div className="w-full h-auto flex shadow-default py-4 px-2">
                            <div className="w-full h-auto flex flex-col justify-around items-start">
                                <p className="text-xl text-black font-bold">Total</p>
                                <p className="text-lg text-green-500 font-medium">{`$${totalCart}`}</p>
                            </div>
                            <div className="w-full h-auto flex flex-col justify-center items-center">
                                <button className="mb-2 p-2 w-[90%] bg-green-500 rounded-md text-white tracking-wide font-medium text-base" type="text">REVISAR COMPRA</button>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="w-full h-full flex flex-col items-center justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[100px] h-[100px] text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <p className="mt-4 text-lg text-green-700">Tu carrito de compras está vacio.</p>
                    </div>

                }
            </div>
        </div>
    )
}