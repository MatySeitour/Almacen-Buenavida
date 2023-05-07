import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersection from "@/CustomHooks/useIntersection";
import { useRef } from "react";

export default function CardsInfo({ cardIcon, cardTitle, cardDescription }) {
  const element = useRef(null);
  const screen = useIntersection(element);

  return (
    <li
      ref={element}
      className="mb-10 w-full min-h-[130px] h-[auto] text-green-700 text-lg font-bold tracking-wide p-4 flex justify-center items-center"
    >
      {screen ? (
        <div className="animate-subtitleAppear w-full h-full flex justify-center items-center">
          <div className="w-full h-[160px] bg-white shadow-md rounded-md relative p-2 flex flex-col justify-center items-center">
            <div className="absolute -top-[20%] right-[50%] translate-x-[50%] bg-white w-[auto] h-[auto] rounded-full flex justify-center items-center p-4 shadow-xl">
              <FontAwesomeIcon className="w-[30px] h-[30px]" icon={cardIcon} />
            </div>
            <p className="text-center">{cardTitle}</p>
            <p className="text-center font-normal">{cardDescription}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
