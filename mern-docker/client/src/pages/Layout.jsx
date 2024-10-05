/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Layout = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const navigate = useNavigate();

  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      setUser({
        name: null,
        posts: [],
      });

      localStorage.removeItem("name");
      localStorage.removeItem("webToken");

      navigate("/");
    }
  };

  return (
    <>
      <header className="bg-indigo-500 text-white">
        <nav className="flex items-center justify-between p-4">
          <Link
            title="Home"
            to="/"
            className="fa-solid fa-house-chimney nav-link"
          ></Link>

          {user.name ? (
            <div className="flex items-center gap-2">
              <Link
                title="Dashboard"
                to="/dashboard"
                className="fa-solid fa-user nav-link"
              ></Link>
              <button
                title="Log out"
                onClick={handleLogOut}
                className="fa-solid fa-right-from-bracket nav-link"
              ></button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                title="Log in"
                to="/login"
                className="fa-solid fa-right-to-bracket nav-link"
              ></Link>
              <Link
                title="Register"
                to="/register"
                className="fa-solid fa-registered nav-link"
              ></Link>
            </div>
          )}
        </nav>
      </header>

      <main className="p-4 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
