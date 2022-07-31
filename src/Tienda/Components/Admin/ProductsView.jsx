import { Col, Row, Table } from "react-bootstrap";

import { useEffect, useState, useContext } from "react";
import { eliminarProduct, productApi } from "../../helpers/ProductsApi";
import {MenuAdmin} from "../Admin/MenuAdmin";
export const ProductsView = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    productApi().then((produc)=>setProducts(produc))
  },[])

  let nuevo =[]
  for (let clave in products){
      nuevo.push(products[clave])
  }

  const borrarProduct = (id) =>{
    for (const property in products) {
      if(products[property].id === id){
        eliminarProduct(property)
      }
    }
  }
  return (
    <>
      <Row>
        <Col xs={2}>
          <MenuAdmin />
        </Col>

        <Col xs={10}>
          <Row className="border-bottom border-success align-items-center shadow-sm bg-white w-100 py-2">
            {" "}
            <Col lg={6}>
              {" "}
              <h4>PRODUCTOS</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="my-5 mx-auto">
              <Table responsive hover className="text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>IMAGEN</th>
                    <th>SKU</th>
                    <th>NOMBRE</th>                    
                    <th>PRECIO</th>
                    <th>DESCUENTO</th>                    
                    <th></th>
                  </tr>
                </thead>
                {/*{cartItem.map((prod, index) => (*/}
                {nuevo.map((prod, index) => (
                  <tbody key={prod.id}>
                    <tr>
                      <td>
                        <span>{prod.id}</span>
                      </td>
                      <td>
                        <img
                          src={prod.images[0]}
                          width="90"
                          className="rounded"
                          alt="..."
                        />
                      </td>
                      <td>
                        <span>{prod.SKU}</span>
                      </td>
                      <td>                        
                          <p className="text-start">{prod.title}</p>                        
                      </td>
                      <td>
                      <p>S/.{prod.price}</p>
                      </td>
                      <td>
                         <span>S/.{prod.descuento}</span>
                      </td>                                            
                      <td>
                      <div className="d-flex ">
                        <button className="btn text-success">
                        <i className="fa fa-pencil mx-2" aria-hidden="true"></i>
                        </button>
                        <button className="btn text-success" onClick={()=> borrarProduct(prod.id)}>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>              
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
