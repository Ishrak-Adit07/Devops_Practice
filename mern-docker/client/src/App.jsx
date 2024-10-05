/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/posts/Home";
import AuthRoutes from "./routesProtection/AuthRoutes";
import Dashboard from "./pages/users/Dashboard";
import GuestRoutes from "./routesProtection/GuestRoutes";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route element={<AuthRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<GuestRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
