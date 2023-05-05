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
    const [filterSelected, setFilterSelected] = useState([]);
    const [orderFilterState, setOrderFilterState] = useState({
        active: false,
        value: "A - Z"
    });

    const handleActiveOrder = () => {
        setOrderFilterState((prev) => {
            if (!prev.active) {
                return { active: true, value: prev.value }
            }
            return { active: false, value: prev.value }
        })
    }

    return (
        <CategoryContext.Provider value={{ filterProductState, setFilterProductState, categoriesProductState, setCategoriesProductState, filterSelected, setFilterSelected, orderFilterState, setOrderFilterState, handleActiveOrder }}>
            {children}
        </CategoryContext.Provider>
    )
}