import React, { useState } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [men, setMen] = useState(false);

  const toggleMenu = () => {
    setMen(!men);
  };

  const close = () => {
    setMen(!men);
  };

  return (
    <div className="nav">

      <div className="nav_div">
        <img src="./image/sampdoriaLogojpg.jpg" alt="" />
      </div>

      <div className="nav_icon">

        <button onClick={toggleMenu} className={ `menuH ${ men ? 'active' : ''}`}>
          <i className=" bx bx-menu"></i>
        </button>

        <div className={`nav_link ${ men ? 'active' : ''}`}>

          <Link onClick={close} className={`navbar_link ${men ? 'active' : ''}`} to="/">
            <h3>Inicio</h3>
            <i className='arrow bx bx-chevron-right' ></i>
          </Link>

          <Link onClick={close} className={`navbar_link ${men ? 'active' : ''}`} to="/jugadores">
            <h3>Jugadores</h3>
            <i className='arrow bx bx-chevron-right' ></i>
          </Link>

          <Link onClick={close} className={`navbar_link ${men ? 'active' : ''}`} to="/partidos">
            <h3>Partidos</h3>
            <i className='arrow bx bx-chevron-right' ></i>
          </Link>

          <div onClick={close} className='cerrar'> 
            <i className='bx bx-x'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
