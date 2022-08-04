import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../../contexts/cartcontext"
export const CheckoutItems=({item})=>{
    const{clearItem,addItemToCart,removeItemToCart}=useContext(CartContext)
    const{name,imageUrl,price,quantity}=item
    const increment=()=>addItemToCart(item);
    const decrement=()=>removeItemToCart(item);
    const clear=()=>clearItem(item)
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
               <div onClick={decrement}className="arrow">&#10094;</div>
               <span className="value">{quantity}</span> 
               <div onClick={increment} className="arrow">&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <div onClick={clear}className="remove-button">&#10005;</div>




        </div>
    )

}