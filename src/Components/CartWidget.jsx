import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useContext } from 'react';
import {cartContext} from "../Context/cartContext"


function CartWidget () {
    const {getQuantity} = useContext (cartContext)

    return(
        <div>
            <Button variant="light">
                <Badge bg="secondary">{getQuantity()}
                    <i className="bi bi-cart-fill"></i>
                </Badge>
            </Button>
        </div>
        
    );
}

export default CartWidget