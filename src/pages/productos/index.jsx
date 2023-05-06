import Image from "next/image";
import Link from "next/link";
import getProducts from "../../utils/products.json"
import getCategories from "../../utils/categories.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faAngleDown, faAngleRight, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CartHome from "@/components/CartHome";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCategory } from "@/context/CategoriesContext";
import OrderProducts from "@/components/OrderProducts";
import ProductsLayout from "@/components/layouts/ProductsLayout";
import ProductsIndex from "@/components/ProductsIndex";


export default function Productos() {
    const {cartShow} = useCart();
    const {orderFilterState, setOrderFilterState, handleActiveOrder} = useCategory();

    const products = getProducts.products;
    const categories = getCategories.categories;

    const [categoriesFilterState, setCategoriesFilterState] = useState(false);


    return (
        <ProductsLayout>
            <>
                <ProductsIndex />
                <div className="w-full h-auto flex justify-between items-center mb-10">
                        <div className="w-auto flex flex-row items-center relative">
                            <p className="text-black">Ordenar por:</p>
                            <div className="w-auto flex flex-row items-center">
                                <p onClick={handleActiveOrder} className="ml-2 text-black font-medium">{orderFilterState.value}</p>
                                <FontAwesomeIcon onClick={handleActiveOrder} className="w-[16px] h-[16px] ml-2 text-green-500" icon={faAngleDown} />
                                <OrderProducts 
                                    orderFilterState={orderFilterState}
                                    setOrderFilterState={setOrderFilterState}
                                />
                            </div>
                        </div>
                    <button onClick={() => setCategoriesFilterState(true)} className="w-auto flex flex-row items-center relative bg-green-500 p-2 rounded-md">
                        <p className="mr-2 text-white text-sm font-medium tracking-wider">FILTRAR</p>
                        <FontAwesomeIcon className="text-white w-[14px] h-[14px]" icon={faAngleRight} />
                    </button>
                </div>

                <ul className="w-full h-full flex justify-around flex-wrap py-8">
                    {products.map((product) => (
                        <li className="relative w-[150px] h-[280px] rounded-md mb-8 flex flex-col justify-evenly items-center" key={product.id}>
                        <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-default flex flex-col items-center">
                            <Link className="w-full h-[140px] mb-2" href={`/products/${product.id}`}>
                                <figure className="mb-2 w-full h-[140px]">
                                    <Image className="object-cover rounded-t-md object-center w-full h-full"  priority={true} width={140} height={140} src={product.src} alt={product.name} />
                                </figure>
                            </Link>
                            <div className="w-full h-full flex justify-around items-center flex-col">
                                <div className="w-full h-[32px] text-left pl-2 mb-2">
                                    <h4 className="text-green-700 text-xs font-bold">
                                        {product.name.length > 40 ? `${product.name.slice(0, 40)}...` : product.name}
                                    </h4>
                                </div>
                                <div className="w-full text-left pl-2 mb-2">
                                    <p className="text-green-700 text-base font-bold tracking-wide mr-2">
                                        {`$${product.price}`}
                                    </p>
                                </div>
                                <div className="w-full px-2 h-auto flex justify-start mb-2">
                                    <button className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center" type="text">
                                        <FontAwesomeIcon className="w-[20px] h-[20px]" icon={faCartShopping} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>

                <CategoriesFilter
                    categoriesFilterState={categoriesFilterState}
                    setCategoriesFilterState={setCategoriesFilterState}
                />

                <CartHome
                    cartShow={cartShow}
                />
            </>  
        </ProductsLayout>
    )
}