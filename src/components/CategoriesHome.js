import useIntersection from '@/CustomHooks/useIntersection';
import { useRef } from 'react';
import CategoryCard from './CategoryCard';
import Link from 'next/link';

export default function CategoriesHome() {
    const element = useRef(null);
    const screen = useIntersection(element);

    const categories = [
        {
            id: 1,
            name: "BEBIDAS",
            src: "/bebidas.jpg",
        },
        {
            id: 2,
            name: "LÁCTEOS",
            src: "/lacteos.jpg",
        },
        {
            id: 3,
            name: "MERMELADAS",
            src: "/mermeladas.jpg",
        },
        {
            id: 4,
            name: "VEGGIE",
            src: "/veggie.jpg",
        },
        {
            id: 5,
            name: "SIN TACC",
            src: "/alfajores.png",
        },
    ]

    return (
        <section className="w-full h-auto min-h-screen">
            <div ref={element} className="w-full h-full">
                {screen ?
                    <>
                        <div className="mb-10 animate-subtitleAppear before:animate-underlineSubtitle underline-subtitle relative text-3xl inline-block text-black pl-2">
                            <span className="hover:animate-jump inline-block font-bold">C</span>
                            <span className="hover:animate-jump2 inline-block font-bold">A</span>
                            <span className="hover:animate-jump3 inline-block font-bold">T</span>
                            <span className="hover:animate-jump4 inline-block font-bold">E</span>
                            <span className="hover:animate-jump5 inline-block font-bold">G</span>
                            <span className="hover:animate-jump6 inline-block font-bold">O</span>
                            <span className="hover:animate-jump7 inline-block font-bold">R</span>
                            <span className="hover:animate-jump8 inline-block font-bold">I</span>
                            <span className="hover:animate-jump9 inline-block font-bold">A</span>
                            <span className="hover:animate-jump10 inline-block font-bold">S</span>
                        </div>


                        <ul className='h-auto w-full flex justify-center items-center flex-col mb-10 gap-3'>
                            {categories.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    categorySrc={category.src}
                                    categoryName={category.name}
                                />
                            ))}
                        </ul>

                        <Link className='w-full h-full flex justify-center items-center mb-40' href={"/categories"}>
                            <button className='w-[300px] h-auto p-4 bg-green-500 text-white rounded font-semibold' type='text'>VER TODAS LAS CATEGORIAS</button>
                        </Link>
                    </>
                    :
                    <></>
                }
            </div>
        </section>
    )
}