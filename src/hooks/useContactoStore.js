import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import olinalaApi from "../api/olinalaApi";
import { onAddNewContacto, onDeleteContacto, onLoadContactos, onUpdateContacto } from "../store/contacto/contactoSlice";

export const useContactoStore = () => {
  
    const dispatch = useDispatch();

    const startSavingContacto = async( dataContacto ) => {
        
        try {
            
            // Actualizando
            if( dataContacto.id ) {
                await olinalaApi.put(`/contacto/${ dataContacto.id }`, dataContacto );
                dispatch( onUpdateContacto({ dataContacto }) );
                return;
            }
            
            // Creando
            const { data } = await olinalaApi.post('/contacto/NewCliente', dataContacto );
            dispatch( onAddNewContacto({...dataContacto, id: data.id}) );
        
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeleteContacto = async(activeContacto) => {

        console.log(activeContacto)

        try {

            await olinalaApi.delete(`/contacto/${ activeContacto }`);
            dispatch( onDeleteContacto(activeContacto) )
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    }

    // Cargar todos los eventos de la base de datos
    const startLoadingContacto = async() => {
        try {
            
            const { data } = await olinalaApi.get('/contacto')
            dispatch( onLoadContactos( data.cliente ) );

        } catch (error) {
            console.log('Error cargando los Contactos');
            console.log(error);
        }
    }

    return {

        // Metodos
        startSavingContacto,
        startDeleteContacto,
        startLoadingContacto,
    }
}
