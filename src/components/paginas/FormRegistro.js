import React, { useState } from 'react'
import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from 'react-router-dom';

export default function RegistrarTurista() {

    const [nombreState, setNombreState] = useState("")
    const [apellidoState, setApellidoState] = useState("")
    const [correoState, setCorreoState] = useState("")
    const [fechaState, setFechaState] = useState("")
    const [contraState, setContraState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")
    const navigate = useNavigate();

    const Regresar = () => {
        navigate('/')
      }

    const Registrar = () => {

        console.log("nombre: " + nombreState)
        console.log("apellido: " + apellidoState)
        console.log("correo: " + correoState)
        console.log("fecha: " + fechaState)
        console.log("contra: " + contraState)
        console.log("conficontra: " + confiContraState)

        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };


        axios.post("http://34.125.201.105:4000/v1/fullTrip/register/services", {
            Name: nombreState + ' ' + apellidoState,
            Date: fechaState,
            Email: correoState,
            Password: contraState,
            TypeUser: 1,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
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
                            name='TFNombre'
                            label="Ingresa tu Nombre:"
                            placeholder="Emma"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            onChange={event => setNombreState(event.target.value)}
                        // ref={inputNombre}
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
                            label="Ingresa tu Apellido:"
                            name='TFApellido'
                            placeholder="Stone"
                            // value={apellidoState}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            onChange={event => setApellidoState(event.target.value)}
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
                            label="Ingresa tu Correo Electronico:"
                            placeholder="fulltrip@gmail.com"
                            name='TFCorreo'
                            // value={correoState}
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
                                // label="Ingrese Fecha:"
                                type="datetime-local" id="meeting-time"
                                placeholder='2018-06-12T19:30'
                                // name="meeting-time" 
                                // value=""
                                // min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaState(event.target.value)}
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
                            name='TFContra'
                            placeholder="********"
                            // value={contraState}
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
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="input-with-icon-textfield"
                            type="password"
                            name='TFConfiContra'
                            label="Ingresa tu Confirmacion de Contraseña:"
                            // value={confiContraState}
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
                    <Box>
                        <Button class="btn-primario" variant="contained" onClick={Registrar}>Registrarse!</Button>
                    </Box>
                </div>
            </div>
        </div>

    )
}

