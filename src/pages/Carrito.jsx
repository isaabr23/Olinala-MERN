import React from 'react';
import Swal from 'sweetalert2';
import { Cesta } from './Cesta';
import { Tabla } from './Tabla';

import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export const Carrito = () => {

  
  // let guardado = JSON.parse(localStorage.getItem('cart'));

  const { cart } = useSelector( state => state.carrito)

  // para que al reiniciar la pagina no se pierdan los datos
  // dispatch(loadProduct(guardado))

  const handlePay = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Se ha pagado un total de: $ ${totalPrecios}`,
      // text: '$' + totalPrecios,
      showConfirmButton: false,
      width: 400,
      timer: 2000,
    });
  };

  let precios = cart.map(keep => keep.precio * keep.cantidad)
  let totalPrecios = 0
  for (let i of precios) {totalPrecios += i}

  // Para que solo se muestre un nombre de cada producto si hay mas de 1 seleccionados
  const hash = {};
  const filtro = cart.filter(function (current) {
    var exists = !hash[current.id];
    hash[current.id] = true;
    return exists;
  });

  // // Para sacar los ids y hacer el resumen de pedidos
  const ids = cart.map(keep => keep.id);

  var repetidos = {};
  ids.forEach(function (numero) {
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });

  return (
    <div>
      <h3 className="centrado">Carrito de Compras</h3>

      <div className='productos-active'>
        { cart &&
          cart.map(arte => (
            <Cesta arte={arte} key={arte.id} value={false} />
          ))
        }
      </div>

      <div className="totales">
        <h2 className='total-h2'>Total:</h2>

        <div className="marginDown-10">        
          {
            filtro.map((arte, idx) => (
              <Tabla arte={arte} key={idx} cantidad={arte.cantidad} precios={arte.precio} />
            ))
          }
        </div>
        
        <hr style={{ color: 'black', height: '2px', marginLeft: '210px' }} />
        <div className="flexa">
          <div>
            <Button variant="outlined" disabled={ totalPrecios === 0 && true } startIcon={<PaymentIcon />} onClick={handlePay} className='pay' sx={{ fontSize: 20 }}>
              Pagar
            </Button>
          </div>
          <h3 className='precioTot'> $ {totalPrecios}</h3>
        </div>
      </div>
    </div>
  );
};