import {Button} from "../button/button"
import "./cart-dropdown.styles.scss"

export const CartDropdown=()=>{
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">

            </div>
            <Button>Add to cart</Button>
        </div>
    )
}