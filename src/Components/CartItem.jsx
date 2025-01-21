import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { useContext } from "react"
import { cartContext } from "../Context/cartContext"

function CartItem ({item}) {
  const { removeFormCart } = useContext(cartContext)

  return(
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {item.title} x {item.qty}
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