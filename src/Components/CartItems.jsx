import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import CartItem from "./CartItem"
import {useNavigate} from "react-router"

function CartItems ({items}) {
    const navigate = useNavigate ()

    return(
        <div className="d-flex flex-column align-items-center mt-5">
            <ListGroup className="w-50">
                {items.map(item => (
                  <CartItem item={item} key={item.id} />  
                ))}
            </ListGroup>
            <Button onClick={() => navigate("./checkout")} variant="success" className= "w-50 mt-3">
                Finalizar compra
            </Button>
        </div>
    )
}

export default CartItems