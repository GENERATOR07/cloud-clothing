import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import {Button} from "../button/button"
import "./cart-dropdown.styles.scss"
import { CartItem } from "../cart-item/cart-item"
import { CartContext } from "../../contexts/cartcontext"


export const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const goToCheckout=()=>{
        navigate("/checkout")
    }
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
               {cartItems.map(i=><CartItem key={i.id} item={i}></CartItem>)}
            </div>
            <Button onClick={goToCheckout}>CHECKOUT</Button>
        </div>
    )
}