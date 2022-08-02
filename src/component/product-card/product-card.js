
import {Button} from "../button/button"
import { useContext } from "react"
import { CartContext } from "../../contexts/cartcontext"

export const Productcard=({product})=>{
    const{addItemToCart}=useContext(CartContext)
    const {name,price,imageUrl}=product
    const add=()=>addItemToCart(product)
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
            </div>
            <Button onClick={add} buttonType={"inverted"}>Add to Cart</Button>

        </div>
    )
}