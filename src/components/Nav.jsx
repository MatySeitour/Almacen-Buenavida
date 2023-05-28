import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faChevronDown,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import getProducts from "../utils/products.json";
import getCategories from "../utils/categories.json";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import NavMobile from "./NavMobile";

export default function Nav() {
  const {
    cartShow,
    setCartShow,
    navMobileState,
    setNavMobileState,
    totalItems,
    focus,
    setFocus,
    animateCartState,
  } = useCart();

  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const [subNavState, setSubNavState] = useState(0);

  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarInTop, setIsNavbarInTop] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let { pageYOffset } = window;
        if (pageYOffset > 124) {
          if (pageYOffset > lastScrollTop.current) {
            setIsNavbarVisible(false);
            setIsNavbarInTop(false);
          } else if (pageYOffset < lastScrollTop.current) {
            setIsNavbarVisible(true);
            setIsNavbarInTop(false);
          } else if (pageYOffset == 0) {
            setIsNavbarInTop(true);
          }
          lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
        } else {
          setIsNavbarVisible(true);
          setIsNavbarInTop(true);
        }
      },
      { passive: true }
    );
  }, []);

  const products = getProducts.products;
  const categories = getCategories.categories;

  useEffect(() => {
    if (cartShow || navMobileState) {
      document.body.classList.add("scroll");
    } else if (!cartShow) {
      document.body.classList.remove("scroll");
    }
  }, [cartShow, navMobileState]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchFilter = (input) => {
    if (input != "") {
      const resultInput = products.filter((item) => {
        if (item.name.toString().toLowerCase().includes(input.toLowerCase())) {
          return item;
        }
      });
      setSearchResults(resultInput);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    searchFilter(search);
  }, [search]);

  return (
    <header className="h-[128px] relative">
      <nav
        className={`navbar p-2 justify-between flex-col bg-emerald-500 shadow-lg w-full ${
          isNavbarInTop
            ? "h-[128px] transition-[transform] relative duration-300"
            : "h-[80px] transition-[transform] fixed duration-300"
        } ${
          !isNavbarVisible
            ? "-translate-y-[200px] transition-all"
            : "translate-y-0 transition-all"
        } p-2 z-[100] duration-300`}
      >
        <div className="w-full flex justify-between">
          <div className="w-14 h-14 flex justify-center items-center relative">
            <FontAwesomeIcon
              onClick={() => setNavMobileState((state) => !state)}
              className={"text-white w-[30px] h-[30px]"}
              icon={faBars}
            />
          </div>
          <Link href={"/"} className="w-14 h-14">
            <Image
              width={56}
              height={56}
              alt="logo"
              src={"/logo.png"}
              priority={true}
              className="rounded-full"
            />
          </Link>
          <div
            onClick={() => setCartShow((state) => !state)}
            className={`${
              animateCartState &&
              `animate-cart w-14 h-14 flex justify-center items-center relative`
            }  w-14 h-14 flex justify-center items-center relative`}
          >
            <span className="absolute top-1 right-2 bg-green-800 text-white rounded-full text-xs w-[16px] h-[16px] flex justify-center items-center z-[10]">
              {totalItems}
            </span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={`text-white w-[30px] h-[30px]`}
            />
          </div>
        </div>

        <div
          className={
            isNavbarInTop
              ? "w-[90%] h-auto flex py-2 flex-col items-center justify-center relative container-nav scale-100 transition-all duration-300"
              : "w-[90%] h-auto flex py-2 flex-col items-center justify-center relative container-nav scale-0"
          }
        >
          <div
            className={
              (searchResults && focus) || (!searchResults && focus)
                ? "h-full w-[100%] p-2 rounded-lg bg-white flex items-center justify-center transition-all"
                : "h-full w-[90%] p-2 rounded-lg bg-white flex items-center justify-center transition-all"
            }
          >
            <input
              onClick={() => setFocus(true)}
              onChange={handleChange}
              value={search}
              placeholder="¿Qué estás buscando?"
              type="text"
              className="input-search placeholder:text-green-500 pl-1 w-full h-full inline-block bg-white outline-none text-green-500 text-lg"
            />
            <div
              className={
                (searchResults && focus) || (!searchResults && focus)
                  ? "pl-2 border-l border-green-300"
                  : "pl-2"
              }
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={"text-green-500 w-[24px] h-[24px]"}
              />
            </div>
          </div>
          {searchResults != false && focus ? (
            <div className="w-[100%] p-2 absolute top-[54px] flex bg-white items-center search-container rounded-b overflow-y-scroll z-[99999999]">
              <ul className="w-full min-h-[140px] h-auto max-h-[400px] overflow-y-auto">
                {searchResults.map((item) => (
                  <li
                    className="w-full h-[80px] flex mb-4 border-b border-gray-300"
                    key={item.id}
                  >
                    <Link
                      onClick={() => {
                        setFocus(false);
                      }}
                      className="w-full h-[80px] flex mb-4 border-b border-gray-300"
                      href={`/products/${item.id}`}
                    >
                      <figure className="w-[70px] h-[70px]">
                        <Image
                          src={item.src}
                          width={70}
                          height={70}
                          alt={item.name}
                        />
                      </figure>
                      <div className="w-full flex flex-col justify-start items-start pl-2">
                        <p className="text-green-700 font-normal text-base">
                          {item.name}
                        </p>
                        <p className="text-green-700 text-sm">{`$${item.price}`}</p>
                      </div>
                    </Link>
                  </li>
                ))}
                {searchResults.length > 6 ? (
                  <div className="w-full h-auto flex justify-center items-center">
                    <button
                      className="bg-green-500 p-2 text-white rounded-md tracking-wide font-semibold"
                      type="text"
                    >
                      VER MÁS RESULTADOS
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>

      <NavMobile
        navMobileState={navMobileState}
        setNavMobileState={setNavMobileState}
        categories={categories}
        subNavState={subNavState}
        setSubNavState={setSubNavState}
      />
    </header>
  );
}
