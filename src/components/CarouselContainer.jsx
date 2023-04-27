"use client"

import Carousel from 'react-multi-carousel';
import ItemCarousel from './ItemCarousel';
import getCategories from "../utils/categories.json"


export default function CarouselContainer(){
    const categories = getCategories.categories;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
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

    return(
        <article className='w-[100%] h-auto justify-center items-center p-4 rounded-md'>
            <Carousel className='rounded-md' arrows={false} dotListClass={"dotList"} autoPlaySpeed={3000} infinite={true} showDots={true} itemClass={"item-carousel__class"} autoPlay={true} responsive={responsive}>
                {categories.map((image) => (
                    <ItemCarousel
                        key={image.id}
                        imageSrc={image.src}
                        imageId={image.id}
                        imageName={image.name}
                        imageAlt={image.name}
                    />
                ))}
            </Carousel>
        </article>
    )
}