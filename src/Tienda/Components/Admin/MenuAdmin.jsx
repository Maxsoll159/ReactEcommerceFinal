import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import '../../../assets/UserLogin.css';


export const MenuAdmin = () => {
  const storage = JSON.parse(localStorage.getItem("logeado"));
  return (
    
      <div>
        <Navbar bg="light">
          <Container>
            <p style={{fontSize:"30px", fontWeight:"bold", borderBottom:"1px solid #808B96"}}>Bienvenid@ {storage.displayName.split([" "],[1])}</p>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/admin/Dashboard" onFocus={{fontSize:"30px"}} style={{ }}>Dashboard</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/admin/ProductsView">Productos</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/admin/AddProduct">Agregar Producto</Navbar.Brand>
          </Container>
        </Navbar>        
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/admin/CategoriasView">Categorias</Navbar.Brand>
          </Container>
        </Navbar>    
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/admin/AddCategoria">Agregar Categoria</Navbar.Brand>
          </Container>
        </Navbar>     
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#">Ordenes</Navbar.Brand>
          </Container>
        </Navbar>        
        <Navbar bg="light" style={{borderTop:"1px solid #808B96"}}>
          <Container>
            <Navbar.Brand href="#">Configuración</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#">Cerrar Sesión</Navbar.Brand>
          </Container>
        </Navbar>      
      </div>
  );
};
