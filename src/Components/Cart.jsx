import CartItems from "./CartItems"
import { useContext } from "react"
import { cartContext } from "../Context/cartContext"


function Cart () {
    const {cart, getTotal} = useContext(cartContext)

    if (cart.length === 0){
        return (
            <div>No tenes productos en el carrito</div>
        )
    }


    return (
        <div>
            <CartItems items={cart} />
            <p>Total: {getTotal()}</p>
        </div>
    )
}

export default Cart