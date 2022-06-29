// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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

export default function Reservar() {
    const [expanded, setExpanded] = React.useState(false);
    const [filas, setFilas] = useState([]);

    const [fechaInicioState, setFechaInicioState] = useState("")
    const [fechaFinState, setFechaFinState] = useState("")

    useEffect(() => {
        setFilas("soy reseña")
        //setFilas(props.filas)
        // async function setarinformacion(){
        // //   const usuario=await ver_usu();
        // //   const respuesta=await usuario.json();
        // //   return respuesta;
        // }

        // setarinformacion().then((respuesta)=>{
        //   if(respuesta.status===200){
        //     console.log(respuesta.data);
        //     setFilas(respuesta.data);
        //   }else{
        //     console.log("error")
        //   }
        // })       
    }, []);




    return (
        <>
            <Box textAlign='center' style={{ position: 'absolute', top: '10%', left: '40%' }}>
                <h1>Reservas</h1>
            </Box>



            <Box style={{ position: 'absolute', top: '20%', left: '30%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //         R
                        //     </Avatar>
                        // }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        title="Nombre del servicio"
                        subheader="Nombre del servicio tercerizado"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                    // alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Descripcion
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box style={{ position: 'absolute', top: '60%', left: '30%' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" responsive>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        RESEÑAS
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
            </Box>

            <Box style={{ position: 'absolute', top: '20%', left: '50%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <h2>Precio</h2>
                    <CardContent>

                        <p>
                            <Typography variant="body2" color="text.secondary">
                                Fecha incio
                            </Typography>
                            <TextField
                                type="datetime-local" id="meeting-time"
                                name="meeting-time" value="2018-06-12T19:30"
                                min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaInicioState(event.target.value)}
                            />
                        </p>
                        <p>
                            <Typography variant="body2" color="text.secondary">
                                Fecha fin
                            </Typography>
                            <TextField
                                type="datetime-local" id="meeting-time"
                                name="meeting-time" value="2018-06-12T19:30"
                                min="2018-06-07T00:00" max="2018-06-14T00:00"
                                onChange={event => setFechaFinState(event.target.value)}
                            />
                        </p>
                    </CardContent>
                    <CardActions disableSpacing textAlign='center'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button class="btn-primario" variant="contained">
                            RESERVAR
                        </Button>
                    </CardActions>

                </Card>
            </Box>
        </>
    );
}
