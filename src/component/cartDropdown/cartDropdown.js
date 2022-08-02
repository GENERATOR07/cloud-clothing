import { useContext } from "react"
import {Button} from "../button/button"
import "./cart-dropdown.styles.scss"
import { CartItem } from "../cart-item/cart-item"
import { CartContext } from "../../contexts/cartcontext"


export const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
               {cartItems.map(i=><CartItem key={i.id} item={i}></CartItem>)}
            </div>
            <Button>Add to cart</Button>
        </div>
    )
}