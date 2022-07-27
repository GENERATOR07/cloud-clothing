import { createContext, useState } from "react";
import data from "../shop-data/shop-data.json"

export const productContext=createContext({
    products:[]
})

export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState(data);
return(
    <productContext.Provider value={{products}}>{children}</productContext.Provider>
)
}