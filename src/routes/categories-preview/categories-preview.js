import { useContext ,Fragment} from "react"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import { CategoryPreview } from "../../component/category-preview/category-preview"
export const CategoriesPreview=()=>{
    const {categoriesMap}=useContext(CategoriesContext)
    
    return(
       <Fragment>
        {
            Object.keys(categoriesMap).map(title=>{
                const product=categoriesMap[title]
                return(
                  <CategoryPreview key={title} product={product} title={title}></CategoryPreview>

                )
            })
        }
       </Fragment>
    )
 }