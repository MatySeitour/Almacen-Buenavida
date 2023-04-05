import useIntersection from '@/CustomHooks/useIntersection';
import { useRef } from 'react';
import Card from './Card';

export default function Offers() {
    const element = useRef(null);
    const screen = useIntersection(element);

    const products = [
        {
            src: "/alfajores.png",
            id: 1,
            name: "alfajores de arroz",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/lulemuu.png",
            id: 2,
            name: "lulemuu",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "30"
        },
        {
            src: "/spirulana.png",
            id: 3,
            name: "spirulana",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/spirulana.png",
            id: 4,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "14"
        },
        {
            src: "/spirulana.png",
            id: 5,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "22"
        },
        {
            src: "/spirulana.png",
            id: 6,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/spirulana.png",
            id: 7,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 9,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 10,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 11,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 12,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 13,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 14,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },

    ]


    return (
        <section className="w-full h-auto bg-slate-100 mb-40">
            <div ref={element} className="w-full h-full">
                {
                    screen ?
                        <>
                            <div className="mb-10 animate-subtitleAppear before:animate-underlineSubtitle underline-subtitle relative text-3xl inline-block text-black pl-2">
                                <span className="hover:animate-jump inline-block font-bold">O</span>
                                <span className="hover:animate-jump2 inline-block font-bold">F</span>
                                <span className="hover:animate-jump3 inline-block font-bold">E</span>
                                <span className="hover:animate-jump4 inline-block font-bold">R</span>
                                <span className="hover:animate-jump5 inline-block font-bold">T</span>
                                <span className="hover:animate-jump6 inline-block font-bold">A</span>
                                <span className="hover:animate-jump6 inline-block font-bold">S</span>
                            </div>

                            <ul className='h-[460px] w-full p-4 pr-0 flex justify-center items-center flex-col overflow-x-scroll flex-wrap'>
                                {products.map((product) => (
                                    <Card
                                        key={product.id}
                                        productSrc={product.src}
                                        productName={product.name}
                                        productPrice={product.price}
                                        productStock={product.stock}
                                        productOffer={product.offer}
                                        productId={product.id}
                                    />
                                ))}
                            </ul>
                        </>

                        :
                        <div className='w-full min-h-[500px]'></div>
                }
            </div>
        </section>
    )
}