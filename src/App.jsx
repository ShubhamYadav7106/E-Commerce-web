// import React from 'react'

import { BrowserRouter as Router, Route,  Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import NoPage from "./pages/noPage/NoPage"
import ProductInfo from "./pages/productInfo/ProductInfo"
import CartPage from "./pages/cart/CartPage"
import AllProduct from "./pages/allproducts/AllProduct"
import ScrollTop from "./components/scrollTop/ScrollTop"
import Signup from "./pages/ragistration/Signup"
import Login from "./pages/ragistration/Login"
import UserDashboard from "./pages/user/UserDashboard"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AddProductPage from "./pages/admin/AddProductPage"
import UpdateProductPage from "./pages/admin/UpdateProductPage"


function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/*" element={<NoPage/>}/>
          <Route path="/productInfo" element={<ProductInfo/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/add-product" element={<AddProductPage/>}/>
          <Route path="/update-product" element={<UpdateProductPage/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App