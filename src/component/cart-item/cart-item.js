import "./cart-item.styles.scss"

export const CartItem=({item})=>{
    const {name,imageUrl,quantity,price}=item
    return(
        <div className="cart-item-container">
           
            <img src={imageUrl} alt={name}></img>
           
            <div className="car-item-detail">
                <spam className="name">{name}</spam>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    )

}