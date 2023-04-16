import getProducts from "../utils/products.json"
import getCategories from "../utils/categories.json"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFilter, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState } from "react";

export default function Productos() {
    const products = getProducts.products;
    const categories = getCategories.categories;

    const [categoriesFilterState, setCategoriesFilterState] = useState(false);


    return (
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
                <button onClick={() => setCategoriesFilterState(true)} className="w-[45%] h-auto flex justify-center items-center p-3 rounded-lg border-2 border-green-500">
                    <FontAwesomeIcon className="text-green-500 w-[24px] h-[24px]" icon={faArrowDownWideShort} />
                    <p className="ml-3 tracking-wide text-green-500">CATEGORIAS</p>
                </button>
                <div className="w-[45%] h-auto flex justify-center items-center p-3 rounded-lg border-2 border-green-500">
                    <FontAwesomeIcon className="text-green-500 w-[24px] h-[24px]" icon={faFilter} />
                    <p className="ml-3 tracking-wide text-green-500">FILTRAR</p>
                </div>
            </div>

            <ul className="w-full h-full flex justify-evenly flex-wrap py-8">
                {products.map((product) => (
                    <li className="relative max-w-[250px] w-[44%] shadow-md min-h-[300px] min-w-[100px] h-[auto] bg-white rounded-md mb-8 mr-2 flex flex-col justify-around items-center pb-4" key={product.id}>
                        <figure className="w-auto h-auto p-2">
                            <Image className="object-cover" priority={true} src={product.src} width={150} height={150} alt={product.name} />
                        </figure>
                        <div className="w-full h-[140px] flex flex-col justify-center items-center p-2">
                            <div className="h-[48px] w-full mb-4 flex justify-center items-center">
                                {/* {task.description.length > 60 ? `${task.description.slice(0, 60)}...` : task.description} */}
                                <p className="w-full text-green-500 text-base tracking-wide font-medium text-center">{product.name.length > 30 ? `${product.name.slice(0, 30)}...` : product.name}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-green-500 leading-6 text-xl tracking-wider font-medium text-center">{`$${product.price}`}</p>
                            </div>
                        </div>
                        <button className="bg-green-500 w-[90%] flex justify-center items-center p-1 rounded-lg" type="text">
                            <FontAwesomeIcon className="text-white w-[24px] h-[24px]" icon={faCartShopping} />
                        </button>
                    </li>
                ))}
            </ul>

            <CategoriesFilter
                categoriesFilterState={categoriesFilterState}
                setCategoriesFilterState={setCategoriesFilterState}
            />
        </section>
    )
}