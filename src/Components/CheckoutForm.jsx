import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {createOrden} from "../firebase/db"
import { useContext } from 'react'
import { cartContext } from '../Context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import {useNavigate} from "react-router"

function CheckoutForm () {
    const navigate = useNavigate()

    const {getTotal, cart} = useContext(cartContext)

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const [name, phone, email] = form

        const order = {
            buyer:{name: name.value, email: email.value, phone: phone.value},
            total: getTotal(),
            items: cart,
            time: serverTimestamp()
        }

        createOrden(order);
        navigate("/")

    }
    return(
        <Form className="w-25 mt-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="pepito" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="011-4896-5656" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="pepito@gmail.com" required />
            </Form.Group>
            <Button type='submit' className='w-100' variant="outline-warning">
                Quiero mis productos
            </Button>  
        </Form>
    )
}

export default CheckoutForm