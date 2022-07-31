import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
export const Banners2 = () => {
  return (
    <Container className="mt-1">
      <Row className="mt-3">
        <Col lg={2} style={{}} className="col-6 banner2">
            <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/1-superiores/destacados-SUP-lc-01-01.png" 
            width={244}
            height={203}
            style={{borderRadius: "25px"}}
            alt=""/>
        </Col>
        <Col lg={2} style={{marginLeft:"40px"}} className="col-6 banner2"> 
            <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/1-superiores/destacados-SUP-lc-02-01a.png" 
            width={244}
            height={203}
            style={{borderRadius: "25px"}}
            alt=""/>
        </Col>
        <Col lg={2} style={{marginLeft:"40px"}} className="col-6 banner2">
            <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/1-superiores/destacados-SUP-lc-03-01a.png" 
            width={244}
            height={203}
            style={{borderRadius: "25px"}}
            alt=""/>
        </Col>
        <Col lg={2} style={{marginLeft:"40px"}} className="col-6 banner2">
            <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/1-superiores/destacados-SUP-lc-05-01.png" 
            width={244}
            height={203}
            style={{borderRadius: "25px"}}
            alt=""/>
        </Col>
        <Col lg={2} style={{marginLeft:"40px"}} className="col-6 banner2">
            <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/1-superiores/destacados-SUP-lc-05-01.png" 
            width={244}
            height={203}
            style={{borderRadius: "25px"}}
            alt=""/>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={8} style={{}} className="col-12">
          <Row>
              <Col lg={6} className="col-12">
                <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/2-regulares/destacados-CYBER-1807-lc-03-01a.png" alt="" style={{borderRadius: "25px"}} className="imgRes"/>
                <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/2-regulares/destacados-CYBER-1807-lc-04-01.png" alt="" className="mt-3 imgRes" style={{borderRadius: "25px"}}/>
              </Col>
              <Col lg={6} className="col-12">
                <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/2-regulares/destacados-CYBER-1907-lc-05-01.jpg" alt="" width={430} style={{borderRadius: "25px"}} className="imgRes"/>
              </Col>
          </Row>
        </Col>
        <Col lg={4} style={{marginLeft:""}} className="col-12">
          <Row>
            <Col lg={12} className="col-12 w-100">
                <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/2-regulares/destacados-CYBER-1807-lc-06-01n.png" alt="" style={{borderRadius: "25px"}} className="imgRes"/>
                <img src="https://www.lacuracao.pe/cyberdays/assets/img/destacados/2-regulares/destacados-CYBER-1807-lc-07-01.png" alt="" className="mt-3 imgRes" style={{borderRadius: "25px"}}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
