import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { onRegister } from "../store/auth/auth";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPassword2: '',
}

export const Registro = () => {

  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange } = useForm(registerFormFields);
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();

    if( registerPassword !== registerPassword2 ) {
      Swal.fire('Error en la autenticacion', 'Las contraseñas son diferentes', 'error');
      return;
    }
    
    dispatch(onRegister({name: registerName, email: registerEmail, password: registerPassword}))
  }

  return (
    <div className="fondo-login">
      <div className="register-cristal">
      
        <h3 className="center marginDown-10">Registro</h3>

        <div>
          <form onSubmit={ onSubmit } className="container-register">

          <div className="form-register">
              <label className="label-register">Nombre:</label>
              <input 
                type="text" 
                className='input-authR'
                placeholder="Ingresa tu nombre"
                name="registerName"
                value={ registerName }
                onChange={ onInputChange }
              />
            </div>

            <div className="form-register">
              <label className="label-register">Correo:</label>
              <input 
                type="email" 
                className='input-authR'
                placeholder="Correo electronico"
                name="registerEmail"
                value={ registerEmail }
                onChange={ onInputChange }
              />
            </div>
              
            <div className="form-register">
              <label className="label-register">Password:</label>
              <input 
                type="password" 
                className='input-authR'
                placeholder="Contraseña"
                name="registerPassword"
                value={ registerPassword }
                onChange={ onInputChange }
              />
            </div>    

            <div className="form-register">
              <label className="label-register">Confirma tu password:</label>
              <input 
                type="password" 
                className='input-authR'
                placeholder="Confirma tu password"
                name="registerPassword2"
                value={ registerPassword2 }
                onChange={ onInputChange }
              />
            </div>

            <div className="boton-submitR">
              <Button type='submit' variant="contained" size="large" sx={{ fontSize: 16, marginTop: 2, marginBottom: 1.5 }}>
                Registrar
              </Button>
            </div>
          </form>
          <div className="center marginUpDown-10">
            <h1>¿Ya tienes cuenta?  
                <NavLink to="/auth/login" > 
                    <span>   Login </span>
                </NavLink></h1>
          </div>
        </div>

      </div>
    </div>
  )
}
