import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`E-posta: ${formValues.email}\nParola: ${formValues.password}'`);
  };

  return (
    <>
      <p className="title">Login Form</p>
      <form className="App" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="example@example.com"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="******"
          value={formValues.password}
          onChange={handleChange}
          required/>
        <div className="redirect-group">
          <Link className="link">Forgot Password</Link>
          <Link className="link" to={"/register"}>
            Sign Up
          </Link>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
