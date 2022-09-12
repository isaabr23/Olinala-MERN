import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useAdminStore } from '../../hooks/useAdminStore';

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

export const AdminUpdate = ({ name, admin, activeAdmin}) => {
        
  const idActive = admin.find( active => active.id === activeAdmin )
  
  const administradorFormFields = {
    nombre: idActive?.nombre,
    nivel: idActive?.nivel,
    fecha: idActive?.fecha,
    telefono: idActive?.telefono
  }
  const { nombre, nivel, fecha, telefono, onInputChange } = useForm(administradorFormFields);
  
  const { startSavingAdmin } = useAdminStore()
  
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  const onSubmit = (e) => {
    e.preventDefault();

    startSavingAdmin({id: idActive.id, nombre, nivel, fecha, telefono})

    handleClose()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se actualizo el administrador',
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
            Se debe seleccionar el nivel de administracion
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
                    name="nivel"
                    value={ nivel }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Nivel</Typography>}
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
                    name="telefono"
                    value={ telefono }
                    onChange={ onInputChange }
                    label={<Typography fontSize={15}>Telefono</Typography>}
                    variant="outlined" />
                  </Box>

              <Button variant="contained" type="submit" sx={{ fontSize: 18, mt: 1 }}>Actualizar</Button>

            </form>  
          </Box>
        </Modal>
    </div>
  )
}
