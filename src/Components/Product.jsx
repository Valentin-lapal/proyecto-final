import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import styles from '../Styles/Product.module.css'
import { useNavigate } from 'react-router';


// Le agregue en la columna "<Col>" la clase className="mt-5" que es de bootstrap

function Product ({item}) {
    const navigate = useNavigate()

    return(
        <Col className="mt-5">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={item.url} />
                <Card.Body className={styles.fondo}>
                    <Card.Title style={{color:"#fff", fontSize:"1.8em"}}>{item.name}</Card.Title>
                    <Card.Title>category: {item.category}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                       $ {item.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate (`/item/${item.id}`)}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product