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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import informacion from '../data_prueba/info.json'

import { useNavigate } from 'react-router-dom';

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




function createData(nombre, fecha) {
    return { nombre, fecha };
}
//                                      props
export default function ComponenteTabla2() {
    const [filas, setFilas] = useState([]);
    const [ciudadesState, setCiudadesState] = useState([])

    const [titulo, setTitulo] = useState("")
    const [direccion, setDireccion] = useState("")
    const [correo, setCorreo] = useState("")
    const [tipo, setTipo] = useState("")

    const [indice, setIndice] = useState(0)
    const [open, setOpen] = React.useState(false);

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
        let result = await axios.get("http://34.125.201.105:4000/v1/fullTrip/getServicesDisabled", {}, {
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

    useEffect(() => {
        ObtenerSolicitudes()
        obtenerCiudades()
    }, []);

    //

    async function Aprobar(num) {   
        console.log(num)
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post("http://34.125.201.105:4000/v1/fullTrip/AprobarServicio", {
            id: num,
            estado: 1,
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

    const handleOpen = (n) => {
        setOpen(true);
        setIndice(n);
        console.log("nombre: " + indice)
    };
    const handleClose = () => {
        setOpen(false);
    };

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

                                        <Typography gutterBottom variant="h5" component="div">
                                            {row.Nombre}
                                        </Typography>

                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button variant="outlined" color="secondary" onClick={() =>Aprobar(row.Id_Servicio)}>
                                            <CheckIcon />APROBAR
                                        </Button> &nbsp;
                                        <Button variant="outlined" color="secondary" onClick={() => prueba(numero)} >
                                            <RemoveRedEyeIcon />VER
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
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
