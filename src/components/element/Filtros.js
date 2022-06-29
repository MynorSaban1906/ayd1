import * as React from 'react';
import FiltrosCarro from './FiltrosCarro';
import FiltrosHospedaje from './FiltrosHospedaje';
import FiltrosVuelo from './FiltrosVuelo';

export default function Filtros(props) {
 const menuActual = props.menu;

 if(menuActual==='Vuelos'){
   return <FiltrosVuelo/>

 }else if(menuActual==='Hospedaje'){
   return <FiltrosHospedaje/>

 }else{
    return <FiltrosCarro/>;
 }

 
  
}