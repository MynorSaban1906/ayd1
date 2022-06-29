import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import IconButton from '@mui/material/IconButton';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function SubMenu(props) {
  return (
    <div className='subMenu'>
        <div onClick={()=>props.setMenu('Vehiculo')}>
            <IconButton aria-label="vehiculo" size='large'>
                <DirectionsCarIcon sx={{ fontSize: 60 }}/>
            </IconButton>
            <p>Vehiculos</p>
        </div>
        <div  onClick={()=>props.setMenu('Hospedaje')}>
            <IconButton aria-label="apartment" size='large'>
                <ApartmentIcon sx={{ fontSize: 60 }}/>
            </IconButton>
            <p>Hoteles</p>
        </div>
        <div  onClick={()=>props.setMenu('Vuelos')}>
            <IconButton aria-label="airport" size='large'>
                <AirplaneTicketIcon sx={{ fontSize: 60 }}/>
            </IconButton>
            <p>Vuelos</p>
        </div>
        <div>
            <IconButton aria-label="recomendation" size='large'>
                <StarIcon sx={{ fontSize: 60 }}/>
            </IconButton>
            <p>Recomendaciones</p>
        </div>
        <div>
            <IconButton aria-label="oferta" size='large'>
                <LocalOfferIcon sx={{ fontSize: 60 }}/>
            </IconButton>
            <p>Ofertas</p>
        </div>
    </div>
  )
}

export default SubMenu