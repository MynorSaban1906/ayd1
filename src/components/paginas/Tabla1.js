import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import informacion from '../data_prueba/info.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}></Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

function createData(nombre, fecha) {
    return { nombre, fecha };
}

//                                     props
export default function ComponenteTabla() {
    const [filas, setFilas] = useState([]);
    const [ciudadesState, setCiudadesState] = useState([])

    const [titulo, setTitulo] = useState("")
    const [direccion, setDireccion] = useState("")
    const [correo, setCorreo] = useState("")
    const [tipo, setTipo] = useState("")

    const [titulo1, setTitulo1] = useState("")
    const [direccion1, setDireccion1] = useState("")
    const [correo1, setCorreo1] = useState("")
    const [tipo1, setTipo1] = useState("")

    const [nombreState, setNombreState] = useState("")
    const [correoState, setCorreoState] = useState("")
    const [contraState, setContraState] = useState("")
    const [confiContraState, setConfiContraState] = useState("")
    const [ciudads, setciudad] = useState("")

    const [age, setAge] = React.useState('');

    const [indice, setIndice] = useState(0)
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleOpen = (n) => {
        setOpen(true);
        setIndice(n);
        console.log("nombre: " + n)
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeCiudad = (event) => {
        setciudad(event.target.value);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const prueba1 = (n) => {
        setTitulo1(filas[n].Nombre)
        setCorreo1(filas[n].Correo)
        setContraState(filas[n].Pass)
        setTipo1(filas[n].Id_Servicio)
        setOpen1(true);
    }

    const prueba = (n) => {
        console.log("nombre: " + n)
        console.log(filas[n].Nombre)
        // console.log(ciudadesState[filas[n].Ciudad_Id_Ciudad].Ciudad)
        setTitulo(filas[n].Nombre)
        const prueba = filas[n].Ciudad_Id_Ciudad
        console.log(prueba)
        ciudadesState.map((city) => {
            if (city.IdCiudad === prueba) {
                setDireccion(city.Ciudad + ", " + city.Pais)
            }
        })

        setCorreo(filas[n].Correo)
        setIndice(n);
        if (filas[n].TipoServicio_Id_Tipo === 1) {
            setTipo("Hotel")
        } else if (filas[n].TipoServicio_Id_Tipo === 2) {
            setTipo("Agencia Renta Auto")
        } else {
            setTipo("Aerolinea")
        }
        setOpen(true);
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
        }).catch((err) => {
            setCiudadesState([])
            // console.log(err.data)
        });
    }

    async function ObtenerSolicitudes() {
        let result = await axios.get("http://34.125.201.105:4000/v1/fullTrip/getServicesActive", {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then((res) => {
            console.log(res.data)

            setFilas(res.data)
            // data=res.data.datas
            // return res.data.data
        }).catch((err) => {
            setFilas([])
            // console.log(err.data)
        });
    }

    async function Eliminar(num) {
        console.log(num)
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://34.125.201.105:4000/v1/fullTrip/AprobarServicio", {
            id: num,
            estado: 2,
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


    }

    async function Modificar() {
        console.log(tipo1)
        console.log(nombreState)
        console.log(ciudads)
        console.log(correoState)
        console.log(confiContraState)
        console.log(age)

        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://34.125.201.105:4000/v1/fullTrip/ModificarServicio", {
            id: tipo1,
            nombre: nombreState,
            direccion: ciudads,
            correo: correoState,
            pass: confiContraState,
            tipo: age

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


    }

    useEffect(() => {
        ObtenerSolicitudes()
        obtenerCiudades()
    }, []);


    return (
        <>
            <br /><br /><br /><br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table" responsive>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                <Typography gutterBottom variant="h5" component="div">
                                    NOMBRE
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography gutterBottom variant="h5" component="div">
                                    ACCIONES
                                </Typography>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filas.map((row, numero) => {
                            return (
                                <StyledTableRow key={row.Id_Servicio} >
                                    <StyledTableCell component="th" scope="row" align="center" >
                                        {row.Nombre}

                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button variant="outlined" color="secondary" onClick={() => Eliminar(row.Id_Servicio)}>
                                            <DeleteIcon />ELIMINAR
                                        </Button> &nbsp;
                                        <Button variant="outlined" color="secondary" onClick={() => prueba1(numero)} >
                                            <EditIcon />MODIFICAR
                                        </Button> &nbsp;

                                        <Button variant="outlined" color="secondary" onClick={() => prueba(numero)} >
                                            <RemoveRedEyeIcon />vER
                                        </Button>

                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                        <Modal
                            hideBackdrop
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 200 }}>
                                <h2 id="child-modal-title">{titulo} </h2>
                                <p id="child-modal-description">
                                    {tipo}
                                    <br />
                                    {direccion}
                                    <br />
                                    {correo}
                                </p>
                                <Button variant="outlined" color="secondary" onClick={handleClose}>
                                    <CloseIcon />Cerrar
                                </Button>
                            </Box>
                        </Modal>
                        <Modal
                            hideBackdrop
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                <br />

                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                                </p>
                                <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField
                                        id="NombreServicio"
                                        label="Ingresa Nombre de tu Servicio:"
                                        placeholder="Avianca"
                                        defaultValue={titulo1}
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

                                </p>
                                <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

                                </p>
                                <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField
                                        id="CorreoServicio"
                                        label="Ingresa tu Correo Electronico:"
                                        placeholder="fulltrip@gmail.com"
                                        defaultValue={correo1}
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

                                </p>
                                <br />
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <TextField
                                        id="ContraServicio"
                                        label="Ingresa tu Contraseña:"
                                        placeholder="********"
                                        defaultValue={contraState}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <KeyIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        type="password"
                                        variant="standard"
                                        onChange={event => setConfiContraState(event.target.value)}
                                    />
                                </p>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="outlined" color="secondary" onClick={handleClose1}>
                                    Cerrar
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="outlined" color="secondary" onClick={Modificar}>
                                    Guardar
                                </Button>
                            </Box>
                        </Modal>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
