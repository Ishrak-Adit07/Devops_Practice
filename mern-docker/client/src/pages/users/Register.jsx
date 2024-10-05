/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { registerUser } from "../../controllers/user.controllers";
import Alert from "../../messages/Alert";

const Register = () => {
  //UserContext
  const { setUser } = useContext(UserContext);

  //Use Navigate
  const navigate = useNavigate();

  //Error state
  const [error, setError] = useState(null);

  //Form data states
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  //Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const registerResponseData = await registerUser(
        formData.name,
        formData.password,
        formData.confirmPassword
      );

      if (registerResponseData) {
        setUser({
          name: formData.name,
          posts: [],
        });

        navigate("/dashboard");

        setError(null);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="card">
      <h1 className="title">Create new account</h1>

      <form
        onSubmit={handleRegister}
        className="justify-center items-center h-screen"
      >
        <input
          type="name"
          placeholder="Name"
          className="input"
          autoFocus
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
        />

        <button type="submit" className="btn">
          Register
        </button>

        <div className="my-4">{error && <Alert msg={error} />}</div>
      </form>
    </section>
  );
};

export default Register;
