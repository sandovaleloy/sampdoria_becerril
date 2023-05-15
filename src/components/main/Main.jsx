import React from "react";
import "./style/Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="main_section">
        <div className="main_div1">
          <img className="iiii" src="./image/clasico.jpg" alt="" />
        </div>
        <div className="main_div2">
          <h3>Torneo Primera C</h3>
          <p className="parra">
            Dicho torneo en el que la sampdoria de becerril esta debutando,
            tendra que enfrentarse en un todo contra todos con los equipos de su
            grupo
          </p>
        </div>
          <div className="main_fondo"></div>
        <p className="p"></p>
      </section>

      <article className="aside">
        <div className="aside_1">
          <div className="aside_img1">
            <img src="./image/entreno.jpg" alt="" />
          </div>
          <div className="p">
            <p>
              plantilla sampdoria en sus entrenamientos y preparacion fisica
            </p>
          </div>
        </div>
        <div className="aside_1">
          <div className="aside_img1">
            <img src="./image/entreno3.jpg" alt="" />
          </div>
          <div className="p">
            <p>entrenamiento, coordinacion y fuerza</p>
          </div>
        </div>
        <div className="aside_1">
          <div className="aside_img1">
            <img src="./image/entreno2.jpg" alt="" />
          </div>
          <div className="p">
            <p>
              gracias asu disciplina, veran los frutos de su esfuerzo y
              constancia
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
