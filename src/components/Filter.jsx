import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faX } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "@/context/CategoriesContext";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Filter({
  filterProductState,
  categories,
  subCategorySelected,
  setSubCategorySelected,
  setFilterProductState,
  setFilterSelected,
  slugCategory,
  queryCategory,
  addQuery,
  removeQuery,
  queryOfertas,
}) {
  const { categoriesProductState, setCategoriesProductState } = useCategory();
  const element = useRef(null);
  const router = useRouter();

  const [filterPriceFrom, setFilterPriceFrom] = useState("");
  const [filterPriceTo, setFilterPriceTo] = useState("");

  useEffect(() => {
    if (queryCategory && queryOfertas) {
      const subCategorySearch = categories.filter(
        (category) => category.slug == queryCategory
      );
      setSubCategorySelected({
        categories: subCategorySearch[0].id,
        ofertas: true,
      });
    } else if (queryCategory && !queryOfertas) {
      const subCategorySearch = categories.filter(
        (category) => category.slug == queryCategory
      );
      setSubCategorySelected({
        categories: subCategorySearch[0].id,
        ofertas: false,
      });
    } else if (!queryCategory && queryOfertas) {
      setSubCategorySelected({
        categories: 0,
        ofertas: true,
      });
    } else {
      setSubCategorySelected({
        categories: 0,
        ofertas: false,
      });
    }
  }, [queryCategory, queryOfertas]);

  useEffect(() => {
    if (categoriesProductState) {
      let la = element.current?.scrollHeight.toString() + "px";
      element.current.style.height = la;
    } else {
      element.current.style.height = "0";
    }
  }, [categoriesProductState]);

  // const handleRouter = (key, value) => {
  //   console.log(router);
  //   router.push({
  //     pathname: `/productos/${slugCategory}`,
  //     query: { ...router.query, [key]: `${value}` },
  //   });
  // };

  const handleChangeFrom = (e) => {
    setFilterPriceFrom(e.target.value);
  };
  const handleChangeTo = (e) => {
    setFilterPriceTo(e.target.value);
  };
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
                  <button
                    onClick={() => {
                      addQuery({ key: "categoria", value: category.slug });
                      setCategoriesProductState(false);
                    }}
                    className={`text-green-500 w-auto text-sm p-2 font-normal ${
                      subCategorySelected.categories == category.id && `hidden`
                    }`}
                  >
                    {category.name}
                  </button>
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
          <li
            className={
              !subCategorySelected.ofertas
                ? "w-full p-2 flex flex-col justify-start items-start border-b border-gray-200 h-auto relative"
                : "hidden"
            }
          >
            <p className="text-green-500 w-auto text-base tracking-wider font-semibold">
              OFERTAS
            </p>
            <div className="w-full p-2 flex flex-col justify-start items-start h-auto relative">
              <button
                onClick={() => {
                  addQuery({ key: "ofertas", value: true });
                  setCategoriesProductState(false);
                  setFilterProductState((state) => !state);
                }}
                className="text-green-500 w-auto text-sm font-normal "
              >
                Ofertas
              </button>
            </div>
          </li>
          <li className="w-full p-2 flex flex-col justify-start items-start border-b border-gray-200 h-auto relative">
            <p className="text-green-500 w-auto text-base tracking-wider font-semibold">
              PRECIO
            </p>
            <div className="w-full flex flex-row justify-start p-2 pr-0 items-center h-auto relative">
              <p className="text-green-500 text-sm mr-2">Desde</p>
              <span className="mr-1 text-base text-green-700">$</span>
              <input
                value={filterPriceFrom}
                onChange={handleChangeFrom}
                className="min-w-[50px] mr-2 p-1 text-sm bg-white outline-none rounded-sm border border-green-700 text-green-700"
                type="number"
              />
              <p className="text-green-500 text-sm mr-2">Hasta</p>
              <span className="mr-1 text-base text-green-700">$</span>
              <input
                value={filterPriceTo}
                onChange={handleChangeTo}
                className="min-w-[50px] mr-4 p-1 text-sm bg-white outline-none rounded-sm border border-green-700 text-green-700"
                type="number"
              />
              <button
                onClick={() => {
                  addQuery({
                    key: "minPrice",
                    value: filterPriceFrom,
                    key2: "maxPrice",
                    value2: filterPriceTo,
                  });
                }}
                type="text"
                className="h-full bg-green-500 p-1 rounded-sm"
              >
                <p className="text-sm text-white tracking-wide">Aplicar</p>
              </button>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
