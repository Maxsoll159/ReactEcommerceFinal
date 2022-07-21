import { Container , Col, Row} from "react-bootstrap";
export const CategoriasVen = () => {
  return (
    <div style={{ background: "#F2F2F2" }}>
      <Container>
        <Row className="">
          <Col lg={4} sm={4} className="py-2 py-md-3" style={{borderRight: "2px solid #DEDDDC"}}>
            <div>
              <div className="d-flex align-items-center animate__animated animate__jackInTheBox info">
                <i class="fa fa-truck fa-5x me-3" aria-hidden="true" style={{color: "#DEDDDC"}}></i>
                <p className="padding-margin" style={{width: "270px"}}>
                  Entrega de mercancías al día siguiente a su domicilio u
                  oficina
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={4} className="py-2 py-md-3" style={{borderRight: "2px solid #DEDDDC"}}>
          <div>
              <div className="d-flex align-items-center mt-2 animate__animated animate__jackInTheBox info">
                <i class="fa fa-credit-card fa-4x me-3" aria-hidden="true" style={{color: "#DEDDDC"}}></i>
                <p className="padding-margin" style={{width: "270px"}}>
                    Cómodo pago con tarjetas bancarias, efectivo y crédito
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={4} className="py-2 py-md-3">
          <div>
              <div className="d-flex align-items-center mt-2 animate__animated animate__jackInTheBox info ">
                <i class="fa fa-gift fa-4x me-3" aria-hidden="true" style={{color: "#DEDDDC"}}></i>
                <p className="padding-margin" style={{width: "270px"}}>
                Elija un regalo y obtenga descuentos solo: ¡una tarjeta de regalo!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
