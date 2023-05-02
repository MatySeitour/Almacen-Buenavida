export default function SubCategories({subCategoriesState, categories, handleSubLevelSelect }){

    return(
        <div className="w-[100%] flex absolute left-0 top-12 z-10 overflow-y-scroll">
            <ul className={subCategoriesState ? "bg-green-500 rounded-md shadow-md w-full opacity-0 transition-all overflow-scroll max-h-0" : "bg-green-700 rounded-b-md shadow-md w-full opacity-100 transition-all overflow-scroll max-h-[150px] pb-2"}>
                {categories.map((subCategory) => (
                    <li onClick={() => handleSubLevelSelect(subCategory.id)} key={subCategory.id} className="text-white h-[auto] p-1">{subCategory.name}</li>
                ))}
            </ul>
        </div>
    )
}