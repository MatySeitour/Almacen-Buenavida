"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext({});

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("the useTask must be used inside the TasksContextProvider")
    }
    return context;
}

export function CategoryContextProvider({ children }) {
    const [filterProductState, setFilterProductState] = useState(false);
    const [categoriesProductState, setCategoriesProductState] = useState(false);

    const handleAccordion = (state, ref) => {
        if (state) {
            let la = ref.current?.scrollHeight.toString() + "px";
            ref.current.style.height = la;
            setCategoriesProductState(true)
        }
        else {
            ref.current.style.height = "0";
            setCategoriesProductState(false)
        }
    }

    return (
        <CategoryContext.Provider value={{ filterProductState, setFilterProductState, categoriesProductState, setCategoriesProductState, handleAccordion }}>
            {children}
        </CategoryContext.Provider>
    )
}