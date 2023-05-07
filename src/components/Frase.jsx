import "../styles/Frase.module.css";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";

export default function Frase() {
  const element = useRef(null);
  const screen = useIntersection(element);
  return (
    <div className="frase-container w-full h-[400px]  bg-white tracking-wide flex justify-center items-center text-center p-2 relative overflow-hidden">
      <div
        ref={element}
        className="h-[full] w-[100%] flex items-center justify-center p-2 relative z-50"
      >
        {screen ? (
          <p className="animate-subtitleAppear w-[full] h-full text-center font-extrabold text-3xl p-2 text-black leading-2 relative phrase">
            PRODUCTOS CELÍACOS, VEGANOS, DIABETES ¡¡Y MÁS!!
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
