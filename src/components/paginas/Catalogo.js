import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Filtros from '../element/Filtros'
import SubMenu from '../element/SubMenu'
import CatalogoServicios from './CatalogoServicios';




function Catalogo() {
    const [menuElement, setMenuElement] = useState('Vehiculo');
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
      axios.get(getDatos(menuElement),{
      }).then((res)=>{  
        setServiceData(res.data.data);
      }).catch((err) => {
          setServiceData([])
      }); 
      
    }, [menuElement]);

    function getDatos (type) {
      var apiURL = {
        'Vuelos': `http://34.125.201.105:4000/v1/fullTrip/ReadVuelo`,
        'Vehiculo': `http://34.125.201.105:4000/v1/fullTrip/ReadAutomovil`,
        'default': `http://34.125.201.105:4000/v1/fullTrip/ReadHabitacion`
      };
      return (apiURL[type] || apiURL['default']);
    }

   

  return (
    <>
        <SubMenu setMenu={setMenuElement} />
        <div className="container">
            <button className='filtro-title'>Aplicar Filtros:</button>
            <Filtros menu={menuElement}/>
            <CatalogoServicios menu={menuElement} serv={serviceData}/>
        </div>
    </>
  )
}

export default Catalogo