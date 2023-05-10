"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { faStore, faPlateWheat, faListUl, faUsers, faBagShopping, faMoneyBill, faCar } from "@fortawesome/free-solid-svg-icons";

const NavContext = createContext({});

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error("the useTask must be used inside the TasksContextProvider")
    }
    return context;
}

export function NavContextProvider({ children }) {
    const [navItemsState, setNavItemsState] = useState([
        {
            id: 1,
            navItem: "Home",
            icon: faStore,
            link: `/`
        },
        {
            id: 2,
            navItem: "Productos",
            icon: faPlateWheat,
            link: `/productos`
        },
        {
            id: 3,
            navItem: "Categorias",
            active: false,
            icon: faListUl,
            link: `/`
        },
        {
            id: 4,
            navItem: "Sobre Nosotros",
            icon: faUsers,
            link: `/sobre-nosotros`
        },
        {
            id: 5,
            navItem: "Como Comprar",
            icon: faBagShopping,
            link: `/como-comprar`
        },
        {
            id: 6,
            navItem: "Formas de pago",
            icon: faMoneyBill,
            link: `/formas-de-pago`
        },
        {
            id: 7,
            navItem: "Envíos",
            icon: faCar,
            link: `/`
        },
    ])

    return (
        <NavContext.Provider value={{ useNav, navItemsState, setNavItemsState }}>
            {children}
        </NavContext.Provider>
    )
}