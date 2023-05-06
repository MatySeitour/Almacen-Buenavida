import { useEffect, useState } from "react"

export default function ProductsIndex({slug, sublevel}){
    const [routeState, setRouteState] = useState("");

    useEffect(() => {
        if(slug){
            if(sublevel){
                setRouteState(sublevel)
            }
            else{
                setRouteState(slug)
            }
        }
        else{
            setRouteState("Productos")
        }
    }, [slug])

    return(
        <div className="w-full h-auto p-2 mb-4">
            <div className="w-[full] h-auto flex flex-row justify-center items-center px-2 pb-2 mb-4 border-b border-green-500">
                <p className="w-[70%] text-center text-base text-green-500">
                    <span>Inicio{` > `}</span>
                    <span>Productos</span>
                    {slug && <span>{` > `}{slug}</span>}
                    {sublevel && <span>{` > `}{sublevel}</span>}
                </p>
            </div>
            <div className="w-full h-auto p-2">
                <h2 className="text-center text-3xl text-green-500"><b>{routeState}</b></h2>
            </div>
        </div>
    )
}