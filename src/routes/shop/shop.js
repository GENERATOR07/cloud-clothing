import{Routes,Route} from "react-router-dom"

import "./shop.style.scss"
import { CategoriesPreview } from "../categories-preview/categories-preview"
import { Category } from "../category/category"
export const Shop=()=>{
    
    return(
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category"element={<Category/>}/>  

    
      </Routes>
    )
 }