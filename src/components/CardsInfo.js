import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck, faCreditCard, faHouse } from '@fortawesome/free-solid-svg-icons';

import useIntersection from "@/CustomHooks/useIntersection"
import { useRef } from "react"

export default function CardsInfo() {
    const element = useRef(null);
    const screen = useIntersection(element);

    const cardsInfo = [
        {
            id: 1,
            title: "Envíos Zona Oeste",
            description: "Enviamos tus productos hasta tu casa ¡sin costo!.",
            icon: faTruck,
        },
        {
            id: 2,
            title: "Efectivo o Tarjeta",
            description: "Elegí el metodo de pago que más te convenga.",
            icon: faCreditCard,
        },
        {
            id: 3,
            title: "Podés retirar tu pedido",
            description: "En San Martín 1142 entre Pellegrini y Sarmiento. Merlo.",
            icon: faHouse,
        },
    ]

    return (
        <ul className="pt-10">
            {cardsInfo.map((info) => (
                <article key={info.id} ref={element} className='mb-10 w-full min-h-[130px] h-[auto] text-green-500 text-lg font-bold tracking-wide p-4 flex justify-center items-center'>
                    {
                        screen ?
                            <div className='animate-subtitleAppear w-full h-full flex justify-center items-center'>
                                <div className="w-full h-[160px] bg-white shadow-md rounded-md relative p-2 flex flex-col justify-center items-center">
                                    <div className="absolute -top-[20%] right-[50%] translate-x-[50%] bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center p-8 shadow-xl">
                                        <FontAwesomeIcon className="text-2xl" icon={info.icon} />
                                    </div>
                                    <p className="text-center">{info.title}</p>
                                    <p className="text-center font-normal">{info.description}</p>
                                </div>
                            </div>

                            :

                            <></>
                    }
                </article>
            ))}
        </ul>
    )
}