import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import contacto1 from "../img/contacto1.jpg"
import { useContactoStore } from '../hooks/useContactoStore';

const ContactFormFields = {
  contactoName: '',
  contactoEmail: '',
  contactoTelefono: '',
  mensaje: '',
  modo: '',
  hora: '',
  fecha: ''
}

export const Contacto = () => {
 
const { startSavingContacto } = useContactoStore();
const { contactoName, contactoEmail, contactoTelefono, mensaje, modo, hora, fecha, onInputChange } = useForm(ContactFormFields);

const onSubmit = (e) => {
  e.preventDefault();
  startSavingContacto({nombre: contactoName, email: contactoEmail, telefono: contactoTelefono, mensaje, modo, hora, fecha})

    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias, Nos comunicaremos contigo',
    text: 'informacion recibida',
    showConfirmButton: false,
    width: 300,
    timer: 3000,
  });
};
  

  return (
    <>
      <h3 className="center marginUpDown-10">Contacto</h3>
      <div className="center">
        <img src={contacto1} alt="contacto1" className="contacto1"/>
      </div>    

        <div className="contenedor seccion contenido-centrado">

            <h2 className="center">Llena el formulario de contacto</h2>

            <form className="contacto" onSubmit={ onSubmit }>
                <fieldset className="contenedor-field">
                    <legend className="marginUpDown-10">Informacion Personal</legend>
                  <div className="contenedorInfoPersonal">
                    <TextField 
                      id="outlined-basic"
                      name="contactoName"
                      label="Nombre"
                      // placeholder="Nombre"
                      variant="outlined"
                      value={ contactoName }
                      onChange={ onInputChange }
                      sx={{ marginBottom: 1 }}
                    />

                    <TextField 
                      id="outlined-basic"
                      type="email"
                      name="contactoEmail"
                      placeholder="example@olinala.com"
                      label="Correo electronico"
                      variant="outlined"
                      value={ contactoEmail }
                      onChange={ onInputChange }
                      sx={{ marginBottom: 1 }}
                    />

                    <TextField 
                      id="outlined-basic"
                      placeholder="+xx-xx-xx-xx-xx"
                      label="Telefono"
                      variant="outlined"
                      type="tel"
                      name="contactoTelefono"
                      value={ contactoTelefono }
                      onChange={ onInputChange }
                      sx={{ marginBottom: 1 }}
                    />

                    <TextField
                      id="outlined-multiline-static"
                      label="Mensaje"
                      name="mensaje"
                      multiline
                      rows={6}
                      value={ mensaje }
                      onChange={ onInputChange }
                      sx={{ marginBottom: 1 }}
                    />
                  </div>
                </fieldset>

                <fieldset className="contenedor-field">
                    <legend  className="marginUpDown-10">Contacto</legend>
                    <div className="contenedorInfoPersonal">
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group" sx={{fontSize: 20}}>Como desea ser contactado:</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={modo}
                          onChange={ onInputChange }
                        >
                          <div className="ratioInfo">
                            <FormControlLabel name="modo" value="Email" control={<Radio />} label="Email" sx={{marginRight: 5}}/>
                            <FormControlLabel name="modo" value="Telefono" control={<Radio />} label="Telefono" />
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <div>
                        <p>Elija la fecha y la hora:</p>

                        {/* <label  className="label-contacto" >Fecha:</label> */}
                        <input
                          className="input-contacto"
                          type="date"
                          name="fecha"
                          value={ fecha }
                          onChange={ onInputChange }    
                        />

                        {/* <label  className="label-contacto" >Hora:</label> */}
                        <input
                          className="input-contacto"
                          type="time"
                          name="hora"
                          min="09:00" max="18:00" 
                          value={ hora }
                          onChange={ onInputChange }  
                        />
                      </div>
                    </div>
                </fieldset>


                <div  className="button-contacto">
                  <Button variant="contained" size="large" type="submit" sx={{ width: 160, height: 35, fontSize: 15 }}>
                    Enviar
                  </Button>
                </div>
            </form>
        </div>
    </>
  )
}


