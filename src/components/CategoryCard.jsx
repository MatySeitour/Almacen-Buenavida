import useIntersection from '@/CustomHooks/useIntersection';
import { useRef } from 'react';
import Image from 'next/image';

export default function CategoryCard({ categorySrc, categoryName }) {
    const element = useRef(null);
    const screen = useIntersection(element);

    return (
        <div className="w-full h-full">
            <div ref={element} className="w-full h-[300px] bg-slate-600 relative">
                {screen ?
                    <figure className='w-full h-full relative'>
                        <div className='absolute w-full h-full top-0 bg-[#000a] flex justify-around items-center flex-col'>
                            <h5 className='animate-subtitleAppear text-2xl text-white tracking-wide font-bold'>{categoryName}</h5>
                        </div>
                        <Image className='w-full h-full object-cover' priority={true} width={300} height={100} src={categorySrc} alt={categoryName} />
                    </figure>

                    :

                    <></>
                }
            </div>
        </div>
    )
}