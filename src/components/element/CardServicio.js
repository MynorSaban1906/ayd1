import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function CardServicio(props) {

  /*Activa: "0"
CantPersonas: 5
Estado: "Disponible"
FechaDisponibilidad: "2022-06-15T06:00:00.000Z"
Id_Habitacion: 1
Precio: 1252
Servicio_Id_Servicio: 1 */
const { Precio, Estado, CantPersonas, img} = props.propiedades;

  return (
    <Card  sx={{ maxWidth: 345, margin: '5px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#5A29E7' }} aria-label="recipe">
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Hotel"
        subheader={`Q`+{Precio}}
      />
      <CardMedia
        component="img"
        height="194"
        image={"s"}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          la Habitacion cuenta con la Capacidad de : {CantPersonas} y se encuentra {Estado}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
    
      </CardActions>
    
    </Card>
  );
}