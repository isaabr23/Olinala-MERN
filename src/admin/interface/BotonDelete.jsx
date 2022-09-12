import React from 'react'
import { IconButton, Tooltip, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import { useStockStore } from '../../hooks/useStockStore';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAdminStore } from '../../hooks/useAdminStore';
import { useContactoStore } from '../../hooks/useContactoStore';


export const BotonDelete = ({ name, activeElement }) => {
  
  const { startDeleteAdmin } = useAdminStore();
  const { startDeleteStock } = useStockStore();
  const { startDeleteContacto } = useContactoStore();
  
  const onDelete = () => {

    if (name === 'administrador') {
      startDeleteAdmin(activeElement);
    }

    if (name === 'producto') {
      startDeleteStock(activeElement);
    }

    if (name === 'clientes') {
      startDeleteContacto(activeElement);
    }
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se elimino el producto',
      showConfirmButton: false,
      width: 300,
      timer: 2000,
    });

  }

  return (
    <>
      <div className='BotonDelete'>
        <Tooltip title={<Typography fontSize={15}>Eliminar</Typography>} placement="top-start" sx={{ width: 110, height: 110}}>
          <IconButton onClick={ onDelete }>
            <DeleteIcon sx={{ fontSize: 50, color: 'red'}}/>
          </IconButton>
        </Tooltip>
      </div>
    </>
  )
}
