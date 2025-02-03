import { cartContext } from "./cartContext";
import {useState} from "react"

function CartProvider ({children}) {
    
    const [cart, setCart] = useState ([])

    const addToCart = (producto) => {
        setCart((prevCart) => {
            const itemExistente = prevCart.find((item) => item.id === producto.id);
      
            if (itemExistente) {
              return prevCart.map((item) =>
                item.id === producto.id
                  ? { ...item, qty: item.qty + producto.qty } // Aumenta la cantidad si el producto ya está en el carrito
                  : item
              );
            } else {
              return [...prevCart, producto]; // Agrega el nuevo producto si no está en el carrito
            }
        });
    }

    // const addToCart = (producto) => setCart ([...cart, producto])

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