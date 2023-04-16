import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

export default function CategoriesFilter({ categoriesFilterState }) {
    return (
        <div className={categoriesFilterState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <div className={categoriesFilterState ? "fixed w-[340px] h-full translate-x-0 transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll" : "fixed w-[340px] h-full translate-x-[500px] transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll"}>
                <div className="w-full h-auto flex items-center p-4 bg-green-600">
                    <FontAwesomeIcon className="text-white w-[24px] h-[24px] flex justify-center items-center mr-4" icon={faX}></FontAwesomeIcon>
                    <h3 className="text-white text-xl font-semibold tracking-wide">Filtrar por categorias</h3>
                </div>
            </div>
        </div>
    )
}