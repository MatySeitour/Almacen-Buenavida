import { useRef } from "react";
import useIntersection from "@/CustomHooks/useIntersection";
import FeaturedCard from "./FeaturedCard"
import Link from "next/link";

export default function FeaturedProduct() {
    const element = useRef(null);
    const screen = useIntersection(element);

    const products = [
        {
            src: "/alfajores.png",
            id: 1,
            name: "alfajores de arroz",
            alt: "alfajores",
            price: "$2000.00",
            stock: true,
        },
        {
            src: "/lulemuu.png",
            id: 2,
            name: "lulemuu",
            alt: "alfajores",
            price: "$2000.00",
            stock: false,

        },
        {
            src: "/spirulana.png",
            id: 3,
            name: "spirulana",
            alt: "alfajores",
            price: "$2000.00",
            stock: true,
        },
        {
            src: "/spirulana.png",
            id: 5,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: true,
        },
        {
            src: "/spirulana.png",
            id: 6,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: false,

        },
        {
            src: "/spirulana.png",
            id: 7,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: true,
        },
        {
            src: "/spirulana.png",
            id: 8,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: false,
        },
        {
            src: "/spirulana.png",
            id: 9,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            stock: false,
        },

    ]

    return (
        <section className="w-full h-auto min-h-screen bg-slate-100 pt-10 pb-6 mb-40">
            <div ref={element} className="w-full h-full">
                {screen ?
                    <>
                        <div className="mb-10 animate-subtitleAppear before:animate-underlineSubtitle underline-subtitle relative text-3xl inline-block text-black pl-2">
                            <h4 className="font-bold">DESTACADOS</h4>
                        </div>

                        <ul className='w-full h-full flex justify-evenly flex-wrap py-8'>
                            {products.map((product) => (
                                <FeaturedCard
                                    key={product.id}
                                    productSrc={product.src}
                                    productName={product.name}
                                    productStock={product.stock}
                                    productPrice={product.price}
                                    productId={product.id}
                                />

                            ))}
                        </ul>

                        <Link className='w-full h-full flex justify-center items-center' href={"/categories"}>
                            <button className='w-[300px] h-auto p-4 bg-green-500 text-white rounded font-semibold' type='text'>VER MÁS PRODUCTOS</button>
                        </Link>
                    </>

                    :

                    <></>
                }
            </div>
        </section>
    )
}