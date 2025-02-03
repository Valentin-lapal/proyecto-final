import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { useContext } from "react"
import { cartContext } from "../Context/cartContext"

function CartItem ({item}) {
  const { removeFormCart } = useContext(cartContext)

  return(
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <img
        src={item.url}
        alt={item.name}
        style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
      />{item.name} x {item.qty}
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeFormCart (item.id)}>
        Eliminar
      </Button>
    </ListGroup.Item>    
  )
}

export default CartItem