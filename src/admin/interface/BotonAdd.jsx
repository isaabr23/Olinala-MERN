import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useAdminStore } from '../../hooks/useAdminStore';
import { useStockStore } from '../../hooks/useStockStore';
import { useContactoStore } from '../../hooks/useContactoStore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FormFields = {}

const administradorFormFields = {
  nombre: "",
  nivel: "",
  fecha: "",
  telefono: ""
}

const productoFormFields = {
  nombre: "",
  stock: "",
  comentario: "",
  precio: "",
  imagenURL: ""
}

const clientesFormFields = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
  modo: "",
  hora: "",
  fecha: "",
}

export const BotonAdd = ({ name, casillas }) => {

  const { nombre, nivel, fecha, email, telefono, mensaje, modo, hora, stock, comentario, precio, imagenURL, onInputChange } = useForm( 
    name === 'administrador' ? administradorFormFields : 
    name === 'clientes' ? clientesFormFields : 
    name === 'producto' ? productoFormFields : '' );

  const { startSavingAdmin } = useAdminStore()
  const { startSavingStock } = useStockStore()
  const { startSavingContacto } = useContactoStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if( name === 'administrador' ){
      startSavingAdmin({nombre, nivel, fecha, telefono})
    }
    if( name === 'producto' ){
      // console.log(nombre, stock, comentario, precio, imagenURL)
      startSavingStock({nombre, stock, comentario, precio, imagenURL})
    }
    if( name === 'clientes' ){
      startSavingContacto({nombre, email, telefono, mensaje, modo, hora, fecha})
    }

    handleClose()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agrego un nuevo administrador',
      // text: '$' + totalPrecio,
      showConfirmButton: false,
      width: 300,
      timer: 2000,
    });

  }

  return (
    <>
    <div className='BotonAdd'>
      <Tooltip title={<Typography fontSize={15}>Agregar un {name}</Typography>} placement="top-start" sx={{ width: 110, height: 110}}>
        <IconButton onClick={ handleOpen }>
          <AddIcon sx={{ fontSize: 55 }}/>
        </IconButton>
      </Tooltip>
    </div>

    <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='center'>

          <Typography id="modal-modal-title" variant="h6" component="h3" sx={{ fontSize: 20 }}>
            Agregar un nuevo {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, mb: 1 }}>
            Se debe seleccionar el nivel de administracion
          </Typography>

            <form onSubmit={ onSubmit }>

              {
                casillas.map(head => (
                  <Box
                    key={head}
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                  >
                  <TextField 
                    id="outlined-basic"
                    name={ head }
                    value={ FormFields.nam }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>{head}</Typography>}
                    variant="outlined" />
                  </Box>
                ))
              }

              {
                name === 'producto' && <input type="file" id="image" name="imagenURL" onChange={ onInputChange } />
              }


              <Button variant="contained" type="submit" sx={{ fontSize: 18, mt: 1 }}>Contained</Button>

            </form>  
          </Box>
        </Modal>

    </div>
    </>
  )
}
