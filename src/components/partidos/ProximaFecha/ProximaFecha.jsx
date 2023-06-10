import React from 'react'
import './styles/ProximaFecha.css'

const ProximaFecha = () => {
  return (
    <article className='container_proximaFecha'>

        <div className="container_nav">
          <h5 className="h5_fecha">Proximo partido | Fecha 7 </h5>
          {/* <h5>hora</h5> */}
          <h5 className="fecha">10/06/2023</h5>
        </div>

        <div className="container_body">
          
          <div className="container_equipo1">
            <h5 className="ss">Sultanes F G.</h5>
            {/* <h5 className="ganado">4</h5> */}
          </div>
          <div>
            <h5 className='ss'>V</h5>
          </div>
          <div className="container_equipo1">
            <h5 className="ss">Sampdoria  Becerril</h5>
            {/* <h5>1</h5> */}
          </div>
  
        </div>

        <div className='container_footer_proximaFecha'>
            <h5 className='h5_footer'>Estadio Panama - valledupar</h5>
        </div>

    </article>
  )
}

export default ProximaFecha