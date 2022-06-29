// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Cookies from "js-cookie";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#7D3C98",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#C39BD3",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function MisServiciosHotel() {
    const [open, setOpen] = React.useState(false);

    const [precioState, setPrecioState] = useState("")
    const [capacidadState, setCapacidadState] = useState("")
    const [fechaFinState, setFechaFinState] = useState("")

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const formData = new FormData();

    formData.append('File', selectedFile);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        const files = event.target.files;
        const file = files[0];
        getBase64(file);
    };


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

    const handleOpen = () => {
        setOpen(true);
        // setIndice(n);
        // console.log("nombre: " + n)
    };
    const handleClose = () => {
        setOpen(false);
    };


    const [base64code, setbase64code]=useState("")
    const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    const onLoad = fileString => {
        // console.log(fileString);
        const myArray = fileString.split(",", 2);
        setbase64code(myArray[1])
        // this.base64code = fileString
    };

    const getBase64 = file => {
        let reader = new FileReader();
        // console.log(reader)
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const id_usuario = Cookies.get('fullTrip_id')

    async function Agregar() {
        // console.log(precioState)
        // console.log(fechaFinState)
        // console.log(capacidadState)
        console.log(base64code)
        console.log(selectedFile.name)
        // console.log(id_usuario)
        axios.post("http://34.125.201.105:4000/v1/fullTrip/CreateHabitacion", {
            Precio: precioState,
            Estado: "disponible",
            FechaDisponible: fechaFinState,
            CantPersonas: capacidadState,
            Imagen64: base64code,
            Imagen: selectedFile.name,
            IdServicio: 1
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

    return (
        <>
            <Box textAlign='center' style={{ position: 'absolute', top: '10%', left: '40%' }}>
                <h1>Mis Servicios Hotel</h1>
                <img src="https://ayd1-g10-full-trip.s3.amazonaws.com/full-trip-imagenes/hhotel.jpeg"/>
            </Box>

            <Box style={{ position: 'absolute', top: '10%', left: '20%' }}>
                <Button class="btn-primario" variant="contained" onClick={handleOpen}>
                    <AddCircleIcon /> Servicio
                </Button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <br />

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Precio de Reservacion de la Habitacion:"
                                placeholder="Q 0.00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setPrecioState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </p>
                        <br />
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                // label="Ingrese Fecha:"
                                type="datetime-local" id="meeting-time"
                                name="meeting-time"
                                // value="2018-06-12T19:30"
                                // min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaFinState(event.target.value)}
                            />
                        </p>
                        <br />
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                id="input-with-icon-textfield"
                                name='TFNombre'
                                label="Ingrese Capacidad de la Habitacion:"
                                placeholder="1"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {/* <AccountBoxIcon /> */}
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                onChange={event => setCapacidadState(event.target.value)}
                            // ref={inputNombre}
                            />
                        </p>
                        <br />
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="file" name="file" onChange={changeHandler} />
                            {isFilePicked ? (
                                <div>
                                    <p>Nombre Archivo: {selectedFile.name}</p>
                                    <p>Tipo Archivo: {selectedFile.type}</p>
                                    <p>Tamano en bytes: {selectedFile.size}</p>
                                    <p>
                                        Ultima modificacion:{' '}
                                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p>Seleccione un archivo para ver sus detalles</p>
                            )}
                        </p>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="outlined" color="secondary" onClick={Agregar}>
                            Guardar
                        </Button>
                    </Box>
                </Modal>
            </Box>

            <Box style={{ position: 'absolute', top: '20%', left: '10%' }}>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" responsive>
                        <TableHead>
                            <TableRow>
                            <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Imagen
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Precio
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Fecha
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Capacidad
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Acciones
                                    </Typography>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow  >
                                <StyledTableCell component="th" scope="row" align="center" >
                                    Reseña 1
                                </StyledTableCell>
                            </StyledTableRow>
                            {/* {filas.map((row, numero) => {
                            return (
                                <StyledTableRow key={numero} >
                                    <StyledTableCell component="th" scope="row" align="center" >
                                        {row.nombre}
                                    </StyledTableCell>                                    
                                </StyledTableRow>
                            );
                        })} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            <IconButton aria-label="add to favorites">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <DeleteForeverIcon />
                        </IconButton>
            </Box>

            
        </>
    );
}
