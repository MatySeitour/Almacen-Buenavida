import Image from 'next/image';
import useIntersection from '@/CustomHooks/useIntersection';
import { useRef, useState } from 'react';

export default function ItemCarousel({ imageSrc, imageId, imageName, imageAlt }) {
    const element = useRef(null);
    const screen = useIntersection(element);
    const [loaded, setLoaded] = useState(false)
    return (
        <div ref={element} key={imageId} className='relative w-full h-full mr-20 flex justify-center'>
            <div className='w-full h-full absolute bg-[#000a]'></div>
            {
                screen &&
                <>
                    <Image className='image' src={imageSrc} width={400} height={400} onLoad={() => setLoaded(true)} alt={imageAlt} />
                    <div className={loaded ? 'animate-wiggle max-w-[300px] w-[200px] absolute top-[65%] flex flex-col justify-center items-center' : 'max-w-[300px] w-[200px] absolute top-[65%] flex flex-col justify-center items-center'}>
                        <p className='font-bold tracking-wider text-center text-3xl text-white mb-4'>{imageName}</p>
                        <div className='w-[120px] flex justify-center'>
                            <button className='w-full text-center text-green-500 bg-white border-2 border-green-500 p-2 rounded-full'>VER</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}