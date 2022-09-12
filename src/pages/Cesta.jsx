import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { decrement, deleteProduct } from '../store/carrito/carritoSlice';
import { Avatar } from '@mui/material';

export const Cesta = ({ arte }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {

    dispatch(decrement());
    dispatch(deleteProduct(arte))
    
    // console.log(cart)
    // const correctID = cart.filter((item) => item.id !== arte.id)
    // console.log(correctID)
    // const guardado = JSON.parse(localStorage.getItem('cart'));

    // localStorage.setItem('cart', JSON.stringify(cart));    
    
    // const guardadito = JSON.parse(localStorage.getItem('cart'));
    // dispatch(updateProduct(guardadito))
  };
  
  return (
    <>
      <div className="containerCesta relative">
        {
          arte.cantidad !== 1 
            ? <Avatar sx={{ bgcolor: '#71c891', position: 'absolute', width: 30, height: 30, margin: .5, right: 0 }}>
                {arte.cantidad}
              </Avatar>

            : ''
        }
          <div
            className="imageCesta"
            style={{
            backgroundImage: `url("../assets/img/${arte.imagen}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <h3 className="nameCesta">{arte.name}</h3>
        <h5 className="nombreCesta">$ {arte?.precio}</h5>
          
        <div className="btnDelete point">
          <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ fontSize: 20 }}/>
        </div>
      </div>
    </>
  );
};