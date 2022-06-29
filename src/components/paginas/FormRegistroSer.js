import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import KeyIcon from '@mui/icons-material/Key';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


export default function RegistrarServicioTercerizado() {

    const [nombreState, setNombreState] = useState("")
    const [correoState, setCorreoState] = useState("")
    const [contraState, setContraState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")
    const [ciudads, setciudad] = useState("")
    const [ciudadesState, setCiudadesState] = useState([])

    const [age, setAge] = React.useState('');
    const navigate = useNavigate();

    // const data = [];

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeCiudad = (event) => {
        setciudad(event.target.value);
    };

    const Regresar = () => {
        navigate('/')
      }

    async function obtenerCiudades() {
        let result = await axios.get("http://34.125.201.105:4000/v1/fullTrip/ViewCity", {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data.Ciudades)

            setCiudadesState(res.data.Ciudades)
            // data=res.data.datas
            // return res.data.data
        }).catch((err) => {
            setCiudadesState([])
            // console.log(err.data)
        });
    }
    useEffect(() => {
        obtenerCiudades()
    }, []);

    async function RegistrarServicio() {

        console.log("nombre: " + nombreState)
        console.log("correo: " + correoState)
        console.log("ciudad: " + ciudads)
        console.log("contra: " + contraState)
        console.log("conficontra: " + confiContraState)
        console.log("tipo: " + age)

        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://34.125.201.105:4000/v1/fullTrip/registrarServicio", {
                nombre: nombreState,
                correo: correoState,
                password: contraState,
                ciudad: ciudads,
                estado: age,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err.data)
            });

        // try {
        //     let result = await 
        // } catch (error) {
        //     console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
        // }



    }

    return (
        <div className="login-content">
            <div className="login-components">
                <div className="img-login">
                    <img id="watches" src="https://res.cloudinary.com/alex4191/image/upload/v1656096732/FullTrip/tipos-de-viajeros_dmthnw.jpg" />
                </div>
                <div className="data-login">
                    <img id="logo" src="https://res.cloudinary.com/alex4191/image/upload/v1655242087/FullTrip/FullTripLogo.png" alt="fullTrip-logo" />

                    <Box style={{ textAlign: 'center', position: 'absolute', top: '10%', left: '50%' }}>
                        <Button class="btn-primario" variant="contained" onClick={Regresar}>Regresar</Button>
                    </Box>

                    <Box sx={{ '& > :not(style)': { m: 1, width: '70ch', marginY: 1 }, }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Selecciona tu tipo de servicio:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Selecciona tu tipo de servicio:"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Hotel</MenuItem>
                                <MenuItem value={2}>Agencia Renta Auto</MenuItem>
                                <MenuItem value={3}>Aerolinea</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="input-with-icon-textfield"
                            label="Ingresa Nombre de tu Servicio:"
                            placeholder="Avianca"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            onChange={event => setNombreState(event.target.value)}
                        />
                    </Box>


                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Selecciona tu ciudad:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ciudads}
                                label="Selecciona tu tipo ciudad:"
                                onChange={handleChangeCiudad}
                            >
                                {
                                    ciudadesState.map((city) => {
                                        return (
                                            <MenuItem value={city.IdCiudad}>{city.Ciudad}, {city.Pais} </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="input-with-icon-textfield"
                            label="Ingresa tu Correo Electronico:"
                            placeholder="fulltrip@gmail.com"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            onChange={event => setCorreoState(event.target.value)}
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="input-with-icon-textfield"
                            label="Ingresa tu Contraseña:"
                            placeholder="********"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyIcon />
                                    </InputAdornment>
                                ),
                            }}
                            type="password"
                            variant="standard"
                            onChange={event => setContraState(event.target.value)}
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="input-with-icon-textfield"
                            type="password"
                            label="Ingresa tu Confirmacion de Contraseña:"
                            placeholder="********"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            onChange={event => setConfiContraState(event.target.value)}
                        />
                    </Box>
                    <Box style={{ textAlign: 'center', position: 'absolute', top: '80%', left: '65%' }}>
                        <Button class="btn-primario" variant="contained" onClick={RegistrarServicio}>Registrarse!</Button>
                    </Box>
                </div>
            </div>
        </div>


    )
}

