import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import olinalaApi from "../api/olinalaApi";
import { onAddNewAdmin, onDeleteAdmin, onLoadAdmins, onUpdateAdmin } from "../store/admins/admindsSlice";

export const useAdminStore = () => {
  
    const dispatch = useDispatch();
    // const { activeAdmin } = useSelector( state => state.adminds );
    // const { user } = useSelector( state => state.auth );

    // const setActiveEvent = ( calendarEvent ) => {
    //     dispatch( onSetActiveEvent( calendarEvent ) )
    // }

    // La palabra START la usaremos para inicializar metodo de grabacion 
    const startSavingAdmin = async( dataAdmin ) => {

        try {
            console.log({dataAdmin})
            
            // LLEGA AL BACK
            
            // Actualizando
            if( dataAdmin.id ) {
                await olinalaApi.put(`/admin/${ dataAdmin.id }`, dataAdmin );
                dispatch( onUpdateAdmin({ dataAdmin }) );
                return;
            }

            // Creando
            const { data } = await olinalaApi.post('/admin/NewAdmin', dataAdmin );
            dispatch( onAddNewAdmin({...dataAdmin, id: data.id}) );
        
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startDeleteAdmin = async(activeAdmin) => {

        try {

            await olinalaApi.delete(`/admin/${ activeAdmin }`);
            dispatch( onDeleteAdmin(activeAdmin) )
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    }

    // Cargar todos los eventos de la base de datos
    const startLoadingAdmin = async() => {
        try {
            
            const { data } = await olinalaApi.get('/admin')
            dispatch( onLoadAdmins( data.admin ) );

        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error);
        }
    }

    return {
        // Propiedades
        // events, 
        // activeEvent,
        // hasEventSelected: !!activeEvent,

        // Metodos
        // setActiveEvent,
        startSavingAdmin,
        startDeleteAdmin,
        startLoadingAdmin,
    }
}
