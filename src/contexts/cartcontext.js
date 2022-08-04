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



export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0
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
        setCartItem(addCartItem(cartItems,product))
    }
    return(
        <CartContext.Provider value={{isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount}}>
            {children}
        </CartContext.Provider>
    )
}