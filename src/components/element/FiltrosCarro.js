import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function FiltrosCarro() {

  const [marca, setMarca] = React.useState('');
  const [modelo, setModelo] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  const handleMarca = (event) => {
    setMarca(event.target.value);
  };
  const handleModelo = (event)=>{
    setModelo(event.target.value);
  }
  const handlePrecio = (event)=>{
    setPrecio(event.target.value);
  }

  return (
    <Box className='form-filter'>
      <FormControl className='form-control' >
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={marca}
          label="marca"
          onChange={handleMarca}
        >
          <MenuItem value={"Toyota"}>Toyota</MenuItem>
         
        </Select>
        
      </FormControl>
      <FormControl className='form-control'>
      <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
        <Select className='form-select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={modelo}
          label="modelo"
          onChange={handleModelo}
        >
          <MenuItem value={2009}>2009</MenuItem>
         
        </Select>
      </FormControl>
      <FormControl className='form-control' >
        <InputLabel id="demo-simple-select-label">Precio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={precio}
          label="precio"
          onChange={handlePrecio}
        >
          <MenuItem value={1}>Mayor a 2000</MenuItem>
          <MenuItem value={2}>Menor a 20000</MenuItem>
          <MenuItem value={3}>Todos</MenuItem>
         
        </Select>
        
      </FormControl>
    </Box>
    
  )
}

export default FiltrosCarro