import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import { BrowserRouter } from 'react-router-dom';

function UserRoutes() {
  return (
   <BrowserRouter basename='/Coupon'>
    <Routes>
        <Route path="/" element={<Home/>}> </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default UserRoutes