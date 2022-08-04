
import { useContext } from "react"
import { CartContext } from "../../contexts/cartcontext"


export const CheckOut=()=>{
    const {cartItems}=useContext(CartContext)
    return(
        <div>
            <h1>Welcum to checkout</h1>
            {cartItems.map(item=>{
                const {id,name,quantity}=item
                return(
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                    </div>
                )
            })
            }
        </div>
        
    )
}