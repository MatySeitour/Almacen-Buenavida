import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {
    return (
        <footer className="w-full h-[auto] bg-green-500 p-4">
            <div className="w-full h-full flex justify-around items-center flex-col">
                <div className="mb-10">
                    <h3 className="text-white text-2xl font-semibold text-center">¿Tenes alguna Consulta?</h3>
                    <div>
                        <p className="text-white text-2xl font-semibold text-center">¡¡Contactame!!</p>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-row justify-evenly items-center mb-8">
                    <div className="h-auto flex flex-1 flex-col justify-center items-center mb-6">
                        <div className="w-[50px] h-[50px] bg-white p-2 rounded-full flex items-center justify-center mb-2">
                            <FontAwesomeIcon className="text-4xl text-green-500" icon={faWhatsapp} />
                        </div>
                        <p className="text-white text-lg">11XXXX-XXXX</p>
                    </div>
                    <div className="h-auto flex flex-1 flex-col justify-center items-center mb-6">
                        <div className="w-[50px] h-[50px] bg-white p-2 rounded-full flex items-center justify-center mb-2">
                            <FontAwesomeIcon className="text-4xl text-green-500" icon={faInstagram} />
                        </div>
                        <p className="text-white text-lg">@almacen.buenavida</p>
                    </div>
                </div>
                <ul className="w-full h-auto flex flex-col items-center justify-center">
                    <li className="text-white text-lg mb-4 font-semibold">INICIO</li>
                    <li className="text-white text-lg mb-4 font-semibold">OFERTAS</li>
                    <li className="text-white text-lg mb-4 font-semibold">SOBRE NOSOTROS</li>
                    <li className="text-white text-lg mb-4 font-semibold">PRODUCTOS DESTACADOS</li>
                    <li className="text-white text-lg mb-4 font-semibold">CATEGORIAS</li>
                </ul>
                <div className="w-full h-auto p-2 bg-green-400">
                    <p className="text-white flex justify-center items-center text-center">
                        Copyright Almacén Buenavida - 2023.
                        <br />
                        Todos los derechos reservados.
                        <br />
                        Defensa de los consumidores. </p>
                </div>
            </div>
        </footer>
    )
}