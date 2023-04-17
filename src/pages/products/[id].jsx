import Image from "next/image"
import RelatedProducts from "@/components/RelatedProducts"
import CardsInfo from "@/components/CardsInfo";
import { useCart } from "@/context/CartContext";
import CartHome from "@/components/CartHome";
import { faTruck, faCreditCard, faHouse } from '@fortawesome/free-solid-svg-icons';
import getProductsOffers from "../../utils/productsOffers.json"
import getCategories from "../../utils/categories.json"
import Link from "next/link";

export async function getServerSideProps(context){
    const {params} = context;
    const {id} = params;
    return{
        props:{
            id,
        }
    }
}

export default function Product({id}) {
    const { setFocus, cartShow } = useCart();

    const products = getProductsOffers.products;
    const product = products.filter(productId => productId.id == id);

    const categories = getCategories.categories;
    const categoryProduct = categories.filter(categoryId => categoryId.id == product[0].categoryId)[0];
    const categorySubLevelProduct = categoryProduct.subLevels.filter(subLevelId => subLevelId.id == product[0].subLevelId)[0]
    console.log(product)
    const discountPrice = product[0].offers != "2x1" ? parseInt(product[0].offers) : null;
    const discountPriceTotal =  product[0].price - (discountPrice * product[0].price / 100)

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
        <section onClick={() => setFocus(false)} className="w-full h-auto min-h-screen pt-[134px]">
            <div className="w-full h-full">
                <figure className="w-full h-full relative">
                <span className="absolute bg-green-500 top-4 left-4 w-[70px] h-[70px] rounded-full flex justify-center items-center text-xl text-white font-medium"><p className="text-center">{product[0].offers != "2x1" ? `${product[0].offers}% OFF` : `${product[0].offers}`}</p></span>
                    <Image className="w-full h-full object-cover" alt={product[0].name} width={200} height={200} priority={true} src={product[0].src} />
                </figure>
                <div className="h-full min-h-[500px] w-full p-4 flex flex-col items-center border-t border-green-200">
                    <ul className="w-[90%] h-[auto] p-2 text-center mb-4">
                        <li className="inline-block mr-2"><Link className="text-green-500 inline-block h-auto" href={"/"}>Inicio</Link></li>
                        <li className="inline-block mr-2"><span>{`>`}</span></li>
                        <li className="inline-block mr-2"><Link className="text-green-500" href={"/"}>{categoryProduct.name}</Link></li>
                        <li className="inline-block mr-2"><span>{`>`}</span></li>
                        <li className="inline-block mr-2"><Link className="text-green-500" href={"/"}>{categorySubLevelProduct.name}</Link></li>
                        <li className="inline-block mr-2"><span>{`>`}</span></li>
                        <li className="inline-block mr-2"><Link className="text-green-700 font-semibold" href={"/"}>{product[0].name}</Link></li>
                    </ul>
                    <div className="mb-4 w-full border-t border-green-200 pt-4">
                        <h4 className="text-green-800 text-3xl font-semibold">{product[0].name}</h4>
                    </div>
                    <div className="w-full text-green-500 text-3xl font-semibold text-left mb-10">
                        {product[0].offers == "" ? "" : product[0].offers != "2x1" ? <p className="inline-block text-left mr-2">{`$${discountPriceTotal}`}</p> : <p>{product[0].offers}</p>}
                        <p className={product[0].offers != "2x1" ? "inline-block text-left text-lg -translate-y-2 line-through" : ""}>{`$${product[0].price}`}</p>
                    </div>
                    {/* <div className="w-full h-auto mb-10">
                        <p className="text-green-800 font-semibold">
                            GALLETA DE ARROZ DIETETICA CON RELLENO SABOR VAINILLA CUBIERTA CON BAÑO DE
                            REPOSTERÍA FANTASÍA YOGURT SABOR FRUTILLA - TIPO ALFAJOR- LIBRE DE GLUTEN. SIN T.A.C.C.
                        </p>
                    </div> */}
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
                        <h4 className="text-green-800 text-xl font-bold mb-4">CATEGORIAS RELACIONADAS</h4>
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
                <ul className='py-20 bg-green-200'>
                    {cardsInfo.map((card) => (
                        <CardsInfo
                            key={card.id}
                            cardTitle={card.title}
                            cardDescription={card.description}
                            cardIcon={card.icon}
                        />
                    ))}
                </ul>
                <RelatedProducts />
            </div>
            <CartHome
                cartShow={cartShow}
            />
        </section>
    )
}