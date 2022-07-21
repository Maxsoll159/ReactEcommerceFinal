import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
export const OficialTiendas = () => {
    return (
        <Container>
            <Row className="mt-5">
                <h3 className="mb-4">TIENDAS OFICIALES </h3>
                <Col lg={3}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/21ff359b07112__sis_ts_redragon.jpg" alt="" />
                </Col>
                <Col lg={3}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/fc3a5e405c96__sis_ts_samsung-1.jpg" alt="" />
                </Col>
                <Col lg={3}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/195a9e447ac91__sis_ts_huawei2-1.jpg" alt="" />
                </Col>
                <Col lg={3}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/50b4cf2e004a__desktop_sis_sony-audio.jpg" alt="" />
                </Col>
            </Row>
            <Row className="mt-5">
                <h3 className="mb-3">NOVEDADES</h3>

                <Col lg={3}>
                    <img src="https://i.linio.com/cms/67c75870-ffa1-11ec-9cfd-c2533916a67f.webp" alt="" className="w-100" />
                </Col>
                <Col lg={3}>
                    <img src="https://i.linio.com/cms/e3ebc610-ff43-11ec-94bf-56ba5f1eb965.webp" alt="" className="w-100" />
                </Col>
                <Col lg={3}>
                    <img src="https://i.linio.com/cms/83bbd4de-fee3-11ec-b350-56ba5f1eb965.webp" alt="" className="w-100" />
                </Col>
                <Col lg={3}>
                    <img src="https://i.linio.com/cms/85216f50-fee3-11ec-8489-56ba5f1eb965.webp" alt="" className="w-100" />
                </Col>
            </Row>
        </Container>
    );
};
