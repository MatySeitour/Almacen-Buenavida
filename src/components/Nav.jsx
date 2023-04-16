import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faCartShopping, faAngleLeft, faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext";

export default function Nav() {
    const { cartItems, cartShow, setCartShow, navMobileState, setNavMobileState, totalItems, focus, setFocus } = useCart();
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("");
    const [subNavState, setSubNavState] = useState(0);

    const products = [
        {
            src: "/alfajores.png",
            id: 1,
            name: "alfajores de arroz",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/lulemuu.png",
            id: 2,
            name: "lulemuu",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "30"
        },
        {
            src: "/spirulana.png",
            id: 3,
            name: "spirulana",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/spirulana.png",
            id: 4,
            name: "SIN AZÚCAR",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "14"
        },
        {
            src: "/spirulana.png",
            id: 5,
            name: "Trigo",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "22"
        },
        {
            src: "/spirulana.png",
            id: 6,
            name: "Huevos",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "2x1"
        },
        {
            src: "/spirulana.png",
            id: 7,
            name: "Yerba",
            alt: "alfajores",
            price: 2000,
            stock: false,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 9,
            name: "Budín",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 10,
            name: "Coco",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 11,
            name: "Frutos secos",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 12,
            name: "Azucar",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 13,
            name: "Cereal",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },
        {
            src: "/spirulana.png",
            id: 14,
            name: "Arandanos",
            alt: "alfajores",
            price: 2000,
            stock: true,
            offer: "10"
        },

    ]

    const navItems = [
        {
            id: 2,
            link: "Ofertas",
            subNav: [
                {
                    id: 9,
                    name: "alfajor",
                },
                {
                    id: 10,
                    name: "alfajor",
                },
                {
                    id: 11,
                    name: "alfajor",
                },
                {
                    id: 12,
                    name: "alfajor",
                },
                {
                    id: 13,
                    name: "alfajor",
                },
            ]

        },
        {
            id: 3,
            link: "Sin TACC"
        },
        {
            id: 4,
            link: "Veggies"
        },
        {
            id: 5,
            link: "Celíacos"
        },
        {
            id: 6,
            link: "Lácteos",
            subNav: [
                {
                    id: 14,
                    name: "leches",
                },
                {
                    id: 15,
                    name: "leches",
                },
                {
                    id: 16,
                    name: "leches",
                },
                {
                    id: 17,
                    name: "leches",
                },
                {
                    id: 18,
                    name: "leches",
                },
            ]
        },
        {
            id: 7,
            link: "Almacén"
        },
        {
            id: 8,
            link: "Cereales"
        },
        {
            id: 9,
            link: "Productos"
        },
        {
            id: 10,
            link: "Cuidado personal"
        },
    ]


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


    return (
        <header className="bg-green-500 shadow-lg w-full h-auto p-2 fixed z-[100]">
            <nav className="relative navbar p-0 bg-green-500 justify-between flex-col">
                <div className="w-full flex justify-between">
                    <div className="w-14 h-14 flex justify-center items-center relative">
                        <FontAwesomeIcon onClick={() => setNavMobileState(state => !state)} className={"text-white w-[30px] h-[30px]"} icon={faBars} />
                    </div>
                    <Link href={"/"} className="w-14 h-14">
                        <Image width={56} height={56} alt="logo" src={"/logo.jpg"} priority={true} className="rounded-full" />
                    </Link>
                    <div onClick={() => setCartShow(state => !state)} className="w-14 h-14 flex justify-center items-center relative">
                        <span className="absolute top-1 right-2 bg-green-800 text-white rounded-full text-xs w-[16px] h-[16px] flex justify-center items-center">
                            {totalItems}
                        </span>
                        <FontAwesomeIcon icon={faCartShopping} className={"text-white w-[30px] h-[30px]"} />
                    </div>
                </div>

                <div className="w-[90%] h-auto flex py-2 flex-col items-center justify-center relative container-nav">
                    <div className={searchResults != false ? "h-full w-full p-2 rounded-tr-md rounded-md bg-white flex items-center justify-center" : "h-full w-full p-2 rounded-md bg-white flex items-center justify-center"}>
                        <input onClick={() => setFocus(true)} onChange={handleChange} value={search} placeholder="¿Qué estás buscando?" type="text" className="input-search placeholder:text-green-500 pl-1 w-full h-full inline-block bg-white outline-none text-green-500 text-lg" />
                        <FontAwesomeIcon icon={faSearch} className={" text-green-500 w-[30px] h-[30px]"} />
                    </div>
                    {searchResults != false && focus ?
                        <div className="w-[100%] p-2 absolute bg-white top-[42px] h-[500px] flex items-center search-container rounded-b overflow-y-scroll">
                            <ul className="w-full h-full overflow-y-scroll pb-2">
                                {searchResults.map((item) => (
                                    <li className="w-full h-[80px] flex mb-4 border-b border-gray-300" key={item.id}>
                                        <Link onClick={() => {
                                            setFocus(false)
                                        }}
                                            className="w-full h-[80px] flex mb-4 border-b border-gray-300" href={`/products/${item.id}`}>
                                            <figure className="w-[70px] h-[70px]">
                                                <Image src={item.src} width={70} height={70} alt={item.alt} />
                                            </figure>
                                            <div className="w-full flex flex-col justify-start items-start pl-2">
                                                <p className="text-green-500 font-semibold">
                                                    {item.name.toUpperCase()}
                                                </p>
                                                <p className="text-green-500">{`$${item.price}`}</p>
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

                <div className={navMobileState ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]" : ""}>
                    <div className={navMobileState ? "pb-4 fixed w-[80%] h-full flex flex-col justify-between translate-x-0 transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll" : "fixed w-[80%] h-full -translate-x-[100%] transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll"}>
                        <FontAwesomeIcon icon={faX} onClick={() => setNavMobileState(state => !state)} className="w-[24px] h-[24px] right-3 top-3 text-green-500 absolute z-[2000]" />
                        <div className="w-full h-auto relative pt-14 mb-4">
                            <ul className="w-full h-full flex flex-col">
                                {navItems.map((item) => (
                                    <li className={item.subNav && subNavState === item.id ? "pt-3 text-green-500 border-b border-green-500 flex flex-col w-full justify-between items-start relative" : "py-3 text-green-500 border-b border-green-500 flex flex-col w-full justify-between items-start relative"} key={item.id}>
                                        <p
                                            onClick={() => setSubNavState((prev) => {
                                                if (prev === item.id) {
                                                    return 0;
                                                }
                                                else {
                                                    return item.id
                                                }
                                            })}
                                            className="text-lg tracking-wide font-semibold w-full pl-2">
                                            {item.link}
                                        </p>
                                        <div className={item.subNav && subNavState === item.id ? "w-full min-h-[200px] transition-all" : "w-full min-h-[0px] h-[0px] transition-all"}>

                                            {item.subNav && subNavState === item.id ?
                                                <div className="w-full h-full flex flex-col pt-2 justify-end items-center transition-all">
                                                    <div className="p-2 text-white bg-green-700 flex flex-col w-full justify-center items-center relative">
                                                        <p className="text-lg tracking-wide font-semibold w-full text-center">Ver todo en {item.link}</p>
                                                    </div>
                                                    {item.subNav.map((itemSub) => (
                                                        <div key={itemSub.id} className="p-2 text-white bg-green-500 flex flex-col w-full justify-center border-t border-white items-center relative">
                                                            <p className="text-lg tracking-wide font-semibold w-full text-left" key={itemSub.id}>{itemSub.name}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                :

                                                <div className="w-full h-auto transition-all"></div>
                                            }
                                        </div>
                                        {item.subNav ?
                                            <>
                                                <FontAwesomeIcon className={item.subNav && subNavState === item.id ? "transition-all absolute right-2 top-50% translate-y-[50%] w-[20px] h-[20px] rotate-[270deg]" : "transition-all absolute right-2 top-50% translate-y-[50%] w-[20px] h-[20px] rotate-[90deg]"} icon={faAngleLeft} />
                                            </>

                                            :

                                            <>

                                            </>
                                        }
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
            </nav>
        </header>
    )
}