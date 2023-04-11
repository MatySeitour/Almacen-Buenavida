import Image from "next/image"

export default function Logo() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="title-container relative w-[200px] h-[200px] bg-white z-1 rounded-full overflow-hidden animate-logo shadow-xl">
                <h2 className="font-alexBrush text-3xl text-blue-700 font-bold flex items-center justify-center w-full h-full text-center">Almacén <br />Buena vida</h2>
                <Image className="absolute z-1 top-[50%] animate-trigoLogo item-trigo-1" width={60} height={60} src={"/trigo.png"} alt="trigo" />
                <Image className="absolute z-1 top-[80%] animate-trigoLogo2 item-trigo-2" width={60} height={60} src={"/trigo.png"} alt="trigo" />
            </div>
        </div>
    )
}