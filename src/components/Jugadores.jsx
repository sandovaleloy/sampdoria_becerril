import React from "react";
import "./styles/Jugadores.css";

const urlImg =
  "https://previews.123rf.com/images/juliarstudio/juliarstudio1602/juliarstudio160200163/51456955-jugador-de-f%C3%BAtbol-simple-icono-negro-aislado-en-el-fondo-blanco.jpg";

const Jugadores = () => {
  return (
    <article className="ju">
      <div className="image_jugadores">
        <img src="./image/equipo.jpg" alt="" />
      </div>

      <h2>Porteros</h2>
      <section className="porteros">
        <div className="playingPortero">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">YEIDER OVED MACHADO LOPEZ</h5>
          <h5># 1</h5>
        </div>
      </section>

      <h2>Defensas</h2>
      <section className="defensa">
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">JOORDIN PASTRANA BELEÑO</h5>
          <h5># 16</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">YASSER ENRIQUE BOLAÑO NAVARRO</h5>
          <h5># 13</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">HUGO OSORIO</h5>
          <h5>#</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">cachi</h5>
          <h5>#</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">PEDRO LUIS ORTIZ MUÑOZ</h5>
          <h5># 8</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">JONATAN ENRIQUE CAMARGO SANCHEZ</h5>
          <h5># 15</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">RODRIGO ALFONSO OCHOA TONCEL</h5>
          <h5># 17</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">GABRIEL ARMANDO RUBIO ARAUJO</h5>
          <h5># 7</h5>
        </div>
        <div className="playingDefensas">
          <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">KEIDER ANDRES PIÑEREZ</h5>
          <h5># 5</h5>
        </div>
      </section>

      <h2>Volantes</h2>
      <section className="volantes">
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">ISACC DAVID MACHADO RIVERA</h5>
          <h5># 2</h5>
        </div>
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">KEIMIS PASCUAL FONSECA POLO</h5>
          <h5># 6</h5>
        </div>
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">tasiel</h5>
          <h5>#</h5>
        </div>
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">peluca</h5>
          <h5>#</h5>
        </div>
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">SERGIO MANEL ORTIZ MUÑOZ</h5>
          <h5># 11</h5>
        </div>
        <div className="playingVolantes">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">coyonco</h5>
          <h5>#</h5>
        </div>
      </section>

      <h2>Delanteros</h2>
      <section className="delanteros">
        <div className="playingDelanteros">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">JAIRO ANDRES CADENA CAMACHO</h5>
          <h5># 9</h5>
        </div>
        <div className="playingDelanteros">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">JESUS DAVID ORTIZ GONZALEZ</h5>
          <h5># 4</h5>
        </div>
        <div className="playingDelanteros">
        <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">WILGEN GUERRERO RESTREPO</h5>
          <h5># 14</h5>
        </div>
        <div className="playingDelanteros">
                    <div className="image_jugadoresG">
            <img src={urlImg} alt="" />
          </div>
          <h5 className="h5">ENEGREDIN RIVERA CENTENO</h5>
          <h5># 3</h5>
        </div>
      </section>

    </article>
  );
};

export default Jugadores;
