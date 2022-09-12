import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { addProduct, increment } from '../store/carrito/carritoSlice';
import { useDispatch } from 'react-redux';

export const Cart = ({ value, size = 0 }) => {

const dispatch = useDispatch();

  const handleAdd = () => {
    
    dispatch(increment());
    
    const newProducto = {
      id: value.id,
      imagen: value.imagen,
      name: value.name,
      comentario: value.comentario,
      precio: value.precio,
    };

    dispatch(addProduct({...newProducto, cantidad: 1}))
   
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agrego al carrito',
      // text: '$' + totalPrecio,
      showConfirmButton: false,
      width: 300,
      timer: 2000,
    });
  };

  return (
    <div className='contenedor-btn-carrito'> 
      <p className='persons'>Agregar a carrito</p>
      <Button variant="outlined" size="medium" onClick={handleAdd} sx={{ width: size, textAlign: 'center', marginTop: 1 }}>
        <AddShoppingCartIcon sx={{ fontSize: 25}}/>
      </Button>
    </div>
  );
};