import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faX } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "@/context/CategoriesContext";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Filter({
  filterProductState,
  categories,
  subCategorySelected,
  setSubCategorySelected,
  setFilterProductState,
  subLevelsState,
  setFilterSelected,
  slugCategory,
  queryCategory,
}) {
  const { categoriesProductState, setCategoriesProductState } = useCategory();
  const element = useRef(null);

  useEffect(() => {
    if (queryCategory) {
      const subCategorySearch = categories.filter(
        (category) => category.slug == queryCategory
      );
      setSubCategorySelected(subCategorySearch[0].id);
    } else {
      setSubCategorySelected(0);
    }
  }, [queryCategory]);

  useEffect(() => {
    if (categoriesProductState) {
      let la = element.current?.scrollHeight.toString() + "px";
      element.current.style.height = la;
    } else {
      element.current.style.height = "0";
    }
  }, [categoriesProductState]);

  return (
    <div
      className={
        filterProductState
          ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]"
          : ""
      }
    >
      <aside
        className={
          filterProductState
            ? "fixed w-[340px] h-full translate-x-0 transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll"
            : "fixed w-[340px] h-full translate-x-[500px] transition-all bg-white top-0 right-0 z-[10000] overflow-y-scroll"
        }
      >
        <div className="w-full h-auto flex justify-between items-center py-4 px-2 bg-green-600">
          <FontAwesomeIcon
            onClick={() => {
              setFilterProductState((state) => !state);
              setCategoriesProductState(false);
            }}
            className="text-white w-[24px] h-[24px] flex justify-center items-center mr-4"
            icon={faX}
          ></FontAwesomeIcon>
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Filtrar por
          </h3>
        </div>
        <ul className="w-full h-auto mt-4 relative">
          <li className="w-full p-2 flex flex-col justify-start items-start border-b border-gray-200 h-auto relative">
            <p
              onClick={() => setCategoriesProductState((state) => !state)}
              className="text-green-500 w-full text-base tracking-wider font-semibold"
            >
              CATEGORIAS
            </p>
            <ul
              ref={element}
              className={
                categoriesProductState
                  ? `w-full flex flex-col items-center transition-all`
                  : `overflow-hidden transition-all`
              }
            >
              {categories.map((category) => (
                <li
                  onClick={() => {
                    setFilterProductState((state) => !state);
                    setFilterSelected((prev) => {
                      return [...prev, category.name];
                    });
                  }}
                  // href={`/productos/${slugCategory}/${category.slug}`}
                  className="w-full h-[auto] flex flex-row justify-between items-center"
                  key={category.id}
                >
                  <Link
                    href={{
                      pathname: `/productos/${slugCategory}`,
                      query: { categoria: `${category.slug}`, desde: `1999` },
                    }}
                    className={`text-green-500 w-auto text-sm p-2 font-normal ${
                      subCategorySelected == category.id && `font-semibold`
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <FontAwesomeIcon
              className={`absolute w-[24px] h-[24px] right-2 text-green-500 flex justify-center items-center transition-all ${
                categoriesProductState && `rotate-[180deg] transition-all`
              }`}
              icon={faAngleDown}
            />
          </li>
          <li className="w-full p-2 flex flex-row justify-between items-center border-b border-gray-200">
            <p className="text-green-500 w-auto text-base tracking-wider font-semibold">
              OFERTAS
            </p>
          </li>
          <li className="w-full p-2 flex flex-row justify-between items-center border-b border-gray-200">
            <p className="text-green-500 w-auto text-base tracking-wider font-semibold">
              MARCAS
            </p>
          </li>
        </ul>
      </aside>
    </div>
  );
}
