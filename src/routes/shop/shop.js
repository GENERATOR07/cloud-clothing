//import data from "../../shop-data/shop-data.json"
import { useContext } from "react"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import "./shop.style.scss"
import { CategoryPreview } from "../../component/category-preview/category-preview"
export const Shop=()=>{
    const {categoriesMap}=useContext(CategoriesContext)
    
    return(
       <div className="shop-container">
        {
            Object.keys(categoriesMap).map(title=>{
                const product=categoriesMap[title]
                return(
                  <CategoryPreview key={title} product={product} title={title}></CategoryPreview>

                )
            })
        }
       </div>
    )
 }