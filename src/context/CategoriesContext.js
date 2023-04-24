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
    const [subCategoriesState, setSubCategoriesState] = useState(0);


    return (
        <CategoryContext.Provider value={{ subCategoriesState, setSubCategoriesState }}>
            {children}
        </CategoryContext.Provider>
    )
}