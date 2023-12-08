import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import Login from "../pages/Login/Login"
import SignUp from "../pages/Signup/SignUp"
import CheckOut from "../pages/CheckOut/CheckOut"
import ProductList from "../pages/Product/ProductLists"
import ProductDetails from "../pages/Product/ProductDetails"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<CheckOut/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<SignUp/>} />  
    </Routes>
  )
}

export default Routers