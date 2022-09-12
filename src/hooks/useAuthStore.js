import { useDispatch, useSelector } from "react-redux"
import { olinalaApi } from "../api"
import { clearErrorMessage, onLogin, onLogout } from "../store/auth/auth";

export const useAuthStore = () => {
  
  const { status, user, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const startLogin = async({email, password}) => {
    
    // console.log(email, password)
        
    try {
      
      const { data } = await olinalaApi.post('/auth', {email, password});
      // console.log(data)
      
      dispatch( onLogin({ name: data.email, uid: data.uid }) );  

    } catch (error) {
      console.log({error}) // en response data encontramos el error que se manda desde el BACK

      dispatch( onLogout('Las credenciales no existen') );

      // limpia en 10 milisegundos el store auth y mandamos a errorMessage como undefined para la alarma de sweetalert2
      setTimeout(() => {
          dispatch( clearErrorMessage() );
      }, 10);
    }
  }

  return {
    // Propiedades
    // status,
    // user,
    errorMessage,
    // Metodos
    startLogin,
    // startRegister,
    // checkAuthToken,
    // startLogout
}
}
