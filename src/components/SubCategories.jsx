import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

export default function SubCategories({subCategoriesState, categories, handleSubLevelSelect, setSubCategoriesState }){

    return(
        <div className={subCategoriesState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <aside className={subCategoriesState ? "fixed w-[340px] h-full translate-x-0 transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll" : "fixed w-[340px] h-full translate-x-[500px] transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll"}>
                <div className="w-full h-auto flex justify-between items-center py-4 px-2 bg-green-600">
                        <FontAwesomeIcon onClick={() => setSubCategoriesState(state => !state)} className="text-white w-[24px] h-[24px] flex justify-center items-center mr-4" icon={faX}></FontAwesomeIcon>
                        <h3 className="text-white text-xl font-semibold tracking-wide">Filtrar por</h3>
                </div>
                <ul className="w-full h-auto mt-4">
                    <li className="w-full p-2 flex flex-col justify-start items-start border-b border-gray-200">
                        <p className="text-green-500 w-auto text-base tracking-wider font-semibold">CATEGORIAS</p>
                        <ul>
                            {categories.map((category) => (
                            <li className="w-full h-[auto] flex flex-row justify-between items-center" key={category.id}>
                                <p className="text-green-500 w-auto text-sm p-2 font-normal">{category.name}</p>
                            </li>
                        ))}
                        </ul>
                    </li>
                    <li className="w-full p-2 flex flex-row justify-between items-center border-b border-gray-200">
                        <p className="text-green-500 w-auto text-base tracking-wider font-semibold">OFERTAS</p>
                    </li>
                    <li className="w-full p-2 flex flex-row justify-between items-center border-b border-gray-200">
                        <p className="text-green-500 w-auto text-base tracking-wider font-semibold">MARCAS</p>
                    </li>
                    

                </ul>
            </aside>
        </div>
    )
}