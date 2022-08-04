
import { useContext } from "react"
import { CartContext } from "../../contexts/cartcontext"
import "./checkout.styles.scss"
import { CheckoutItems } from "./checkout-item/checkout-item"


export const CheckOut=()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">product</div>
                <div className="header-block">description</div>
                <div className="header-block">quantity</div>
                <div className="header-block">price</div>
                <div className="header-block">remove</div>
            </div>
            
            {cartItems.map(item=><CheckoutItems key={item.id} item={item}></CheckoutItems>)
            }
            <span className="total">Total=${cartItems.map(item=>item.price*item.quantity)
            .reduce((total,item)=>total+item,0)}</span>
        </div>
        
    )
}