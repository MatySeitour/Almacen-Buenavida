export default function OrderProducts({orderFilterState}){
    return(
        <div className="w-[100%] flex absolute right-0 top-14 z-10 overflow-y-scroll">
            <div className={orderFilterState ? "bg-green-500 rounded-md shadow-md w-full opacity-0 transition-all overflow-scroll max-h-0" : "bg-green-500 rounded-md shadow-md w-full opacity-100 transition-all overflow-scroll max-h-[150px] pb-2"}>
                <p className="text-white h-[30px] p-2">de mayor a menor</p>
                <p className="text-white h-[30px] p-2">de menor a mayor</p>
                <p className="text-white h-[30px] p-2">A - Z</p>
                <p className="text-white h-[30px] p-2">Z - A</p>
            </div>
        </div>
    )
}