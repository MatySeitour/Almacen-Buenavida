import Image from "next/image";
import RelatedProducts from "@/components/RelatedProducts";
import CardsInfo from "@/components/CardsInfo";
import { useCart } from "@/context/CartContext";
import CartHome from "@/components/CartHome";
import {
  faTruck,
  faCreditCard,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import getProductsOffers from "../../utils/productsOffers.json";
import getCategories from "../../utils/categories.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  return {
    props: {
      id,
    },
  };
}

export default function Product({ id }) {
  const { setFocus, cartShow, handleAddCart } = useCart();
  const [quantityButton, setQuantityButton] = useState(1);

  useEffect(() => {
    setQuantityButton(1);
  }, [id]);

  const products = getProductsOffers.products;
  const product = products.filter((productId) => productId.id == id);

  const categories = getCategories.categories;
  const categoryProduct = categories.filter(
    (categoryId) => categoryId.id == product[0].categoryId
  )[0];
  const categorySubLevelProduct = categoryProduct.subLevels.filter(
    (subLevelId) => subLevelId.id == product[0].subLevelId
  )[0];
  const categoriesRelatedId = product[0].categoriesRelated;
  const categoriesRelated = categoriesRelatedId.map((categoryId) => {
    let res = categories.find((category) => category.id === categoryId);
    return res;
  });
  const categoriesLogo = categoriesRelated.filter((category) => {
    if (category.name == "Veggies" || category.name == "Sin TACC") {
      return category;
    }
  });

  const productsRelated = products.filter(
    (productCategory) =>
      productCategory.categoryId == product[0].categoryId &&
      productCategory.id != product[0].id
  );

  const discountPriceProduct =
    product[0].offer != "2x1" ? parseInt(product[0].offer) : null;
  const discountPriceTotalProduct =
    product[0].price - (discountPriceProduct * product[0].price) / 100;

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
    <MainLayout>
      <section
        onClick={() => setFocus(false)}
        className="w-full h-auto min-h-screen pt-4"
      >
        <div className="w-[40px] h-[60px] flex justify-center items-center ml-2 bg-white">
          <div className="w-[40px] h-[40px] shadow-1 rounded-md flex justify-center items-center bg-white">
            <FontAwesomeIcon
              className="w-7 h-7 text-green-500 text-lg"
              icon={faAngleLeft}
            />
          </div>
        </div>
        <div className="w-full h-full">
          <figure className="w-full h-[400px] relative">
            <span className="absolute bg-green-500 top-4 left-4 w-14 h-14 rounded-full flex justify-center items-center text-xl text-white font-medium">
              <p className="text-center tracking-wide">
                {product[0].offer != "2x1"
                  ? `-${product[0].offer}%`
                  : `${product[0].offer}`}
              </p>
            </span>
            <ul className="absolute right-2 top-2">
              {categoriesLogo.map((category) => (
                <Image
                  className="w-auto h-auto"
                  key={category.id}
                  height={40}
                  width={40}
                  alt={category.name}
                  src={category.src}
                />
              ))}
            </ul>
            <Image
              className="w-full h-full object-cover"
              alt={product[0].name}
              width={350}
              height={300}
              priority={true}
              src={product[0].src}
            />
          </figure>
          <div className="h-full min-h-[500px] w-full p-4 flex flex-col items-center border-t border-green-200">
            <ul className="w-[auto] h-[auto] p-2 text-center mb-4">
              <li className="inline-block mr-2">
                <Link className="text-green-500 inline-block h-auto" href={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="inline-block mr-2">
                <span>{`>`}</span>
              </li>
              <li className="inline-block mr-2">
                <Link className="text-green-500" href={"/"}>
                  {categoryProduct.name}
                </Link>
              </li>
              <li className="inline-block mr-2">
                <span>{`>`}</span>
              </li>
              <li className="inline-block mr-2">
                <Link className="text-green-500" href={"/"}>
                  {categorySubLevelProduct.name}
                </Link>
              </li>
              <li className="inline-block mr-2">
                <span>{`>`}</span>
              </li>
              <li className="inline-block mr-2">
                <Link className="text-green-700 font-semibold" href={"/"}>
                  {product[0].name}
                </Link>
              </li>
            </ul>
            <div className="mb-4 w-full border-t border-green-200 pt-4">
              <h4 className="text-green-800 text-3xl font-semibold">
                {product[0].name}
              </h4>
            </div>
            <div className="w-full text-green-700 text-3xl font-semibold text-left mb-10">
              {product[0].offer != "" && product[0].offer != "2x1" ? (
                <p className="text-base mb-2 text-green-400">{`!Oferta ${product[0].offer}% en este producto!`}</p>
              ) : (
                ""
              )}
              {product[0].offer == "" ? (
                ""
              ) : product[0].offer != "2x1" ? (
                <p className="inline-block text-left mr-2">{`$${discountPriceTotalProduct}`}</p>
              ) : (
                <p className="text-base mb-2 text-green-400">{`!Oferta ${product[0].offer} en este producto!`}</p>
              )}
              <p
                className={
                  product[0].offer != "2x1"
                    ? "inline-block text-left text-lg -translate-y-2 line-through text-green-600"
                    : "text-green-700"
                }
              >{`$${product[0].price}`}</p>
            </div>

            <div className="flex flex-row items-start justify-between w-full mb-10">
              <div className="w-[160px] h-[40px] flex flex-row bg-white border border-green-500 rounded-md justify-between items-center">
                <button
                  onClick={() =>
                    setQuantityButton((state) => {
                      if (state === 1) {
                        return state;
                      } else {
                        return state - 1;
                      }
                    })
                  }
                  className="w-[30px] text-xl text-green-500 border-r border-green-500 h-full"
                  type="text"
                >
                  -
                </button>
                <p className="text-xl text-green-500">{quantityButton}</p>
                <button
                  onClick={() => setQuantityButton((state) => state + 1)}
                  className="w-[30px] text-xl text-green-500 h-full border-l border-green-500 flex justify-center items-center"
                  type="text"
                >
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    const newCartItem = {
                      name: product[0].name,
                      price: product[0].price,
                      offer: product[0].offer,
                      id: product[0].id,
                      src: product[0].src,
                      quantity: quantityButton,
                    };
                    handleAddCart(newCartItem);
                  }}
                  className="p-2 bg-green-500 text-white rounded-md shadow-1 font-medium"
                  type="text"
                >
                  AÑADIR AL CARRO
                </button>
              </div>
            </div>

            <div className="w-full h-auto flex justify-start flex-col mb-10">
              <h4 className="text-green-800 text-xl font-bold mb-4">
                {product[0].name}
              </h4>
              <div className="w-full h-auto flex p-2">
                <p className="text-black">{product[0].description}</p>
              </div>
            </div>

            <div className="w-full h-auto flex justify-start flex-col">
              <div>
                <h4 className="text-green-800 text-xl font-bold mb-4 underline-subtitle relative inline-block">
                  CATEGORIAS RELACIONADAS
                </h4>
              </div>
              <ul className="w-full h-auto flex flex-row flex-wrap gap-2 p-2">
                {categoriesRelated.map((category) => (
                  <li
                    key={category.id}
                    className="bg-green-600 p-2 text-white rounded-md"
                  >
                    <Link
                      href={{ pathname: `/productos/${category.slug}` }}
                      className=""
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <RelatedProducts productsRelated={productsRelated} />

          <ul className="py-20 bg-green-200">
            {cardsInfo.map((card) => (
              <CardsInfo
                key={card.id}
                cardTitle={card.title}
                cardDescription={card.description}
                cardIcon={card.icon}
              />
            ))}
          </ul>
        </div>
        <CartHome cartShow={cartShow} />
      </section>
    </MainLayout>
  );
}
