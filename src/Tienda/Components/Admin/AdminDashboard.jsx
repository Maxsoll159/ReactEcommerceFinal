import { Col, Row, Card, Modal, Table } from "react-bootstrap";
import {MenuAdmin} from "../Admin/MenuAdmin";


export const AdminDashboard = () => {
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
              <h4>TELETUBIES STORE</h4>
            </Col>
          </Row>
          <Row className="container mx-auto my-5">
            <Col lg={4}>
              <div className="card w-100 border-success border-5">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-success rounded h-100 w-100 d-flex justify-content-center align-items-center border-success ">
                        <i class="fa fa-usd h2" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Ventas</Row>
                      <Row className="h3 text-danger">S/.124 000</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card w-100 border-warning">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-warning rounded h-100 w-100 d-flex justify-content-center align-items-center">
                        <i className="fa fa-truck fs-1" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Ordenes</Row>
                      <Row className="h3 text-danger">87790</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card w-100 border-info border-5">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-info rounded h-100 w-100 d-flex justify-content-center align-items-center border-info ">
                        <i
                          class="fa fa-shopping-basket fs-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Productos</Row>
                      <Row className="h3 text-danger">5678</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mt-5">
            <h4>Estadístias de ventas:</h4>
            <img
              className="mx-auto w-75 my-3"
              src="https://cdn.exceltotal.com/0103/graficos-combinados-en-excel-01.png"
            ></img>
          </Row>
          <Row className="w-100 mt-4">
            <h4>Ultimas Ventas:</h4>
            <div className="w-75 mx-auto my-4">
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};
