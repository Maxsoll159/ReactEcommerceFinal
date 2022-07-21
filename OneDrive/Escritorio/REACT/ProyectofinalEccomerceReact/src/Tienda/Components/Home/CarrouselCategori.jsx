import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
export const CarrouselCategori = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
  return (
    <Container className="mt-5">
      <h4>PRODUCTOS DESTACADOS <i class="fa fa-shopping-basket ms-5" aria-hidden="true"></i></h4>
      <Slider {...settings} className="">
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center fw-bold">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "240px", border: "none", background: "#F7F7F7" }} className="card">
            <Card.Img
              variant="top"
              src="https://i.linio.com/p/23cefb8d316544c52598147f10da247f-card.webp"
              tyle={{ width: "170px", height: "182px" }}
              className="mx-auto"
            />
            <div className="d-flex justify-content-center padding-margin align-items-center">
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-search-plus fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-heart fa-2x" aria-hidden="true"></i></div>
              <div style={{ width: "35%", height: "75px" }} className="d-flex justify-content-center align-items-center card2"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></div>
            </div>
            <Card.Body>
              <Card.Title className="fs-6 text-center">
                REDMI K40 GAMING 5G 256GB-12GB COLOR
              </Card.Title>
              <Card.Text>
                <p className="text-center text-danger">S/.2600.00<span className="ms-3 text-dark">S/.3000.00</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </Container>
  );
};
