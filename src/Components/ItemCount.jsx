import { useState, useContext } from "react"
import { cartContext } from "../Context/cartContext"


function ItemCount ({producto}) {

    const [count, setCount] = useState(0)
    const {addToCart} = useContext(cartContext)

    const handleAddToCart = () => {
        addToCart ({...producto, qty: count})
    }

    return(
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount (count - 1)} disabled={count < 1}>-</button>
                <button onClick={handleAddToCart} disabled={count < 1}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount