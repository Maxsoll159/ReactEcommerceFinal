import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../../Context/CartContext';
export const CartItems = ({value}) => {
    console.log("entra carro")
    const {deleteItemToCart}=useContext(CartContext); 
  return (
    <Card className='flex-row'>
        <Card.Img className='img-cart py-2 '
            variant="top"
            src={value.images[0]}
        />
         <Card.Body  >
            <Card.Title className='fs-6' > {`${value.title.substring(11,40)}.....`}</Card.Title>
            <Card.Text>
                <Row>
                    <Col lg={10} md={8} sm={7}>
                        <div className="price-del"><span>Precio: S/{(value.price)}</span></div>
                        <div className="text-danger">Cantidad: {value.cantidad}</div>
                        <div className="price-del"><span>Total: S/{(value.price)*(value.cantidad)}</span></div>
                    </Col>
                    <Col lg={2} md={4} sm={5}>
                    <button className='btn ' onClick={()=>deleteItemToCart(value)}><i className="fa fa-times text-danger"   aria-hidden="true"></i> </button>
                               
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
