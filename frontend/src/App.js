import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Admin Imports
import AdminHome from "./pages/adminPages/AdminHome";
import NewProduct from "./pages/adminPages/NewProduct";
import AdminSingleProduct from "./pages/adminPages/AdminSingleProduct";
import Users from "./pages/adminPages/Users";
import NewUser from "./pages/adminPages/NewUser";
import SingleUser from "./pages/adminPages/SingleUser";
import Orders from "./pages/adminPages/Orders";
import SingleOrder from "./pages/adminPages/SingleOrder";
import AdminCategory from "./pages/adminPages/AdminCategory";
import AdminSingleCategory from "./pages/adminPages/AdminSingleCategory";
import NewCategory from "./pages/adminPages/NewCategory";
// Shop Imports
import About from "./pages/userPages/About";
import Cart from "./pages/userPages/Cart";
import Categories from "./pages/userPages/Categories";
import Contact from "./pages/userPages/Contact";
import Home from "./pages/userPages/Home";
import Login from "./pages/userPages/Login";
import Register from "./pages/userPages/Register";
import SingleCategory from "./pages/userPages/SingleCategory";
import SingleProduct from "./pages/userPages/SingleProduct";


// SuperAdmin Imports
import SuperHome from "./pages/superAdminPages/SuperHome";
import Employees from "./pages/superAdminPages/Employees";
import SingleEmployee from "./pages/superAdminPages/SingleEmployee";
import Clients from "./pages/superAdminPages/Clients";
import SingleClient from "./pages/superAdminPages/SingleClient";
import Accounts from "./pages/superAdminPages/Accounts";
import SingleAccount from "./pages/superAdminPages/SingleAccount";
import Stocks from "./pages/superAdminPages/Stocks";
import NewStaff from "./pages/superAdminPages/NewStaff";
import NewStock from "./pages/superAdminPages/NewStock";
 

function App() {
  return (
     <>
      <BrowserRouter>
      <Routes>
        {/* Shop Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/categories" element={<Categories/>} />        
        <Route path="/category/:id" element={<SingleCategory/>} />        
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminHome/>} />
              {/* add New */}
              <Route path="/newCategory" element={<NewCategory/>} />
              <Route path="/newProduct" element={<NewProduct/>} />
              <Route path="/newUser" element={<NewUser/>} />
              {/* side Menu */}
              <Route path="/adminCategory" element={<AdminCategory/>} />
              <Route path="/adminCategory/:id" element={<AdminSingleCategory/>} />
              <Route path="/adminProduct/:id" element={<AdminSingleProduct/>} />

              <Route path="/users" element={<Users/>} />
              <Route path="/user/:id" element={<SingleUser/>} />

              <Route path="/orders" element={<Orders/>} />
              <Route path="/order/:id" element={<SingleOrder/>} />
        
        {/* SuperAdmin Routes */}
        <Route path="/super" element={<SuperHome/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/newEmployee" element={<NewStaff/>} />
        <Route path="/employee/:id" element={<SingleEmployee/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/client/:id" element={<SingleClient/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/account/:id" element={<SingleAccount/>} />
        <Route path="/stocks" element={<Stocks/>} />
        <Route path="/newStock" element={<NewStock/>} />

      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
