import {ReactComponent as Si} from "../../routes/assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/cartcontext"
export const CartIcon=()=>{
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext)
    const toggel=()=>setIsCartOpen(!isCartOpen)
    return(
        <div onClick={toggel} className="cart-icon-container">
            <Si className="shopping-icon"></Si>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}