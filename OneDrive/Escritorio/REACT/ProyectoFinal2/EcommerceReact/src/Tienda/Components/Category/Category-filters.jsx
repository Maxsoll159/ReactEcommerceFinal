import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { categoryApi } from '../../helpers/CategoryApi';

export const Categoryfilters=({id})=>{
    const[subcate,setSubcate]=useState([])
    useEffect(()=>{
        categoryApi(id-1).then((categ)=>setSubcate(categ.subcategorias))
    },[id])
    return(
        <>
            <Col lg={3}>
                <h4>Desktop</h4>
                <ListGroup variant="flush bg-white">
                    {
                        subcate.map((subcategori, index)=>(
                            <ListGroup.Item className='cursor-pointer' key={index}>{subcategori.name}</ListGroup.Item>  
                        ))
                    }
                    
                </ListGroup>
             </Col>
                   
        </> 
    )
}