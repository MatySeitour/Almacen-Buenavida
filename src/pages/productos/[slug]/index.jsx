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

  const handleDeleteFilter = (filter) => {
    let la = filterListItem.filter((item) => item[1] != filter);
    setFilterQueryParams(Object.fromEntries(la));
    router.push({
      pathname: `/productos/${query.slug}`,
      query: Object.fromEntries(la),
    });
  };

  const categorySelected = categories.filter(
    (category) => category.slug == query.slug
  );

  const products = getProducts.products;
  const productsByCategory = products.filter(
    (product) => product.categoryId == categorySelected[0].id
  );
  const productsCategoryRelated = [];
  const productsFilterByCategory = [];
  const productsSubLevelByCategory = products.filter((product) => {
    product.subCategoriesId.map((subLevel) => {
      if (subLevel == subLevelsState) {
        productsFilterByCategory.push(product);
        return product;
      }
    });
  });

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
                    <Link
                      href={{
                        pathname: `/productos/${query.slug}`,
                        query: filterQueryParams,
                      }}
                      className="text-white mr-2"
                    >
                      {}
                      {filterItem[0] != "ofertas"
                        ? filterItem[1].replaceAll("-", " ")
                        : "ofertas"}
                    </Link>
                    <div
                      onClick={() => handleDeleteFilter(filterItem[1])}
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
