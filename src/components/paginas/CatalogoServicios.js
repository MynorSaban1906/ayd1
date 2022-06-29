import React, { useEffect } from 'react'
import CardServicio from '../element/CardServicio'
import CardServicioAuto from '../element/CardServicioAuto'
import CardServicioVuelo from '../element/CardServicioVuelo'


function CatalogoServicios(props) {
  const {serv, menu} = props;

  function getCard (type, data) {
    var apiURL = {
      'Vuelos': <CardServicioVuelo  propiedades={data}/> ,
      'Vehiculo':  <CardServicioAuto  propiedades={data}/>,
      'default':  <CardServicio  propiedades={data}/>
    };
    return (apiURL[type] || apiURL['default']);
  }
  
  return (
    <div className='catalogo-service'>
      {serv.map((index)=>{
                    return(
                       getCard(menu, index)  
                   )
            })}  
        
        
    </div>
  )
}

export default CatalogoServicios