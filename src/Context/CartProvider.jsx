import { cartContext } from "./cartContext";
import {useState} from "react"

function CartProvider ({children}) {
    
    const [cart, setCart] = useState ([])

    const addToCart = (producto) => setCart ([...cart, producto])

    const getQuantity = () => {
        const quantities = cart.map(item => item.qty)
        const totalProducts = quantities.reduce((acc, current) => acc + current, 0);

        return totalProducts 
    }

    const getTotal = () => {
        const quantities = cart.map(item => item.qty*item.price)
        const totalBuys = quantities.reduce((acc, current) => acc + current, 0);

        return totalBuys
    }

    const removeFormCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }



    return(
        <cartContext.Provider value={{cart, addToCart, getQuantity, getTotal, removeFormCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider