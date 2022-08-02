import "./cart-item.styles.scss"

export const CartItem=({item})=>{
    const {name,quantity}=item
    return(
        <div>
            <h2>
                {name}
            </h2>
            <span>{quantity}</span>
        </div>
    )

}