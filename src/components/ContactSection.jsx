import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {
  return (
    <footer className="w-full h-[auto] bg-gray-400">
      <div className="w-full h-full flex justify-around items-center flex-col p-4">
        <div className="w-full h-auto flex flex-row p-4">
          <div className="w-full h-auto flex flex-col">
            <p className="text-base text-white mb-4 font-bold">EXPLORAR</p>
            <ul className="w-full h-auto flex flex-col items-start justify-center">
              <li className="text-white text-sm mb-4 font-medium">INICIO</li>
              <li className="text-white text-sm mb-4 font-medium">OFERTAS</li>
              <li className="text-white text-sm mb-4 font-medium">
                PRODUCTOS DESTACADOS
              </li>
              <li className="text-white text-sm mb-4 font-medium">
                CATEGORIAS
              </li>
            </ul>
          </div>
          <div className="w-full h-auto flex flex-col ">
            <p className="text-base text-white mb-4 font-bold text-right">
              MÁS INFORMACIÓN
            </p>
            <ul className="w-full h-auto flex flex-col items-end justify-center">
              <li className="text-white text-sm mb-4 font-medium">
                COMO COMPRAR
              </li>
              <li className="text-white text-sm mb-4 font-medium">OFERTAS</li>
              <li className="text-white text-sm mb-4 font-medium">
                SOBRE NOSOTROS
              </li>
              <li className="text-white text-sm mb-4 font-medium text-right">
                CONTACTO
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-auto p-4">
          <p className="text-base text-white mb-4 font-bold">CONTACTÁNOS</p>
          <div className="w-full h-auto flex">
            <div className="w-auto h-auto bg-gray-700 p-2 mr-2 rounded-full">
              <FontAwesomeIcon
                className="w-[26px] h-[26px] text-white"
                icon={faWhatsapp}
              />
            </div>
            <div className="w-auto h-auto bg-gray-700 p-2 rounded-full">
              <FontAwesomeIcon
                className="w-[26px] h-[26px] text-white"
                icon={faInstagram}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full h-auto p-4">
          <p className="text-base text-white mb-4 font-bold">UBICACIÓN</p>
          <p className="text-white font-semibold">
            San Martín 1142 entre Pellegrini y Sarmiento. Merlo.
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-gray-700 p-2">
        <p className="text-white flex justify-center items-center text-center">
          Copyright Almacén Buenavida - 2023.
          <br />
          Todos los derechos reservados.
          <br />
          Defensa de los consumidores.
        </p>
      </div>
    </footer>
  );
}
