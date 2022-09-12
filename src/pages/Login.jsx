import { Button } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../hooks/useAuthStore";
import { useForm } from "../hooks/useForm";

const loginFormFields = {
  loginEmail: '',
  loginPassword: '',
}

export const Login = () => {

  const { startLogin, errorMessage } = useAuthStore();
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log(loginEmail, loginPassword)
    
    startLogin({email: loginEmail, password: loginPassword})
  
  }

  // Alarma en caso de que errorMessage sea diferente a undefined (error en autenticacion)
  useEffect(() => {
    if( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage])
  
  return (
    <div className="fondo-login">
      <div className="register-cristal">
      
        <h3 className="center">Login</h3>

        <div className="container-login">
          <form onSubmit={ loginSubmit }>

            <div className="form-login">
              <label className="label-login">Correo:</label>
              <input 
                type="email" 
                className='input-auth'
                placeholder="Correo electronico"
                name="loginEmail"
                value={ loginEmail }
                onChange={ onInputChange }
              />
            </div>
              
            <div className="form-login">
              <label className="label-login">Password:</label>
              <input 
                type="password" 
                className='input-auth'
                placeholder="Contraseña"
                name="loginPassword"
                value={ loginPassword }
                onChange={ onInputChange }
              />
            </div>    

            <div className="boton-submit">
              <Button type='submit' variant="contained" size="large" sx={{ fontSize: 16, marginTop: 2 }}>
                Ingresar
              </Button>
            </div>
          </form>
          <div className="center marginUpDown-10">
            <h1>¿No tienes cuenta? 
                <NavLink to="/auth/registro" > 
                    <span>  Registrate aqui</span>
                </NavLink></h1>
          </div>
        </div>

      </div>
    </div>
  )
}