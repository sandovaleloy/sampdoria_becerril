import React from "react";
import "./styles/Partidos.css";
import ProximaFecha from "./ProximaFecha/ProximaFecha";

const Partidos = () => {
  return (
    <article className="partidos">

      <ProximaFecha/>
      
      <div className="con">
        <div className="aaa">
          <h5 className="fe">Fecha 3</h5>
          <h5 className="fe1">05/13/2023</h5>
        </div>
        {/* <hr className="hr" /> */}

        <div className="equ">
          
          <div className="sss">
            <h5 className="ganado">Napoles</h5>
            <h5 className="ganado">4</h5>
          </div>
          
          <div className="sss">
            <h5 className="perdidos">Sampdoria Becerril</h5>
            <h5>1</h5>
          </div>
  
        </div>
        {/* <hr className="hr" /> */}

        <div className="aaa">
          <h5 className="fe">Fecha 2</h5>
          {/* <h5 className="fe1">--/--/----</h5> */}
        </div>
        {/* <hr className="hr" /> */}

        <div className="equ">
          
          <div className="sss">
            <h5 className="empatados">Sampdoria Becerril</h5>
            <h5>0</h5>
          </div>
          
          <div className="sss">
            <h5 className="empatados">FC Internacional</h5>
            <h5>0</h5>
          </div>
  
        </div>
        
        {/* <hr className="hr" /> */}
        <div className="aaa">
          <h5 className="fe">Fecha 1</h5>
          {/* <h5 className="fe1">--/--/----</h5> */}
        </div>
        {/* <hr className="hr" /> */}

        <div className="equ">
          
          <div className="sss">
            <h5 className="perdidos">Los Embajadores Del Banco</h5>
            <h5>0</h5>
          </div>
          
          <div className="sss">
            <h5 className="ganado">Sampdoria Becerril</h5>
            <h5 className="ganado">1</h5>
          </div>
  
        </div>
        
      </div>

      
      {/* <div>
        <h4 className="partidos_h4">Tabla De Posiciones</h4>
        <div className="partidos_div">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn4mavt4qlJu9ouV7MS4lmnUgT53jxvb7VGPDxzMJB_H-be3GqGCI5dnJisYasUxLGVUY23xtUPODcDA6hCGXphWQg_q4lwpbkENvtL-_B6iIMC04mbAQASNROGvRv_nH8WpyKRPK3rVW7aIZoAB4rslhqPP_5ejMdr6UMITeQDEAHa03RMekHMP5f-A/s1076/tabla.PNG" alt="" />
        </div>
      </div> */}
    </article>
  );
};

export default Partidos;
