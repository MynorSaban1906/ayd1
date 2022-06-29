import React from 'react';
import App from '../App';

import {
    BrowserRouter ,
    Routes,
    Route
} from "react-router-dom";
import RegistrarTurista from '../components/paginas/FormRegistro';
import RegistrarServicioTercerizado from '../components/paginas/FormRegistroSer'
import ComponenteTabla2 from '../components/paginas/Tabla2';
import ModuloTurista from '../components/paginas/ModuloTurista';
import Reservar from '../components/paginas/Reservar';
import MisServiciosHotel from '../components/paginas/MisServicios';
import MisServiciosAgencia from '../components/paginas/MisServiciosA';
import MisServiciosAerolinea from '../components/paginas/MisServiciosV';
import HabilitarServicios from '../components/paginas/HabilitarServicios';
import SolicitudServicios from '../components/paginas/SolicitudServicios';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/registroTurista" element={<RegistrarTurista />}/>
                <Route path="/registroServicioTercerizado" element={<RegistrarServicioTercerizado/>}/>
                <Route path='/controlServicio' element={<HabilitarServicios/>}/>
                <Route path='/solicitudServicio' element={<SolicitudServicios/>}/>                
                <Route path='/moduloTurista' element={<ModuloTurista/>}/>
                <Route path='/misServiciosHotel' element={<MisServiciosHotel/>}/>
                <Route path='/misServiciosAgencia' element={<MisServiciosAgencia/>}/>
                <Route path='/misServiciosAerolinea' element={<MisServiciosAerolinea/>}/>
                <Route path='/reservarServicios' element={<Reservar/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas