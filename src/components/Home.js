import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Logo from "@/components/Logo";
import CartHome from './CartHome';
import CardsInfo from './CardsInfo';
import NavMobile from './NavMobile';
import Image from 'next/image';
import ItemCarousel from './ItemCarousel';
import { useCart } from '@/context/CartContext';

export default function Home() {
    const { cartShow, navMobilState } = useCart();


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const elements = [
        {
            src: "/alfajores.png",
            id: 1,
            name: "SIN GLUTEN",
            alt: "alfajores"
        },
        {
            src: "/lulemuu.png",
            id: 2,
            name: "SUPLEMENTOS",
            alt: "alfajores"
        },
        {
            src: "/spirulana.png",
            id: 3,
            name: "VEGANOS",
            alt: "alfajores"
        },
        {
            src: "/spirulana.png",
            id: 4,
            name: "SIN AZÚCAR",
            alt: "alfajores"
        },
    ]

    return (
        <section className="w-full h-auto pt-16 mb-40 bg-slate-100">
            <div className='background-home h-[400px]'>
                <Logo />
            </div>
            <article className='w-full h-[auto] font-bold tracking-wide flex justify-center text-center py-10 px-4 relative overflow-hidden'>
                <div className='h-full w-full border-t border-b border-green-500 flex items-center justify-center p-2'>
                    <p className='w-[250px] text-center text-xl text-green-500'>
                        PRODUCTOS CELÍACOS, VEGANOS, DIABETES ¡¡Y MÁS!!
                    </p>

                </div>
                <Image className='absolute top-[50%] translate-y-[-50%] -right-1 rotate-12 h-[60px] w-[60px] object-cover' src={"/almendra.png"} width={50} height={50} alt="almendras" />
                <Image className='absolute top-[50%] translate-y-[-50%] -left-1 -rotate-12 h-[60px] w-[60px] object-cover' src={"/almendra.png"} width={50} height={50} alt="nueces" />
            </article>
            <article className='w-full h-auto justify-center items-center'>
                <Carousel arrows={false} dotListClass={"dotList"} autoPlaySpeed={3000} infinite={true} showDots={true} itemClass={"item-carousel__class"} autoPlay={true} responsive={responsive}>
                    {elements.map((image) => (
                        <ItemCarousel
                            key={image.id}
                            imageSrc={image.src}
                            imageId={image.id}
                            imageName={image.name}
                            imageAlt={image.alt}
                        />
                    ))}
                </Carousel>
            </article>
            <ul className='pt-20'>
                <CardsInfo />
            </ul>

            <CartHome
                cartShow={cartShow}
            />
        </section>
    )
}