"use client";

import { createContext, useContext, useState, useEffect } from "react";

const NavContext = createContext({});

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error("the useTask must be used inside the TasksContextProvider")
    }
    return context;
}

export function NavContextProvider({ children }) {
    return (
        <NavContext.Provider value={{}}>
            {children}
        </NavContext.Provider>
    )
}