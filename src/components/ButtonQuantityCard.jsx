import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function ButtonQuantityCard({
  productName,
  productPrice,
  productOffer,
  productSrc,
  productId,
}) {
  const { handleAddCart, cartItems, handleRemoverCart } = useCart();

  const [buttonQuantityHome, setButtonQuantityHome] = useState(0);

  const findProductInCart = cartItems.find(
    (product) => product.id == productId
  );

  useEffect(() => {
    let productInCart = cartItems.filter(
      (productInCart) => productInCart.id == productId
    );
    setButtonQuantityHome(productInCart[0]?.quantity);
  }, [cartItems]);

  return (
    <div className="w-[100%] flex flex-row items-start justify-between relative overflow-hidden">
      <>
        <div
          className={
            findProductInCart
              ? "w-[100%] h-[100%] flex flex-row bg-green-500 border border-green-500 rounded-md justify-between items-center absolute translate-y-0 transition-all"
              : "w-[100%] h-[100%] flex flex-row bg-white border border-green-500 rounded-md justify-between items-center absolute translate-y-[100px] transition-all"
          }
        >
          <button
            onClick={() => {
              const newCartItem = {
                name: productName,
                price: productPrice,
                quantity: 1,
                id: productId,
              };
              handleRemoverCart(newCartItem);
            }}
            className="w-[36px] text-xl text-white bg-green-500 rounded-md h-full"
            type="text"
          >
            -
          </button>
          <p className="text-xl text-white">{buttonQuantityHome}</p>
          <button
            onClick={() => {
              const newCartItem = {
                name: productName,
                price: productPrice,
                offer: productOffer,
                id: productId,
                src: productSrc,
                quantity: 1,
              };
              handleAddCart(newCartItem);
            }}
            className="w-[36px] text-xl text-white bg-green-500 rounded-md h-full flex justify-center items-center"
            type="text"
          >
            +
          </button>
        </div>

        <div
          className={
            !findProductInCart
              ? "w-[100%] h-[100%] absolute transition-all"
              : "w-[100%] h-[100%] absolute translate-y-[100px] transition-all"
          }
        >
          <button
            onClick={() => {
              const newCartItem = {
                name: productName,
                price: productPrice,
                offer: productOffer,
                id: productId,
                src: productSrc,
                quantity: 1,
              };
              handleAddCart(newCartItem);
            }}
            className={
              "bg-green-400 text-white text-xs w-[100%] flex justify-center rounded-md tracking-wider font-bold h-full"
            }
            type="text"
          >
            <div className="w-auto h-[100%] flex justify-center items-center relative">
              <FontAwesomeIcon
                className="w-[24px] h-[24px]"
                icon={faCartPlus}
              />
            </div>
          </button>
        </div>
      </>
    </div>
  );
}
