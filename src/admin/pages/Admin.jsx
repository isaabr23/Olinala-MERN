import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import A1 from '../../img/admin/administradores.jpg'
import A2 from '../../img/admin/clientes.jpg'
import A3 from '../../img/admin/Stock.jpg'
import { NavLink } from 'react-router-dom';

export const Admin = () => {
  return (
    <div className='admin'>
      <div className='contenedor-admin flex'>
        <Card sx={{ maxWidth: 345, marginTop: 2, marginRight: 2, marginLeft: 2, marginBottom: 2 }}>
          <NavLink to="/admin" className='textDecoration'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={A1}
                alt="Administradores"
              />
              <CardContent sx={{height: 105}}>
                <Typography gutterBottom variant="h5" component="div">
                  Administradores
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </NavLink>
        </Card>

      <Card sx={{ maxWidth: 345, marginTop: 2, marginRight: 2, marginLeft: 2, marginBottom: 2 }}>
        <NavLink to="/producto" className='textDecoration'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={A2}
              alt="Stock"
            />
            <CardContent sx={{height: 105}}>
              <Typography gutterBottom variant="h5" component="div">
                Stock
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
      </Card>

      <Card sx={{ maxWidth: 345, marginTop: 2, marginRight: 2, marginLeft: 2, marginBottom: 2 }}>
        <NavLink to="/contacto" className='textDecoration'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={A3}
              alt="Clientes"
            />
            <CardContent sx={{height: 105}}>
              <Typography gutterBottom variant="h5" component="div">
                Clientes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
      </Card>
      </div>
    </div>
  )
}