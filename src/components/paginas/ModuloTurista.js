/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ModuloTurista(props) {
    const navigate = useNavigate(); 
    const cookie = Cookies.get("fullTrip_id");
    const [nombreState, setNombreState] = useState("")
    const [apellidoState, setApellidoState] = useState("")
    const [correoState, setCorreoState] = useState("")
    const [fechaState, setFechaState] = useState("")
    const [contraState, setContraState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")


    const [activo, setActivo] = useState(false);

    useEffect(() => {
        async function start() {
            DatosI();
        }
        start();

    }, []);

    const Modificar = () => {
        // document.getElementById("NombreTurista").disabled = false;
        setActivo(true);
    }

    const DatosI = () => {
        axios.post("http://34.125.201.105:4000/v1/fullTrip/ViewProfile", {
            IdUsuario: cookie
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
          }
        ).then((res)=>{
            let data = res.data;
            setNombreState(res.data.Nombre);
            setFechaState(res.data.FechaNacimiento);
            setCorreoState(res.data.Correo);
            setContraState("123456");
            setConfiContraState("123456");

        }).catch((err)=>{
           console.log(err)})
    }

    const regresar = () => {
        let path = `/`; 
        navigate(path);
    }  

    const Aceptar = () => {
        if(confiContraState === contraState){
            setActivo(false);
            axios.put("http://34.125.201.105:4000/v1/fullTrip/EditProfile", {
            Name: nombreState+' '+apellidoState,
            Nacimiento: fechaState,
            Correo: correoState,
            Pass: contraState,
            IdUsuario: cookie ,}, {
                headers: {
                'Content-Type': 'application/json'
                }
              }
            ).then((res)=>{
                Swal.fire(
                    `Modificacion correcta!`,
                    `success`
                )
                console.log(res); 
             }).catch((err)=>{
               console.log(err)})
        }else{
            Swal.fire(
                `Modificacino Incorrecta!`,
                `Error las contraseñas no coinciden!`,
                `warning`
             )  
        }
    }

    return (
        <div className="login-content">
            <div className="login-components">
                <Box style={{ textAlign: 'center', position: 'absolute', top: '10%', left: '15%' }}>
                    <Button class="btn-primario" variant="contained" onClick={regresar} >
                        <ArrowBackIcon />
                    </Button>
                </Box>
                <div className="img-login">
                    {/* <img id="watches" src="https://res.cloudinary.com/alex4191/image/upload/v1656096732/FullTrip/tipos-de-viajeros_dmthnw.jpg"/> */}
                </div>
                <div className="data-login" style={{ textAlign: 'center', position: 'absolute', top: '15%', left: '35%' }}>
                    <h1>MI CUENTA</h1>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70ch', marginY: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="NombreTurista"
                            disabled={!activo}
                            name='TFNombre'
                            label="Ingresa tu Nombre:"
                            placeholder="Emma"
                            value={nombreState}
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
                            id="ApellidoTurista"
                            disabled={!activo}
                            label="Ingresa tu Apellido:"
                            name='TFApellido'
                            placeholder="Stone"
                            defaultValue="Martinez"
                            value={apellidoState}
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
                            id="CorreoTurista"
                            disabled={!activo}
                            label="Ingresa tu Correo Electronico:"
                            placeholder="fulltrip@gmail.com"
                            name='TFCorreo'
                            defaultValue="badbunnyyeahyeah@gmail.com"
                            value={correoState}
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
                            id="FechaTurista"
                            disabled={!activo}
                            label="Ingresa tu Fecha de Nacimiento:"
                            name='TFFecha'
                            defaultValue="15/03/1994"
                            value={fechaState}
                            placeholder="28/07/1998"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonthIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
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
                            id="ContraTurista"
                            disabled={!activo}
                            label="Ingresa tu Contraseña:"
                            name='TFContra'
                            defaultValue="123456"
                            placeholder="********"
                            value={contraState}
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
                            id="ConfirTurista"
                            disabled={!activo}
                            type="password"
                            name='TFConfiContra'
                            defaultValue="123456"
                            label="Ingresa tu Confirmacion de Contraseña:"
                            value={confiContraState}
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
                    <div>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '110%', left: '35%' }}>
                            <Button class="btn-primario" variant="contained" disabled={!activo} onClick={Aceptar}>Aceptar!</Button>
                        </Box>
                        <Box style={{ textAlign: 'center', position: 'absolute', top: '130%', left: '35%' }}>
                            <Button class="btn-primario" variant="contained" onClick={Modificar}>Modificar!</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>

    )
}

