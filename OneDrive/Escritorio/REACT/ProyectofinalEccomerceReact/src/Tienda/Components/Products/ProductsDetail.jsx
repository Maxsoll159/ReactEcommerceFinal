import "../../../assets/Product.css" 
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';


const Product =()=> {


  return (
    
    <div className="colorfondo">
      <div className="container">
        <div className="padre">
          <div className=" imagenes"> 
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 imagenes-img"
                src="./img/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imagenes-img"
                src="./img/2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imagenes-img"
                src="./img/3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imagenes-img"
                src="./img/4.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          <div className="text">
            <div>
              <h1>Apple iPhone 12 64GB</h1>
              <div className="marca">
                <span>Marca <p>Apple</p> * 5 <span className="reseña"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg> 66 reseñas</span></span>
              </div>
            </div>
            <div className="pago">
            <div className="discontinuado"><span>S/ 3,599.00 </span>-20%</div>
            <div className="precio">S/ 2,869.00</div>
            <div className="tarjeta">S/ 2,799.00 <span></span></div>
            <div className="promocion">Acumula hasta 2,799 CMR Puntos</div>
            </div>
            <div className="envio">
              <div>
                <h1>Envio Gratis</h1>
                <p>Recibelo el <span>15 de julio</span> en Lima,San Isidro</p>
              </div>
              <div>
                <h2>Recogelo gratis en tienda</h2>
                <p>Cacular envio en otra direccion</p>
              </div>
            </div>
            <div className="opciones">
              <h3>Opciones</h3>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>NEGRO</option>
                <option value="1">NEGRO</option>
                <option value="2">AZUL</option>
                <option value="3">BLANCO</option>
                <option value="4">ROJO</option>
                <option value="5">PURPURA</option>
              </select>
              <div className="d-flex">
                <div className=" tamaño">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>1</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5">6</option>
                  </select>
                </div>
                <div className="caja">
                  <button className="boton">Añadir al carrito</button>
                </div>
              </div>
            </div>
            <div className="cmr">
              <div>
              </div>
              <div>
                <p>¡Aprovecha las Oportunidades Unicas de CMR Visa! Pidela aqui con S/80 de regalo</p>
              </div>
            </div>
            <div className="visto">
              <div>
              </div>
              <div>
                <p>Un universo de productos y este ha sido <span>visto 7934 veces</span> en los ultimos dias</p>
              </div>
            </div>
            <div className="envioss">
              <div>
                <h1>Enviado y vendido por:</h1>
              </div>
              <div className="d-flex">
                <div className="caja2">
                  4.6 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </div>
                <div className="nombre">
                  ZARCEX
                </div>
              </div>
            </div>
            <div className="llama">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
              <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg>Proteccion al Comprador</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>Asesoria Telefonica: (01) 6400-234</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>Descarga nuestra App</div>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0" className="opcionesmultiple">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="titulo">Caracteristicas destacadas</Accordion.Header>
              <Accordion.Body className="cuerpo">
                <li>iPhone 12 Blanco</li>
                <li>IPHONE INCLUYE ACTIVACION </li>
                <li>Sistema operativo iOS 15</li>
                <li>Procesador: Apple Chip A14 Bionic</li>
                <li>Cámara Trasera: Sistema de dos cámaras de 12 MP: ultra gran angular y gran angular</li>
                <li>Cámara Frontal: Cámara de 12 MP</li>
                <li>Pantalla: Super Retina XDR, OLED de 6.1 pulgadas</li>
                <li>Tamaño y peso: 146.7 x 71.5 x 7.4 mm / 162 gr</li>
                <li>Capacidad de batería: 2.775 mAh</li>
                <li>Tipo de Batería: Litio Ion</li>
                <li>Redes y Conectividad: 4G + LTE</li>
                <li>Reconocimiento facial por medio de la cámara TrueDepth</li>
                <li>Equipo nuevo y sellado se abrió para revisar la activación</li>
                <li>Incluye cable ORIGNAL</li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header  className="titulo">Detalle de producto</Accordion.Header>
              <Accordion.Body className="cuerpo">
                <div className="d-flex justify-content-between fondo">
                  <div className="cajon">
                    <li>
                      <div className="titulo">SKU</div>
                      <div>AP032EL0L996DLPE</div>
                    </li>
                    <li>
                      <div className="titulo">País de Origen</div>
                      <div>United States</div>
                    </li>
                    <li>
                      <div className="titulo">Peso (kg)</div>
                      <div>0.19</div>
                    </li>
                    <li>
                      <div className="titulo">Garantía del producto</div>
                      <div>10 MESES DE GARANTIA</div>
                    </li>
                  </div>
                  <div className="cajon">
                    <li>
                      <div className="titulo">Condición del producto</div>
                      <div>Nuevo</div>
                    </li>
                    <li>
                      <div className="titulo">Tamaño de la pantalla (pulg)</div>
                      <div>6.1</div>
                    </li>
                    <li>
                      <div className="titulo">Capacidad</div>
                      <div>64</div>
                    </li>
                    <li>
                      <div className="titulo">Memoria RAM</div>
                      <div>4</div>
                    </li>
                  </div>
                  <div className="cajon">
                    <li>
                      <div className="titulo">Sistema operativo</div>
                      <div>iOS 13.4</div>
                    </li>
                    <li>
                      <div className="titulo">Qué hay en la caja</div>
                      <ul>
                        <li>Cable USB-C a Lightning </li>
                        <li>No incluye adaptador de corriente ni audífonos. Algunos equipos podrían venir con la caja abierta (por la activación)</li>
                      </ul>
                    </li>
                  </div>
                </div>
                <div className="lista">
                  <h2>Descripcion</h2>
                  <p>
                  El Apple iPhone 12, con una gran pantalla de tamaño 6.1 pulgadas protegidas por un cristal ultra resistente, procesador Apple Chip A14 Bionic y un sistema operativo iOS 15 con 64 GB de almacenamiento y una memoria RAM 4 GB, cámara trasera Dual de 12MP con flash, cámara frontal 12MP, conectividad Wifi 4G LTE.
                  </p>
                  <ul>
                    <li>General: iPhone 12 Negro</li>
                    <li>Sistema operativo iOS 15</li>
                    <li>Procesador: Apple Chip A14 Bionic</li>
                    <li>Cámara Trasera: Sistema de dos cámaras de 12 MP: ultra gran angular y gran angular</li>
                    <li>Cámara Frontal: Cámara de 12 MP</li>
                    <li>Pantalla: Super Retina XDR, OLED de 6.1 pulgadas</li>
                    <li>Tamaño y peso: 146.7 x 71.5 x 7.4 mm / 162 gr</li>
                    <li>Capacidad de batería: 2.775 mAh</li>
                    <li>Tipo de Batería: Litio Ion</li>
                    <li>Redes y Conectividad: 4G + LTE</li>
                    <li>Reconocimiento facial por medio de la cámara TrueDepth</li>
                    <li>Incluye cable ORIGINAL</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Product;