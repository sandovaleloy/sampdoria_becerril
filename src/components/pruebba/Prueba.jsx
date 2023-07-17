import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import "./style/Prueba.css";

const Prueba = () => {
  function RegisterForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para enviar el formulario
    };

    return (
      <React.Fragment>
        <form className="container_form" onSubmit={handleSubmit}>
          <h3>Register with us</h3>
          <div className="section_email">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="section_password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="contraseña" />
          </div>
          <button className="btn" type="submit" id="submit-btn">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }

  const Page1 = () => {
    return <RegisterForm />;
  };
  const Page2 = () => {
    return <h2 className="page2">¡Login Successfully!</h2>;
  };

  return (
    <div className="container">
      <div className="container_principal">
        <h4> my app</h4>
        <nav className="nav">
          <Link className="link" to="/ss">
            page1
          </Link>
          <Link className="link" to="/home">
            page2
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/ss" element={<Page1 />} />
        <Route path="/home" element={<Page2 />} />
      </Routes>

      <div className="footer"></div>
    </div>
  );
};

export default Prueba;
