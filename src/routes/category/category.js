import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Productcard } from "../../component/product-card/product-card"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import "./category.styles.scss"

export const Category=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext)
    const [products,setProducts]=useState([]);
    useEffect(()=>{
      setProducts(categoriesMap[category])
    },[categoriesMap,category])
   
    return(
       <div className="category-container">
        {
        products&&products.map((product)=><Productcard key={product.id} product={product}/>)
       }
       </div>
    )

}