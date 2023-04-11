import Image from "next/image"
import RelatedProducts from "@/components/RelatedProducts"
import { useRouter } from "next/router"
import CardsInfo from "@/components/CardsInfo";
import { useCart } from "@/context/CartContext";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const { setFocus } = useCart();
    console.log(id)


    return (
        <section onClick={() => setFocus(false)} className="w-full h-auto min-h-screen pt-16">
            <div className="w-full h-full">
                <figure className="w-full h-full">
                    <Image className="w-full h-full object-cover" alt="alfajores" width={200} height={200} src={"/alfajores.png"} />
                </figure>
                <div className="h-full min-h-[500px] w-full p-4 flex flex-col items-center">
                    <div className="mb-10">
                        <h4 className="text-black text-2xl font-bold">alfajor de arroz - LULEMUU - yogurt y vainilla</h4>
                    </div>
                    <div className="w-full text-green-500 text-2xl font-semibold text-left mb-10">
                        <p className="text-left">$2000,00</p>
                    </div>
                    <div className="w-full h-auto mb-10">
                        <p className="text-black font-semibold">
                            GALLETA DE ARROZ DIETETICA CON RELLENO SABOR VAINILLA CUBIERTA CON BAÑO DE
                            REPOSTERÍA FANTASÍA YOGURT SABOR FRUTILLA - TIPO ALFAJOR- LIBRE DE GLUTEN. SIN T.A.C.C.
                        </p>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full mb-10">
                        <div className="w-[160px] h-[40px] flex flex-row bg-white border border-green-500 rounded-md justify-between items-center">
                            <button className="w-[30px] text-xl text-green-500 border-r border-green-500 h-full" type="text">-</button>
                            <p className="text-xl text-green-500">0</p>
                            <button className="w-[30px] text-xl text-green-500 h-full border-l border-green-500 flex justify-center items-center" type="text">+</button>
                        </div>
                        <div>
                            <button className="p-2 bg-green-500 text-white rounded-md" type="text">AÑADIR AL CARRO</button>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-start flex-col">
                        <h4 className="text-black text-xl font-bold mb-4">CATEGORIAS RELACIONADAS</h4>
                        <div className="w-full h-auto flex flex-row flex-wrap gap-2 p-2">
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                            <p className="bg-green-500 p-2 text-white rounded-md">SIN TACC</p>
                        </div>
                    </div>
                </div>
                <CardsInfo />
                {/* <div className="w-full h-[auto] p-6 border-t border-b border-green-500 flex flex-col justify-center items-center">
                    <FontAwesomeIcon className="mb-4 w-10 h-10 text-green-500" icon={faPersonChalkboard} />
                    <p className="text-center text-green-500 text-xl font-semibold">podes retirar tu pedido en el local almacen buenavida en pelllegrini asdas9w3 entre la cnajdhs ey y soli, altura 1711 cerca de la plaza del tanque</p>
                </div> */}
                <RelatedProducts />
            </div>
        </section>
    )
}