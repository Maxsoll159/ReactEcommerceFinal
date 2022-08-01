import React from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row, Breadcrumb, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { agregarPedido } from "../../helpers/pedido";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export const Pagos = () => {
    /*Traer datos de Local*/
    let datos = JSON.parse(localStorage.getItem("carro"))
    let TotalFinal = 0;
    let bandera = false
    let total = datos.map((total) => {
        TotalFinal += (total.cantidad * total.price)
    })
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${TotalFinal}`,
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        if(actions.order.capture() !== null){
            pedido()
            Swal.fire(
            'Buen Trabajo!',
            'Pedido Realizado con Exito!',
            'success'
        )
        }else{
            alert("error")
        }

    }

    const pedido = () => {
        const correo = document.querySelector("#correo").value,
            telefono = document.querySelector("#telefono").value,
            nombre = document.querySelector("#nombre").value,
            direc1 = document.querySelector("#direc1").value,
            direc2 = document.querySelector("#direc2").value,
            departamento = document.querySelector("#departamento").value,
            provin = document.querySelector("#provin").value,
            distri = document.querySelector("#distri").value
            let fecha = new Date()
            const data = {
                correo, 
                telefono,
                nombre,
                direc1,
                direc2,
                departamento,
                provin,
                distri,
                estado: "pendiente",
                fecha,
                productos: datos,
            }
            agregarPedido(data)
    }
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Breadcrumb className="mt-2">
                        <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item active> Procesar Pago </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className="border-bottom align-items-center shadow-sm bg-white w-100 mx-1 py-2">
                <Col lg={6}>
                    <h4>PROCESAR PAGO</h4>
                </Col>
            </Row>
            <Row className="container">
                <Col lg={8}>
                    <form>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Información de Contacto</span>
                                </Card.Header>
                                <Card.Body className="row">
                                    <div className="col-md-6 mt-1">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Correo electronico"
                                            id="correo"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Teléfono"
                                            id="telefono"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Información de Envío</span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className="row">
                                        <div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Nombres Completos"
                                                id="nombre"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-md-6 mb-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dirección 1"
                                                id="direc1"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dirección 2"
                                                id="direc2"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Departamento"
                                                id="departamento"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Provincia"
                                                id="provin"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Distrito"
                                                id="distri"
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Metodo de Pago</span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className="row">
                                        <div className="col-7 d-flex justify-lg-content-between">
                                            <input className="me-1" type="radio" />
                                            <label className="me-1" htmlFor="">Credit Card</label>
                                            <img className="d-lg-block d-none" alt="" />
                                        </div>
                                        <div className="col-5 d-flex justify-lg-content-betweent">
                                            <input className="me-1" type="radio" />
                                            <label className="me-1" htmlFor="">PayPal</label>
                                            <img className="d-lg-block d-none" alt="" />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-md-6 mt-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Nombre de Tarjeta"
                                            />
                                        </div>
                                        <div className="col-md-6 mt-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Número de Tarjeta"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-md-6 mt-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Fecha de Caducidad"
                                            />
                                        </div>
                                        <div className="col-md-6 mt-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="CVV"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="">
                                            <PayPalButton
                                                createOrder={(data, actions) => createOrder(data, actions)}
                                                onApprove={(data, actions) => onApprove(data, actions)}
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </form>
                </Col>
                <Col lg={4}>
                    <Card className=" my-3 border-success">
                        <Card.Header className="text-success">
                            <span>Detalle de la Compra</span>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Text className="row border-bottom">
                                <div className="col-8">
                                    <span>Producto</span>
                                </div>
                                <div className="col-4">
                                    <span>Costo</span>
                                </div>
                            </Card.Text>
                            <Card.Text className="row border-bottom">
                                {
                                    datos.map((items) => (
                                        <>
                                            <div className="col-8 mt-2">
                                                <span className="fw-bold">{items.title}</span>
                                            </div>
                                            <div className="col-4">
                                                <span className="fw-bold">S/. {items.cantidad * items.price}</span>
                                            </div>
                                        </>

                                    ))
                                }
                            </Card.Text>
                            <Card.Footer>
                                <div className="row">
                                    <div className="col-8">
                                        <span>TOTAL</span>
                                    </div>
                                    <div className="col-4">
                                        <span>S/. {TotalFinal}</span>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};