import Image from "next/image"
import "../styles/Frase.module.css"

export default function Frase(){
    return(
        <div className='frase-container w-full h-[auto] font-bold bg-green-500 tracking-wide flex justify-center items-center text-center p-4 relative overflow-hidden'>
            <div className='h-[auto] w-[320px] rounded-full flex items-center justify-center p-2 relative z-50'>
                <p className='w-[auto] text-center text-xl text-white'>
                    PRODUCTOS CELÍACOS, VEGANOS, DIABETES ¡¡Y MÁS!!
                </p>
            </div>
        </div>
    )
}