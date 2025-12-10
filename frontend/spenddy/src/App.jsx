import React from 'react'
import { Route, Routes } from 'react-router'
// Auth Pages
// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";

// // Dashboard Pages
// import Home from "./pages/Dashboard/Home";
// import Expense from "./pages/Dashboard/Expense";
// import Income from "./pages/Dashboard/Income";
import HomeNavbar from './components/Navbar';

function App() {
  return (
    <>
    <HomeNavbar />
        {/* <Routes> */}
        {/* Auth */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}

        {/* Dashboard */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/expense" element={<Expense />} /> */}
        {/* <Route path="/income" element={<Income />} /> */}

      {/* </Routes> */}
    </>
  )
}

export default App