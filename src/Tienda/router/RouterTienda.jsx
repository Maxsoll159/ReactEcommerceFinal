import { Routes, Route } from "react-router-dom";
import { AddCategoria } from "../Components/Admin/AddCategoria";
import { AddProduct } from "../Components/Admin/AddProduct";
import { AdminDashboard } from "../Components/Admin/AdminDashboard";
import { CategoriasView } from "../Components/Admin/CategoriasView";
import { ProductsView } from "../Components/Admin/ProductsView";
import { Carshopping } from "../Components/CarroShopping/Carshopping";
import {Pagos} from "../Components/CarroShopping/Pagos";
import Footer from "../Components/Footer/Footer";
import { NavBar } from "../Components/Header/NavBar";
import { EditUserProfile } from "../Components/Login/User/EditUserProfile";
import { UserProfile } from "../Components/Login/User/UserProfile";
import Product from "../Components/Products/ProductsDetail";
import { Categoryproducts } from "../Pages/Categoryproducts";
import Error from "../Pages/Error";
import { Home } from "../Pages/Home";
import { Loegado } from "../Pages/Logeado";

export const RouterTienda = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Product/:id" element={<Product/>} />
        <Route path="Category/:id" element={<Categoryproducts/>} />
        <Route path="Logeado" element={<Loegado/>}/>
        <Route path="cart" element={<Carshopping/>}/>
        <Route path="checkout" element={<Pagos/>} />
        <Route path="/*" element={<Error/>}/>
        <Route path="/account/userProfile" element={<UserProfile/>}/>
        <Route path="/account/EditUserProfile" element={<EditUserProfile/>}/>
        <Route path="/admin/Dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/productsview" element={<ProductsView/>}/>
        <Route path="/admin/addProduct" element={<AddProduct/>}/>
        <Route path="/admin/categoriasView" element={<CategoriasView/>}/>
        <Route path="/admin/AddCategoria" element={<AddCategoria/>}/>

      </Routes>
    <Footer/>
    </>
  );
};
