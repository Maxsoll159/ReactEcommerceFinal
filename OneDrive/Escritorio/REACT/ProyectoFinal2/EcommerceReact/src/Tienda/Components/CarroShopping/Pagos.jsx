/* import credit from "../../../../public/img/pago/credit.jpg"
import paypal from "../../../../public/img/pago/paypal.jpg" */

import "../../../assets/Pagos.css"

export const Pagos=()=>{
    return(
        <div>

            <h1 className="Tema">"Ckeckout"</h1>

            <div className="container d-flex Total">

                <div className="Cajas">

                    <div className="Padre">
                        <div className="Arriba">
                            <h5><i class="bi bi-envelope"></i>Informacion de Contacto</h5>
                        </div>
                        <div className="Abajo Dos Column d-flex justify-content-between">
                            <input type="text" placeholder="Direccion de correo electronico"/>
                            <input type="text" placeholder="Movil"/>
                        </div>
                    </div>

                    <div className="Padre">
                        <div className="Arriba">
                            <h5><i class="bi bi-truck"></i>Informacion de Envio</h5>
                        </div>
                        <div className="Abajo Column">
                            <div>
                                <input type="text" placeholder="Nombres Completos"/>
                            </div>
                            <div className=" Dos d-flex justify-content-between">
                                <input type="text" placeholder="Direccion_1"/>
                                <input type="text" placeholder="Direccion_2"/>
                            </div>
                            <div className="Tres d-flex justify-content-between">
                                <input type="text" placeholder="Pais"/>
                                <input type="text" placeholder="Estado/Ciudad"/>
                                <input type="text" placeholder="Referencia"/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="Padre">
                        <div className="Arriba Color1 Pago">
                            <h5><i class="bi bi-credit-card"></i>Metodo de Pago</h5>
                        </div>
                        <div className="Abajo">

                            <div className="Tarjeta d-flex">
                                <div className="d-flex justify-content-between">
                                    <input type="radio" />
                                    <label htmlFor="">Credit Card</label>
                                  {/*   <img src={credit} alt="" /> */}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <input type="radio" />
                                    <label htmlFor="">PayPal</label>
                                 {/*    <img src={paypal} alt="" /> */}
                                </div>
                            </div>

                            <div className=" Dos d-flex justify-content-between">
                                <input type="text" placeholder="Nombre en la Tarjeta"/>
                                <input type="text" placeholder="Numero de Tarjeta"/>
                            </div>

                            <div className="Tres d-flex justify-content-between">
                                <input type="text" placeholder="Mes de Caducidad"/>
                                <input type="text" placeholder="Año de caducidad"/>
                                <input type="text" placeholder="CVV"/>
                            </div>

                            <div className="Pago">
                                <button className="btn">Pagar Total 100</button>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div className="Productos Padre">
                    <div className="Arriba">
                        <h5><i class="bi bi-cart"></i>Carro</h5>
                        </div>
                        <div className="Abajo Carro2">

                            <div className="Carro d-flex justify-content-between">
                                <div>
                                    <h6>Nombre del Producto</h6>
                                    <p>Breve Descripcion</p>
                                </div>
                                <div>
                                    <p>Costo</p>
                                </div>
                            </div>
                            <div className="Carro d-flex justify-content-between">
                                <div>
                                    <h6>Nombre del Producto</h6>
                                    <p>Breve Descripcion</p>
                                </div>
                                <div>
                                    <p>Costo</p>
                                </div>
                            </div>
                            <div className="Carro d-flex justify-content-between">
                                <div>
                                    <h6>Nombre del Producto</h6>
                                    <p>Breve Descripcion</p>
                                </div>
                                <div>
                                    <p>Costo</p>
                                </div>
                            </div>

                            <div className=" d-flex justify-content-between">
                            <div>
                                    <h4>TOTAL(SOLES)</h4>
                                </div>
                                <div>
                                    <h4>100</h4>
                                </div>
                            </div>    
                        </div>
                </div>

            </div>
        </div>
    )
}
