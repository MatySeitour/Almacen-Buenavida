import Image from "next/image";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef, useState } from "react";

export default function ItemCarousel({
  imageSrc,
  imageId,
  imageName,
  imageAlt,
}) {
  const element = useRef(null);
  const screen = useIntersection(element);
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      ref={element}
      key={imageId}
      className="relative w-full h-full mr-20 flex justify-center"
    >
      <div className="w-full h-full absolute bg-[#000a]"></div>
      {screen && (
        <>
          <Image
            priority={true}
            className="object-cover"
            src={imageSrc}
            width={400}
            height={100}
            onLoad={() => setLoaded(true)}
            alt={imageAlt}
          />
          <div
            className={
              loaded
                ? "animate-wiggle absolute top-[65%] flex flex-col justify-center items-center"
                : "max-w-[300px] w-[200px] absolute top-[65%] flex flex-col justify-center items-center"
            }
          >
            <p className="font-bold w-full tracking-wider text-center text-3xl text-white mb-4">
              {imageName.toUpperCase()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
