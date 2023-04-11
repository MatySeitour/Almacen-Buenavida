export default function CategoriesFilter({ categoriesFilterState, setCategoriesFilterState }) {
    return (
        <div className={categoriesFilterState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
            <div className={categoriesFilterState ? "fixed w-[340px] h-full translate-x-0 transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll pt-[70px]" : "fixed w-[340px] h-full translate-x-[500px] transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll pt-[70px]"}></div>
        </div>
    )
}