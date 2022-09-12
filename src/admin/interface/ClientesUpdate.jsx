import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
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

export const ClienteUpdate = ({ name, contactos, activeContacto}) => {
          
  const idActive = contactos.find( active => active.id === activeContacto )
  
  const productoFormFields = {
    nombre: idActive?.nombre, 
    email: idActive?.email, 
    telefono: idActive?.telefono,
    mensaje: idActive?.mensaje, 
    modo: idActive?.modo, 
    fecha: idActive?.fecha, 
    hora: idActive?.hora, 
  }

  const { nombre, email, telefono, mensaje, modo, fecha, hora, onInputChange } = useForm(productoFormFields);
  
  const { startSavingContacto } = useContactoStore()
  
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  const onSubmit = (e) => {
    e.preventDefault();

    startSavingContacto({id: idActive.id, nombre, email, telefono, mensaje, modo, fecha, hora})

    handleClose()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se actualizo el producto',
      // text: '$' + totalPrecio,
      showConfirmButton: false,
      width: 300,
      timer: 2000,
    });

  }

  return (
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
            Se debe seleccionar el Cliente
          </Typography>

            <form onSubmit={ onSubmit }>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="nombre"
                    value={ nombre }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Nombre</Typography>}
                    variant="outlined" />
                </Box>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Email</Typography>}
                    variant="outlined" />
                </Box>    

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="telefono"
                    value={ telefono }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Telefono</Typography>}
                    variant="outlined" />
                </Box>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="mensaje"
                    value={ mensaje }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Mensaje</Typography>}
                    variant="outlined" />
                </Box>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="modo"
                    value={ modo }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Modo</Typography>}
                    variant="outlined" />
                </Box>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="fecha"
                    value={ fecha }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Fecha</Typography>}
                    variant="outlined" />
                </Box>

                <Box
                    sx={{'& > :not(style)': { m: 1, width: '30ch' },}}
                    noValidate
                    autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic"
                    name="hora"
                    value={ hora }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Hora</Typography>}
                    variant="outlined" />
                </Box>

              <Button variant="contained" type="submit" sx={{ fontSize: 18, mt: 1 }}>Actualizar</Button>

            </form>  
          </Box>
        </Modal>
    </div>
  )
}
