import { createContext, useEffect, useState } from "react";
import {SHOP_DATA} from "../shop-data/shop-data.js"
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utility/firebase/firebase.js";

export const productContext=createContext({
    products:[]
})

export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
       const getCategoriesMap=async()=>{
        const categoriesMap=await getCategoriesAndDocuments()
        console.log(categoriesMap)
       }
       getCategoriesMap()
    },[])
return(
    <productContext.Provider value={{products}}>{children}</productContext.Provider>
)
}