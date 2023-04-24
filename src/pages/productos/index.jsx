import Image from "next/image";
import Link from "next/link";
import getProducts from "../../utils/products.json"
import getCategories from "../../utils/categories.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CartHome from "@/components/CartHome";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";

export default function productos() {
    const {cartShow} = useCart();
    const products = getProducts.products;
    const categories = getCategories.categories;

    const [categoriesFilterState, setCategoriesFilterState] = useState(false);


    return (
        <Layout>
            <section className="w-full h-auto min-h-screen pt-36 bg-slate-100">
                <div className="w-full h-auto p-2 mb-4">
                    <div className="w-[full] h-auto flex flex-row justify-center items-center px-2 mb-4">
                        <p className="w-[70%] text-center text-base text-green-500">{`Inicio > `} <b>Productos</b></p>
                    </div>
                    <div className="w-full h-auto">
                        <h2 className="text-center text-2xl text-green-500">Productos</h2>
                    </div>
                </div>

                <div className="w-full h-auto flex flex-row justify-between p-2">
                    <button onClick={() => setCategoriesFilterState(true)} className="w-[45%] shadow-default bg-green-500 h-auto flex justify-center items-center p-3 rounded-lg border-2 border-green-500">
                        <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faArrowDownWideShort} />
                        <p className="ml-3 tracking-wide text-white">CATEGORIAS</p>
                    </button>
                    <button type="text" className="w-[45%] h-auto flex shadow-default bg-green-500 justify-center items-center p-3 rounded-lg border-2 border-green-500">
                        <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faFilter} />
                        <p className="ml-3 tracking-wide text-white">ORDENAR</p>
                    </button>
                </div>

                <ul className="w-full h-full flex justify-evenly flex-wrap py-8">
                    {products.map((product) => (
                        <li className="relative w-[150px] h-[280px] rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center" key={product.id}>
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
            </section>  
        </Layout>
    )
}