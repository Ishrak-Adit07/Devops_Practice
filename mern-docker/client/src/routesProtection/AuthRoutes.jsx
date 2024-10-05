/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const AuthRoutes = () => {
  const { user } = useContext(UserContext);
  return user.name ? <Outlet /> : <Navigate to="login" />;
};

export default AuthRoutes;
