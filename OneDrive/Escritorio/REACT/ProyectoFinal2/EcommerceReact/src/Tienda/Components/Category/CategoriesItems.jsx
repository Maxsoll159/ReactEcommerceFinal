import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../assets/categoryitem.css" 
import CardProduct from '../Card/CardProduct';
import CardProductHorizontal from '../Card/CardProductHorizontal';
import { useState, useEffect } from 'react';
import { productApi } from '../../helpers/ProductsApi';
let nuevo = []
export const CategoriaItems=(props)=>{
    const[product,setProduct]=useState([])
    useEffect(()=>{
        productApi().then((produc)=>setProduct(produc))
    },[props.id])

    for (let clave in product){
        nuevo.push(product[clave])
    }

    let jajaja = nuevo.filter(hola=> hola.category_id == props.id)
    return(
        < >
        <Row lg={4} md={3} sm={2} xs={2}>  
        {
            jajaja.map((nuevo2, index)=>(
                props.tipo === 'grid'?
                <Col key={index} className='mb-2'>
                    <CardProduct img={nuevo2.images[0]} name={nuevo2.title} price={nuevo2.price} desc={nuevo2.descuento} product={nuevo2}/>                    
                </Col>
                :
                <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}  className='mb-2'>
                   <CardProductHorizontal  img={nuevo2.images[0]} name={nuevo2.title} price={nuevo2.price} desc={nuevo2.descuento} product={nuevo2}/> 
                </Col>
            )) }  
        </Row>   

         
        </>
    )
}