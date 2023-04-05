import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "@/context/CartContext"
import CartItem from "./CartItem";

export default function CartHome() {
    const { cartItems, setCartShow, totalCart } = useCart();
    console.log(cartItems);

    return (
        <div className="fixed w-[340px] h-full bg-white top-0 right-0 z-[10000] overflow-y-scroll pt-[70px]">
            <div className="fixed top-0 w-[340px] h-auto bg-green-300 flex justify-between items-center z-[10000000] pr-2">
                <div onClick={() => setCartShow(state => !state)} className="w-14 h-14 flex justify-center items-center">
                    <FontAwesomeIcon className="w-8 h-8 text-white text-lg" icon={faArrowLeft} />
                </div>
                <div>
                    <h4 className="text-white text-lg tracking-wide">CARRITO DE COMPRAS</h4>
                </div>
            </div>

            {cartItems.length !== 0 ?
                <div className="w-full h-auto flex flex-col justify-between items-center">
                    <ul className="w-full h-full mb-10">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                itemName={item.name}
                                itemId={item.id}
                                itemSrc={item.src}
                                itemQuantity={item.quantity}
                                itemPrice={item.price}
                            />
                        ))}
                    </ul>

                    <div className="w-full h-auto max-h-[400px] py-4 px-2 border-t border-green-500">
                        <div className="w-full h-auto flex justify-around items-start mb-4">
                            <p className="text-2xl text-green-500 font-bold">Total:</p>
                            <p className="text-2xl text-green-500 font-bold">{`$${totalCart}`}</p>
                        </div>
                        <div className="w-full h-auto flex flex-col justify-around items-center">
                            <button className="mb-2 p-2 w-[90%] bg-green-500 rounded-md text-white tracking-wide font-semibold" type="text">COMPRAR</button>
                            <p className="text-green-500 mt-2">Seguir comprando</p>
                        </div>
                    </div>
                </div>

                :

                <div className="w-full h-auto flex items-center justify-center p-2">
                    <p className="w-full text-center text-base p-4 bg-green-500 text-white rounded-md">Todavía no añadiste nada al carrito.</p>
                </div>

            }
        </div>
    )
}