import { createContext, useEffect, useState } from "react";

import {getCategoriesAndDocuments } from "../utility/firebase/firebase.js";

export const CategoriesContext=createContext({
    categoriesMap:{}
})

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({});
    useEffect(()=>{
       const getCategoriesMap=async()=>{
        const categoriesMap=await getCategoriesAndDocuments()
        console.log(categoriesMap)
        setCategoriesMap(categoriesMap);
       }
       getCategoriesMap()
    },[])
return(
    <CategoriesContext.Provider value={{categoriesMap}}>{children}</CategoriesContext.Provider>
)
}