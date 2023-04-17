import useIntersection from '@/CustomHooks/useIntersection';
import { useRef } from 'react';
import Card from './Card';
import getProductsOffers from "../utils/productsOffers.json"

export default function Offers() {
    const element = useRef(null);
    const screen = useIntersection(element);
    const products = getProductsOffers.products;


    return (
        <section className="w-full h-[500px] bg-white mb-40">
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

                            <ul className='h-full w-full p-2 flex justify-center items-center flex-col overflow-x-scroll flex-wrap'>
                                {products.map((product) => (
                                    <Card
                                        key={product.id}
                                        productSrc={product.src}
                                        productName={product.name}
                                        productPrice={product.price}
                                        productStock={product.stock}
                                        productOffer={product.offer}
                                        productId={product.id}
                                        cardId={product.id}
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