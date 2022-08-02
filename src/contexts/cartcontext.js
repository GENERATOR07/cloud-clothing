import { createContext,useState } from "react";



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
    addItemToCart:()=>{}
})


export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false)
    const [cartItems,setCartItem]=useState([])
    const addItemToCart=(product)=>{
        setCartItem(addCartItem(cartItems,product))
    }
    return(
        <CartContext.Provider value={{isCartOpen,setIsCartOpen,addItemToCart,cartItems}}>
            {children}
        </CartContext.Provider>
    )
}