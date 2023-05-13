import React from "react";
import "./styles/Partidos.css";

const Partidos = () => {
  return (
    <article className="partidos">
      <div className="partidos_divPadre">
        <h4 className="partidos_h4">Primera fecha</h4>
        <div className="partidos_div">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSd9wA1zTic17zYSKAvGFdwEzky3QogCWzkIX1sPnfWzmG1aw3wTLfW8F2cxmTBTgHiLFlqOb9nhfR2SKANb3jQpn_gvgiWekOolciVKPrXwrrKUgkmpVkmwuIoVF0D8KKPtD0kbYt3haNGY2jObSP-43BY1ZOnmfV66SGOrdl-SnCG-HerT5TbDWOCA/s925/primera_fecha.PNG"
            alt=""
          />
        </div>
      </div>
      <div className="partidos_divPadre">
        <h4 className="partidos_h4">Segunda fecha</h4>
        <div className="partidos_div">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipCujR9yK7MNNp8TVFMtaDP-zTv_SG_bFdaw7A7rI_oKCQ0N3xNkPfFho-JeUHxpxxFAz4L9KPWGxUI794wIiR4rH38YXuoDbHLIZa5vCI9SK0wZsZ-Am01NcRN2i1LPI4otvhGiKnNuwuMsz14Tkg2zgSILf1QLVFc-IC7pmlvN59Ln0N-Ix48T37Aw/s913/segunda_fecha.PNG"
            alt=""
          />
        </div>
      </div>
      <div>
        <h4 className="partidos_h4">Tabla De Posiciones</h4>
        <div className="partidos_div">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn4mavt4qlJu9ouV7MS4lmnUgT53jxvb7VGPDxzMJB_H-be3GqGCI5dnJisYasUxLGVUY23xtUPODcDA6hCGXphWQg_q4lwpbkENvtL-_B6iIMC04mbAQASNROGvRv_nH8WpyKRPK3rVW7aIZoAB4rslhqPP_5ejMdr6UMITeQDEAHa03RMekHMP5f-A/s1076/tabla.PNG" alt="" />
        </div>
      </div>
    </article>
  );
};

export default Partidos;
