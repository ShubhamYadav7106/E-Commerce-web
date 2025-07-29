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
import MyState from "./context/MyState"
import Loader from "./components/loader/Loader"

// import Loaderr from "./components/loader/Loaderr.jsx"
import { Toaster } from "react-hot-toast"
import ProtectedRouteForUser from "./protectedRoute/ProtectedRouteForUser"
import ProtectedRouteForAdmin from "./protectedRoute/ProtectedRouteForAdmin.jsx"


function App() {
  return (
    <MyState>
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
          
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard/>
            </ProtectedRouteForUser>
          }/>
          <Route path="/admin-dashboard" element={
           <ProtectedRouteForAdmin>
            <AdminDashboard/>
           </ProtectedRouteForAdmin>
          }/>
          <Route path="/addproduct" element={
             <ProtectedRouteForAdmin>
              <AddProductPage/>
             </ProtectedRouteForAdmin>
          }/>
          {/* <Route path="/update-product" element={
             <ProtectedRouteForAdmin>
              <UpdateProductPage/>
             </ProtectedRouteForAdmin>
          }/> */}
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
       
      <Toaster/>
      </Router>
      
    </MyState>
  )
}

export default App