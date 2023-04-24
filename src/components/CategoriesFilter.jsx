import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CategorySubLevel from "./CategorySubLevel";
import { faX, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import getCategories from "../utils/categories.json"
import { useCategory } from "@/context/CategoriesContext";

export default function CategoriesFilter({ categoriesFilterState, setCategoriesFilterState }) {
    const {setSubCategoriesState, subCategoriesState} = useCategory();

    const categories = getCategories.categories;


    return (
        <div className={categoriesFilterState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <aside className={categoriesFilterState ? "fixed w-[340px] h-full translate-x-0 transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll" : "fixed w-[340px] h-full translate-x-[500px] transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll"}>
                <div className="w-full h-auto flex justify-between items-center py-4 px-2 bg-green-600">
                    <FontAwesomeIcon onClick={() => setCategoriesFilterState(state => !state)} className="text-white w-[24px] h-[24px] flex justify-center items-center mr-4" icon={faX}></FontAwesomeIcon>
                    <h3 className="text-white text-xl font-semibold tracking-wide">Filtrar por categorias</h3>
                </div>
                
                <ul className="w-full h-auto p-2 mt-4">
                    {categories.map((category) => (
                        <li className="w-full h-[50px] mb-4 flex flex-row justify-between items-center" key={category.id}>
                            <Link onClick={() => setCategoriesFilterState(false)} href={`/productos/${category.slug}`} className="text-green-500 w-auto text-lg font-medium">{category.name}</Link>
                            {/* <FontAwesomeIcon 
                                onClick={() => setSubCategoriesState((prev) => {
                                    if (prev === category.id) {
                                        return 0;
                                    }
                                    else {
                                        return category.id
                                    }
                                })} 
                                className={category.subLevels ? "transition-all  w-[20px] h-[20px] rotate-[180deg] text-green-500" : "hidden"} icon={faAngleLeft} /> */}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}