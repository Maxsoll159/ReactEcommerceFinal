import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
export const Carshopping = () => {
 
  const {deleteItemToCart,addItemToCart}=useContext(CartContext); 
  const {cartItem}=useContext(CartContext);

  return (
    <div className="d-flex flex-column h-max" >
      <div className="bg-secondary p-4 text-white ">
        <h1 className="display-6">Shopping Cart</h1>
      </div>

      <div className="container h-100  align-self-center">
        <div className="row h-100 align-items-center ">
          <div className="col-md-9">
            <div className="card">
              <div className="container p-4">
                <div className="row">
                  <div className="col-5 me-auto  text-center">
                    <h4>PRODUCT</h4>
                  </div>
                  <div className="col-2 ">
                    <h4>Precio</h4>
                  </div>
                  <div className="col-2 text-center">
                    <h4>Cantidad</h4>
                  </div>
                  <div className="col-2 text-center">
                    <h4>Total</h4>
                  </div>
                  {
                     cartItem.map((prod, index)=>(
                      <div key={index} className="row align-items-center">
                        <div className="col-5  me-auto mb-3 d-flex align-items-center">
                          <img
                            src={prod.images[0]}
                            width="80"
                            className="rounded"
                            alt="..."
                          />
      
                          <div className="ms-4">
                          <Link to="/product/detail" className="text-decoration-none"  >
                              {prod.title}
                            </Link>
                          </div>
              
                        </div>
                        <div className="col-2 d-flex align-items-center text-center " >
                          <div >
                            <var className="price">$237.00</var>
                            <small className="d-block text-muted">
                              $79.00 each
                            </small>
                          </div>
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </div>

                        <div className="col-2 d-flex text-center ">
                          <button button onClick={()=>addItemToCart(prod)} className="btn btn-primary text-white" type="button" >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                          <input type="text" readOnly className="form-control" value={prod.cantidad} />
                          <button onClick={()=>deleteItemToCart(prod)} className="btn btn-primary text-white" type="button" >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <div className="col-2 text-center ">
                          <var className="price">{prod.cantidad * prod.price}</var>
                          <small className="d-block text-muted">
                          {prod.descuento}
                          </small>
                        </div>
                    </div>
                      )) 
                  }


                </div>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-end">
                  Ir a Pagar
                </Link>
                <Link to="/" className="btn btn-secondary">
                  {/*  <IconChevronLeft className="i-va" />  */}Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                {/* <IconTruck className="i-va me-2" /> */} Free Delivery within 1-2
                weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <div className="card-body d-flex flex-column  align-items-center">
                <label htmlFor="" className="me-auto">Tienes un Cupon?</label>
                <input type="text" className="form-control" placeholder="ingrese su cupon" />
                <button className="btn btn-primary ms-auto"> Aplicar</button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">$1,568</dd>

                  <dt className="col-6 text-success">Discount:</dt>
                  <dd className="col-6 text-success text-end">-$58</dd>
                  <dt className="col-6 text-success">
                    Coupon:{" "}
                    <span className="small text-muted">EXAMPLECODE</span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">-$68</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end  h5">
                    <strong>$1,350</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img
                    src="../../images/payment/payments.webp"
                    alt="..."
                    height={26}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}