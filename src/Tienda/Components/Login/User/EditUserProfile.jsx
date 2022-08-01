import {Col, Row} from "react-bootstrap";

export const EditUserProfile = () => {
  const storage = JSON.parse(localStorage.getItem("logeado"));
  return (
    <Row className="container mx-auto" style={{height:"82vh", marginTop:"3.5rem"}}>
    <Col lg={{ span: 6, offset: 3 }} >
      <div className="card border-success">
        <div
          className="card-header border-success"
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/001/884/507/large_2x/abstract-green-water-color-background-illustration-texture-for-design-free-photo.jpg)",
          }}
        >
          <div className="">
            <div className="d-flex flex-column align-items-center">

              <h2 className="my-2">{storage.displayName.split([5])}</h2>
            </div>
          </div>
          <a className="float-end btn btn-dark " type="button">
          <i class="fa fa-floppy-o" aria-hidden="true"></i>
            Guardar
          </a>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Correo:</label>
            <input 
              type="email"
              className="form-control border-success border-success"
              value={storage.email}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección:</label>
            {storage.address ? (
              <input
                type="text"
                className="form-control border-success"
                value={storage.address}
              ></input>
            ) : (
              <input
                type="text"
                className="form-control border-success"
                value={"Dirección no ingresada"}
              ></input>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Celular:</label>

            {storage.mobile ? (
              <input
                type="email"
                className="form-control border-success"
                value={storage.mobile.value}
              ></input>
            ) : (
              <input
                type="email"
                className="form-control border-success"
                value={"Número no ingresado"}
              ></input>
            )}
          </div>
        </div>
      </div>
    </Col>
    </Row>
  );
};
