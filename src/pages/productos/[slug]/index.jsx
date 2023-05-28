import Image from "next/image";
import Link from "next/link";
import getProducts from "../../../utils/products.json";
import getCategories from "../../../utils/categories.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faAngleDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import CartHome from "@/components/CartHome";
import CategoriesFilter from "@/components/CategoriesFilter";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import ProductsLayout from "@/components/layouts/ProductsLayout";
import { useCategory } from "@/context/CategoriesContext";
import Filter from "@/components/Filter";
import OrderProducts from "@/components/OrderProducts";
import ProductsIndex from "@/components/ProductsIndex";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { query, params } = context;
  return {
    props: {
      query,
      params,
    },
  };
}

export default function Slug({ query, params }) {
  const router = useRouter();
  const categories = getCategories.categories;

  const { cartShow } = useCart();
  const {
    orderFilterState,
    setOrderFilterState,
    handleActiveOrder,
    setFilterProductState,
    filterProductState,
    filterSelected,
    setFilterSelected,
  } = useCategory();

  const [subLevelsState, setSubLevelsState] = useState(0);
  const [subCategorySelected, setSubCategorySelected] = useState({
    categories: 0,
    ofertas: false,
  });
  const [filterQueryParams, setFilterQueryParams] = useState({});
  const [filterListItem, setFilterListItem] = useState([]);
  const [categoriesFilterState, setCategoriesFilterState] = useState(false);

  useEffect(() => {
    let outSlug = Object.entries(query).filter((item) => item[0] != "slug");

    setFilterQueryParams(Object.fromEntries(outSlug));
    setFilterListItem(outSlug);
  }, [query]);

  console.log(router);

  function addQuery(param) {
    /* Funcion de verificar parametros */
    const isTwoValue = verifyQuery(param);
    if (isTwoValue == 1) {
      /* Crea una variable que copia los query de la ruta*/
      let firstValueIsEmpty = router.query;
      /* Busca el valor del primer parametro y lo elimina*/
      delete firstValueIsEmpty[param.key];
      /* Asigna el valor del segundo parametro en el objeto*/
      Object.assign(firstValueIsEmpty, { [param.key2]: [param.value2] });
      /* Se le pasa como query el objeto firstValueIsEmpty modificado */
      return router.push({
        pathname: `${router.route}`,
        query: firstValueIsEmpty,
      });
    } else if (isTwoValue == 2)
      /* Manda en el query los 2 valores de los parametros */
      return router.push({
        pathname: `${router.route}`,
        query: {
          ...router.query,
          [param.key]: [param.value],
          [param.key2]: [param.value2],
        },
      });
    else if (isTwoValue == 3) {
      return router.push({
        pathname: `${router.route}`,
        query: { ...router.query, [param.key]: [param.value] },
      });
    } else if (isTwoValue == 4) {
      /* Crea una variable que copia los query de la ruta*/
      let secondValueIsEmpty = router.query;
      /* Busca el valor del segundo parametro y lo elimina*/
      delete secondValueIsEmpty[param.key2];
      /* Asigna el valor del primer parametro en el objeto*/
      Object.assign(secondValueIsEmpty, { [param.key]: [param.value] });
      /* Se le pasa como query el objeto firstValueIsEmpty modificado */
      return router.push({
        pathname: `${router.route}`,
        query: secondValueIsEmpty,
      });
    } else {
      /* Si se le manda como parametros "", crea un variable que copia los query de la ruta actual y elimina las propiedades que tengan el mismo nombre que las key de los parametros */
      let inputsEmpty = router.query;
      delete inputsEmpty[param.key];
      delete inputsEmpty[param?.key2];
      return router.push({
        pathname: `${router.route}`,
        query: inputsEmpty,
      });
    }
  }

  function verifyQuery(paramVerify) {
    const { value, value2 } = paramVerify;
    if (value == "" && value2) {
      /* Si el primer parametro es vacio y el segundo es un valor true, quiere decir que se envio 2 queries pero el primer valor (en este caso minPrice) es vacio y el maxPrice no */
      return 1;
    } else if (value && value2) {
      console.log("entra en 2");
      /* Si los 2 valores son true, quiere decir que se enviaron los 2 queries con valores */
      return 2;
    } else if (value != "") {
      console.log("entra en 4");
      return 4;
    } else if (value && value2 == "") {
      /* Si el primer valor es true y el segundo es un string vacio, lo que hace es eliminar el query del segundo valor y mantener el primero */
      console.log("entra en 5");
      return 5;
    } else {
      console.log("entra en 6");
      return 6;
    }
  }

  function removeQuery(param) {
    let newRoute = router.query;
    delete newRoute[param.key];
    return router.push({
      pathname: `${router.route}`,
      query: newRoute,
    });
  }

  const categorySelected = categories.filter(
    (category) => category.slug == query.slug
  );

  const products = getProducts.products;
  const productsCategoryRelated = [];
  const productsFilterByCategory = [];

  (() => {
    const productsCategoriesRelated = products.map((product) => {
      let res = product.categoriesRelated.filter((a) => {
        if (a == categorySelected[0].id) {
          productsCategoryRelated.push(product);
        } else {
          return false;
        }
      });
      return res;
    });
  })();

  const handleSubLevelSelect = (id) => {
    if (id === subLevelsState) {
      setSubLevelsState(0);
    } else {
      setSubLevelsState(id);
    }
  };

  return (
    <ProductsLayout>
      <>
        <ProductsIndex categorySelected={categorySelected} slug={query.slug} />
        <section className="w-full h-full">
          <div className="w-full h-auto flex justify-between items-center mb-10">
            <div className="w-auto flex flex-row items-center relative">
              <p className="text-black">Ordenar por:</p>
              <div className="w-auto flex flex-row items-center">
                <p
                  onClick={handleActiveOrder}
                  className="ml-2 text-black font-medium"
                >
                  {orderFilterState.value}
                </p>
                <FontAwesomeIcon
                  onClick={handleActiveOrder}
                  className="w-[16px] h-[16px] ml-2 text-green-500"
                  icon={faAngleDown}
                />
                <OrderProducts
                  orderFilterState={orderFilterState}
                  setOrderFilterState={setOrderFilterState}
                />
              </div>
            </div>
            <div className="w-auto flex flex-row items-center">
              <div className="w-auto flex flex-row items-center relative bg-green-500 p-2 rounded-md">
                <p
                  onClick={() => setFilterProductState((state) => !state)}
                  className="ml-2 text-white font-medium"
                >
                  Filtrar
                </p>
                <FontAwesomeIcon
                  onClick={() => setFilterProductState((state) => !state)}
                  className="w-[16px] h-[16px] ml-2 text-white rotate-[270deg]"
                  icon={faAngleDown}
                />
                <Filter
                  filterProductState={filterProductState}
                  categories={categorySelected[0].subLevels}
                  handleSubLevelSelect={handleSubLevelSelect}
                  subLevelsState={subLevelsState}
                  setFilterProductState={setFilterProductState}
                  setFilterSelected={setFilterSelected}
                  slugCategory={query.slug}
                  queryCategory={query.categoria}
                  queryOfertas={query.ofertas}
                  setSubCategorySelected={setSubCategorySelected}
                  subCategorySelected={subCategorySelected}
                  filterQueryParams={filterQueryParams}
                  addQuery={addQuery}
                  removeQuery={removeQuery}
                />
              </div>
            </div>
          </div>

          <article className="w-full h-full">
            {!filterQueryParams ? (
              <></>
            ) : (
              <ul className="w-full h-auto flex flex-wrap gap-2">
                {filterListItem?.map((filterItem) => (
                  <li
                    key={filterItem[1]}
                    className="bg-green-400 rounded-full w-auto p-2 flex justify-center items-center"
                  >
                    <p className="text-white mr-2">
                      {filterItem[0] == "ofertas" && "ofertas"}
                      {filterItem[0] == "minPrice" && `Desde $${filterItem[1]}`}
                      {filterItem[0] == "maxPrice" && `Hasta $${filterItem[1]}`}
                      {filterItem[0] == "categoria" &&
                        filterItem[1].replaceAll("-", " ")}
                    </p>
                    <div
                      onClick={() =>
                        removeQuery({
                          key: filterItem[0],
                          value: filterItem[1],
                        })
                      }
                      className="w-auto h-auto rounded-full bg-green-600 p-1"
                    >
                      <FontAwesomeIcon
                        className="w-[12px] h-[12px] text-white flex justify-center items-center"
                        icon={faX}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <ul className="w-full h-full flex justify-evenly flex-wrap py-4">
              {productsCategoryRelated.map((product) => (
                <li
                  className="relative w-[150px] h-[280px] rounded-md mb-8 mr-2 flex flex-col justify-evenly items-center"
                  key={product.id}
                >
                  <div className="animate-subtitleAppear w-full h-full bg-white rounded-md shadow-default flex flex-col items-center">
                    <Link
                      className="w-full h-[140px] mb-2"
                      href={`/products/${product.id}`}
                    >
                      <figure className="mb-2 w-full h-[140px]">
                        <Image
                          className="object-cover rounded-t-md object-center w-full h-full"
                          priority={true}
                          width={140}
                          height={140}
                          src={product.src}
                          alt={product.name}
                        />
                      </figure>
                    </Link>
                    <div className="w-full h-full flex justify-around items-center flex-col">
                      <div className="w-full h-[32px] text-left pl-2 mb-2">
                        <h4 className="text-green-700 text-xs font-bold">
                          {product.name.length > 40
                            ? `${product.name.slice(0, 40)}...`
                            : product.name}
                        </h4>
                      </div>
                      <div className="w-full text-left pl-2 mb-2">
                        <p className="text-green-700 text-base font-bold tracking-wide mr-2">
                          {`$${product.price}`}
                        </p>
                      </div>
                      <div className="w-full px-2 h-auto flex justify-start mb-2">
                        <button
                          className="bg-green-400 text-white w-full rounded-md tracking-wider p-1 font-bold flex justify-center items-center"
                          type="text"
                        >
                          <FontAwesomeIcon
                            className="w-[20px] h-[20px]"
                            icon={faCartShopping}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <CategoriesFilter
          categoriesFilterState={categoriesFilterState}
          setCategoriesFilterState={setCategoriesFilterState}
        />

        <CartHome cartShow={cartShow} />
      </>
    </ProductsLayout>
  );
}
