import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from './Product';


function ItemList ({items}) {
    return(
        <Container>
            <Row>
                {items.map(item => (
                 <Product item={item} key={item.id} />
              ))}
            </Row>
        </Container>
    );
}


export default ItemList