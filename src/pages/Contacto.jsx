import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import contacto1 from "../img/contacto1.jpg"
// import { useDispatch } from "react-redux";
// import { onContacto } from "../store/contacto/contactoSlice";
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
 
// const dispatch = useDispatch()
const { startSavingContacto } = useContactoStore();
const { contactoName, contactoEmail, contactoTelefono, mensaje, modo, hora, fecha, onInputChange } = useForm(ContactFormFields);

const onSubmit = (e) => {
  e.preventDefault();
  // console.log(contactoName, contactoEmail, contactoTelefono, mensaje, modo, hora, fecha);
  startSavingContacto({nombre: contactoName, email: contactoEmail, telefono: contactoTelefono, mensaje, modo, hora, fecha})
  // dispatch(onContacto({name: contactoName, email: contactoEmail, telefono: contactoTelefono, mensaje, modo, hora, fecha}))

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
                <fieldset>
                    <legend  className="marginUpDown-10">Informacion Personal</legend>
                    <label  className="label-contacto" >Nombre:</label>
                    <input 
                      type="text"
                      className="input-contacto"
                      placeholder="Tu Nombre"
                      name="contactoName"
                      value={ contactoName }
                      onChange={ onInputChange }
                    />

                    <label  className="label-contacto" >E-mail:</label>
                    <input
                      type="email"
                      className="input-contacto"
                      placeholder="Tu correo electronico"
                      name="contactoEmail"
                      value={ contactoEmail }
                      onChange={ onInputChange }
                    />

                    <label  className="label-contacto" >Telefono:</label>
                    <input
                      type="tel"
                      className="input-contacto"
                      placeholder="Tu Telefono"
                      name="contactoTelefono"
                      value={ contactoTelefono }
                      onChange={ onInputChange }
                    />

                    <label  className="label-contacto" >Mensaje:</label>
                    <textarea name="mensaje" cols="30" rows="10" value={ mensaje } onChange={ onInputChange }></textarea>
                </fieldset>

                <fieldset className='marginTop-20'>
                    <legend  className="marginUpDown-10">Contacto</legend>
                    <p>Como desea ser contactado:</p>
                    <div className="forma-contacto">
                        <label  className="label-contacto" >Telefono</label>
                        <input
                          type="radio"
                          className="input-contacto"
                          name="modo"
                          value="Telefono" 
                          onChange={ onInputChange }
                        />

                        <label  className="label-contacto" >E-mail</label>
                        <input
                          className="input-contacto"
                          type="radio"
                          name="modo"
                          value="Email"
                          onChange={ onInputChange }
                        />
                    </div>
                        
                        <div>
                          <p>Elija la fecha y la hora:</p>

                          <label  className="label-contacto" >Fecha:</label>
                          <input
                            className="input-contacto"
                            type="date"
                            name="fecha"
                            value={ fecha }
                            onChange={ onInputChange }    
                          />

                          <label  className="label-contacto" >Hora:</label>
                          <input
                            className="input-contacto"
                            type="time"
                            name="hora"
                            min="09:00" max="18:00" 
                            value={ hora }
                            onChange={ onInputChange }  
                          />
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


