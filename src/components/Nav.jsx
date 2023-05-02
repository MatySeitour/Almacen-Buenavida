import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faCartShopping, faChevronDown, faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import getProducts from "../utils/products.json"
import getCategories from "../utils/categories.json"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { useCart } from "@/context/CartContext";

export default function Nav() {
    const { cartShow, setCartShow, navMobileState, setNavMobileState, totalItems, focus, setFocus, animateCartState } = useCart();
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
          if(pageYOffset > 124){
              if (pageYOffset > lastScrollTop.current) {
                setIsNavbarVisible(false);
                setIsNavbarInTop(false);
              } 
              else if (pageYOffset < lastScrollTop.current) {
                setIsNavbarVisible(true);
                setIsNavbarInTop(false);
              }
              else if(pageYOffset == 0){
                setIsNavbarInTop(true);
              }
              lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
          }
          else{
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
            document.body.classList.add("scroll")
        }
        else if (!cartShow) {
            document.body.classList.remove("scroll")
        }
    }, [cartShow, navMobileState])

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const searchFilter = (input) => {
        if (input != "") {
            const resultInput = products.filter((item) => {
                if (item.name.toString().toLowerCase().includes(input.toLowerCase())) {
                    return item;
                }
            })
            setSearchResults(resultInput);
        }
        else {
            setSearchResults([]);
        }
    }

    useEffect(() => {
        searchFilter(search);
    }, [search])


    // className={`bg-green-500 shadow-lg w-full ${isNavbarInTop ? "h-[128px] transition-all" : "h-[80px] transition-all fixed"} ${!isNavbarVisible ? "-translate-y-[200px] transition-all" : "translate-y-0 transition-all"} p-2 z-[100] duration-300`}

    return (
        <header className="h-[128px] relative">
            <nav className={`navbar p-2 justify-between flex-col bg-green-500 shadow-lg w-full ${isNavbarInTop ? "h-[128px] transition-[transform] relative duration-300" : "h-[80px] transition-[transform] fixed duration-300"} ${!isNavbarVisible ? "-translate-y-[200px] transition-all" : "translate-y-0 transition-all"} p-2 z-[100] duration-300`}>
                <div className="w-full flex justify-between">
                    <div className="w-14 h-14 flex justify-center items-center relative">
                        <FontAwesomeIcon onClick={() => setNavMobileState(state => !state)} className={"text-white w-[30px] h-[30px]"} icon={faBars} />
                    </div>
                    <Link href={"/"} className="w-14 h-14">
                        <Image width={56} height={56} alt="logo" src={"/logo.png"} priority={true} className="rounded-full" />
                    </Link>
                    <div onClick={() => setCartShow(state => !state)} className={`${animateCartState && `animate-cart w-14 h-14 flex justify-center items-center relative`}  w-14 h-14 flex justify-center items-center relative`}>
                        <span className="absolute top-1 right-2 bg-green-800 text-white rounded-full text-xs w-[16px] h-[16px] flex justify-center items-center z-[10]">
                            {totalItems}
                        </span>
                        <FontAwesomeIcon icon={faCartShopping} className={`text-white w-[30px] h-[30px]`} />
                    </div>
                </div>

                <div className={isNavbarInTop ? "w-[90%] h-auto flex py-2 flex-col items-center justify-center relative container-nav scale-100 transition-all duration-300" : "w-[90%] h-auto flex py-2 flex-col items-center justify-center relative container-nav scale-0"}>
                    <div className={searchResults && focus || !searchResults && focus  ? "h-full w-[100%] p-2 rounded-lg bg-white flex items-center justify-center transition-all" : "h-full w-[90%] p-2 rounded-lg bg-white flex items-center justify-center transition-all"}>
                        <input onClick={() => setFocus(true)} onChange={handleChange} value={search} placeholder="¿Qué estás buscando?" type="text" className="input-search placeholder:text-green-500 pl-1 w-full h-full inline-block bg-white outline-none text-green-500 text-lg" />
                        <div className={searchResults && focus || !searchResults && focus ? "pl-2 border-l border-green-300" : "pl-2"}>
                            <FontAwesomeIcon icon={faSearch} className={"text-green-500 w-[24px] h-[24px]"} />
                        </div>
                    </div>
                    {searchResults != false && focus ?
                        <div className="w-[100%] p-2 absolute top-[54px] flex bg-white items-center search-container rounded-b overflow-y-scroll z-[99999999]">
                            <ul className="w-full min-h-[140px] h-auto max-h-[400px] overflow-y-auto">
                                {searchResults.map((item) => (
                                    <li className="w-full h-[80px] flex mb-4 border-b border-gray-300" key={item.id}>
                                        <Link onClick={() => {
                                            setFocus(false)
                                        }}
                                            className="w-full h-[80px] flex mb-4 border-b border-gray-300" href={`/products/${item.id}`}>
                                            <figure className="w-[70px] h-[70px]">
                                                <Image src={item.src} width={70} height={70} alt={item.name} />
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
                                {searchResults.length > 6 ?
                                    <div className="w-full h-auto flex justify-center items-center">
                                        <button className="bg-green-500 p-2 text-white rounded-md tracking-wide font-semibold" type="text">VER MÁS RESULTADOS</button>
                                    </div>

                                    :

                                    <></>
                                }
                            </ul>
                        </div>

                        :

                        <></>
                    }
                </div>

            </nav>
            <div className={navMobileState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
                    <div className={navMobileState ? "pb-4 fixed w-[80%] h-full flex flex-col justify-between translate-x-0 transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll" : "fixed w-[80%] h-full -translate-x-[100%] transition-all top-0 left-0 z-[10000] overflow-y-scroll invisible"}>
                        <FontAwesomeIcon icon={faX} onClick={() => setNavMobileState(state => !state)} className="w-[24px] h-[24px] right-3 top-3 text-green-500 absolute z-[2000]" />
                        <div className="w-full h-auto relative pt-14 mb-4">
                            <ul className="w-full h-full flex flex-col">
                                {categories.map((category) => (
                                    <li className={category.subLevels && subNavState === category.id ? "pt-3 text-green-500 flex flex-col w-full justify-between items-start relative" : "py-3 text-green-500 flex flex-col w-full justify-between items-start relative"} key={category.id}>
                                        <div className="w-full h-auto flex flex-row justify-between pr-2">
                                            <p
                                                onClick={() => setSubNavState((prev) => {
                                                    if (prev === category.id) {
                                                        return 0;
                                                    }
                                                    else {
                                                        return category.id
                                                    }
                                                })}
                                                className={navMobileState ? `text-lg tracking-wide font-semibold w-full pl-2 navItemClass-${category.id}` : ``}>
                                                    {category.slug.toUpperCase()}
                                            </p>
                                            {category.subLevels ?
                                                <>
                                                    {/* <FontAwesomeIcon className={category.subLevels && subNavState === category.id ? `transition-all absolute right-2 top-50% translate-y-[50%] w-[20px] h-[20px] rotate-[270deg]` : "transition-all absolute right-2 top-50% translate-y-[50%] w-[20px] h-[20px] rotate-[90deg]"} icon={faAngleLeft} /> */}
                                                    <FontAwesomeIcon className={`${navMobileState && `navArrowItemClass-${category.id}`} transition-all w-[20px] h-[20px] ${category.subLevels && subNavState === category.id && `rotate-[180deg]`}`} icon={faChevronDown} />
                                                </>

                                                :

                                                <>

                                                </>
                                            }
                                        </div>
                                        <div className={category.subLevels && subNavState === category.id ? "w-full h-auto transition-all" : "w-full min-h-[0px] h-[0px] transition-all"}>
                                            {category.subLevels && subNavState === category.id ?
                                                <div className="w-full h-full flex flex-col pt-2 transition-all pl-2">
                                                    <div className="p-2 text-green-600 flex flex-col w-full justify-center items-center relative">
                                                        <Link href={`/productos/${category.slug}`} onClick={() => setNavMobileState(state => !state)} className="text-lg tracking-wide font-semibold w-full text-left">Ver todo en {category.slug}</Link>
                                                    </div>
                                                    {category.subLevels.map((itemSub) => (
                                                        <div key={itemSub.id} className="p-2 text-green-500 flex flex-col w-full justify-center items-center relative">
                                                            <p className="text-base tracking-wide font-semibold w-full text-left" key={itemSub.id}>{itemSub.name}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                :

                                                <div className="w-full h-[0px] transition-all pl-2"></div>
                                            }
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full h-auto flex justify-end items-center">
                            <FontAwesomeIcon className="w-[30px] h-[30px] text-green-500" icon={faWhatsapp} />
                            <FontAwesomeIcon className="w-[30px] h-[30px] mr-2 ml-2 text-green-500" icon={faInstagram} />
                        </div>
                    </div>
            </div>
        </header>
    )
}