//import data from "../../shop-data/shop-data.json"
import { useContext } from "react"
import { productContext } from "../../contexts/productContext"
import { Productcard } from "../../component/product-card/product-card" 
import  "./shop.style.scss"
export const Shop=()=>{
    const {products}=useContext(productContext)
    
    return(
        <div className="products-container">
            {products.map(product=>{
                return <Productcard key={product.id} product={product}></Productcard>

            })}
        </div>
    )
 }