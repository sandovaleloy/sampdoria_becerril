import React from "react";
import "./style/Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="main_section">
        <div className="main_div1">
          <img className="iiii" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrYgx22Mwhwnk6Sv1ntQH_1AzP-iNAzwwOCvVnvDGQmxKpm2n2CkGL2ejaHvE0Mk96YApQAHnMVtGNBFGvBxQDxlmiqaZHNxGMm5MuchNV4ql8B_t80cz62GiZniL-AVaua-fGmTV5_eMbjaY-IslH5itRWHhfe-B4MQm9t_G8Bf_gAPTpnsBnKSQ1gg/s1024/sampdoria.jpeg" alt="" />
        </div>
        <div className="main_div2">
          <h3>Torneo Primera C</h3>
          <p className="parra">
            Torneo en el que la sampdoria de becerril esta debutando,
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
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHbvA93uvGqAVkhFi3y_wZpiYFfgpOuWfUZKS_ktWy9QVf7J-zMDjzAcDSZ4BuacPbU_tmQxEIaMJ1BZwqnkshKcyVWmDlzd_BmCPphCu1apyYDUr0rmGn3wrf4UU2vE2M7bIfqSDC-bCZ--WghMFRGhl78Eo-fTV8QRt6HoZ_enPASxMFxI54IXxoMA/s1600/salida.jpeg" alt="" />
          </div>
          <div className="p">
            <p>
              Salida al campo de juego
            </p>
          </div>
        </div>
        <div className="aside_1">
          <div className="aside_img1">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhr34xqMhzQa7u0jxEzTBiawp18MEYxjxUnArk9rIE5UX5XQ4WJWWUV9hRnq1y7CLJ-Q5_u5TbJfdIerjhD2WmMA8eiQkV-DTJWvcoPD3rh4lRXGGsePO-WD38qSeNwMK30dpRAVqBRQ77Yo-RllLcE1uXL_h355pTnL2h66Und5DUquLMm7rSBK_KLPw/s1024/calentamientoPrevio.jpeg" alt="" />
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
              gracias a su disciplina, veran los frutos de su esfuerzo y
              constancia
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
