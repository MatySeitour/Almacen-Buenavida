"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { faStore, faPlateWheat, faListUl, faUsers, faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
        },
        {
            id: 2,
            navItem: "Productos",
            icon: faPlateWheat
        },
        {
            id: 3,
            navItem: "Categorias",
            active: false,
            icon: faListUl
        },
        {
            id: 4,
            navItem: "Sobre Nosotros",
            icon: faUsers
        },
        {
            id: 5,
            navItem: "Como Comprar",
            icon: faBagShopping
        }
    ])

    return (
        <NavContext.Provider value={{ useNav, navItemsState, setNavItemsState }}>
            {children}
        </NavContext.Provider>
    )
}