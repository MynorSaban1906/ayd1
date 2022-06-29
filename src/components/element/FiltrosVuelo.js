import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function FiltrosVuelo() {

  const [destino, setDestino] = React.useState('');
  const [precio, setPrecio] = React.useState('');

  const handleDestino = (event) => {
    setDestino(event.target.value);
  };
  const handlePrecio = (event)=>{
    setPrecio(event.target.value);
  }

  return (
    <Box className='form-filter'>
      <FormControl className='form-control'>
      <InputLabel id="demo-simple-select-label">Destino</InputLabel>
        <Select className='form-select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destino}
          label="destino"
          onChange={handleDestino}
        >
          <MenuItem value={'Miami'}>Miami Florida</MenuItem>
         
         
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

export default FiltrosVuelo