import CardsInfo from "./CardsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCreditCard,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function CardsInfoContainer() {
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
  ];

  return (
    <ul className="py-20 bg-green-100 mb-10">
      {cardsInfo.map((card) => (
        <CardsInfo
          key={card.id}
          cardTitle={card.title}
          cardDescription={card.description}
          cardIcon={card.icon}
        />
      ))}
    </ul>
  );
}
