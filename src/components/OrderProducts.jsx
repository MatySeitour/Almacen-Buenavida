export default function OrderProducts({orderFilterState, setOrderFilterState}){

    const order = [
        {
            id: 1,
            value: "Mayor precio"
        },
        {
            id: 2,
            value: "Menor precio"
        },
        {
            id: 3,
            value: "A - Z"
        },
        {
            id: 4,
            value: "Z - A"
        }
    ]

    const handleNewListOrder = (order) => {
        setOrderFilterState({
            active: false,
            value: order.value
        })

        console.log(orderFilterState.active)
    }

    return(
        <div className="w-auto min-w-[130px] flex absolute right-0 top-[100%] translate-y-[4px] z-10 overflow-y-scroll justify-center items-center">
            <ul className={!orderFilterState.active ? "bg-white rounded-md shadow-md w-full opacity-0 overflow-scroll max-h-0" : "bg-white rounded-md shadow-md w-full opacity-100 transition-all overflow-scroll max-h-[150px] py-2"}>
                {order.map((option) => (
                    <li 
                        onClick={() => {handleNewListOrder(option)}}
                        key={option.id} className={`text-black ${orderFilterState.value == option.value && `text-green-500 option-order__active`} h-[30px] relative text-center p-1 ${option.id != 4 && `border-b border-gray-300`}`}>
                        {option.value}
                    </li>
                ))}
                {/* <p className="text-black h-[30px] text-center p-1 border-b border-gray-300">Menor precio</p>
                <p className="text-black h-[30px] text-center p-1 border-b border-gray-300">A - Z</p> */}
                {/* <p className="text-black h-[30px] text-center p-1">Z - A</p> */}
            </ul>
        </div>
    )
}