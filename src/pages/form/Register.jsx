import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Register() {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    birthday: "",
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
    alert(
      `Name: ${formValues.name}\nSurname: ${formValues.surname}\nDate: ${formValues.birthday}\nEmail: ${formValues.email}\nPassword: ${formValues.password}`
    );
  };

  return (
    <>
      <p className="title">Register Form</p>
      <form className="App" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="text"
          name="surname"
          placeholder="surname"
          value={formValues.surname}
          onChange={handleChange}
          required
        />
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
          required
        />
        <Link style={{ textAlign: "right", padding: 15, paddingTop: 10, paddingBottom: 10 }} className="link" to={"/login"}>
          Log In
        </Link>
        <button type="submit">Submit</button>
        
      </form>
        <div className="icon-group">
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
    </>
  );
}

export default Register;
