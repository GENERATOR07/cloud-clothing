import { createContext,useEffect,useState } from "react";



const addCartItem=(cardItems,product)=>{
   const  existingCardItem=cardItems.find(item=>item.id===product.id)

    if(existingCardItem){
        return cardItems.map(item=>{
            return item.id===product.id?{...item,quantity:item.quantity+1}:
            item
        })
    }

    return [...cardItems,{...product,quantity:1}]
}
 const removeCartItem=(cartItems,product)=>{
    const  existingCardItem=cartItems.find(item=>item.id===product.id)
    if(existingCardItem.quantity===1){
        return(
            cartItems.filter(item=>item.id!==existingCardItem.id)
        )
    }
    if(existingCardItem){
        return cartItems.map(item=>{
            return item.id===product.id?{...item,quantity:item.quantity-1}:
            item
        })
    }
 }
const clearItemFromCart=(items,itemToClear)=>{
    return items.filter(item=>item.id!==itemToClear.id)

}



export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    removeItemToCart:()=>{},
    clearItem:()=>{}
})


export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItem]=useState([])
    const [cartCount,setCartCount]=useState(0)
    useEffect(()=>{
        const newCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
         setCartCount(newCount)
    },[cartItems])
    const addItemToCart=(product)=>{
        setCartItem(addCartItem(cartItems,product))}
    const removeItemToCart=(itemToRemove)=>{
            setCartItem(removeCartItem(cartItems,itemToRemove))    
    }
    const clearItem=(itemToClear)=>{
        setCartItem(clearItemFromCart(cartItems,itemToClear))
    }
    return(
        <CartContext.Provider value={
            {isCartOpen,
                setIsCartOpen,
                addItemToCart,
                cartItems,
                cartCount,
                removeItemToCart,
                clearItem
            } }>
            {children}
        </CartContext.Provider>
    )
}