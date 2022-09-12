import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import olinalaApi from "../api/olinalaApi";
import { onLoadStocks, onAddNewStock, onUpdateStock, onDeleteStock } from "../store/Stock/stockSlice";

export const useStockStore = () => {
  
    const dispatch = useDispatch();

    const startSavingStock = async( dataStock ) => {

        try {
            
            // Actualizando
            if( dataStock.id ) {
                await olinalaApi.put(`/producto/${ dataStock.id }`, dataStock );
                dispatch( onUpdateStock({ dataStock }) );
                return;
            }

            // Creando
            const { data } = await olinalaApi.post('/producto/NewProducto', dataStock );
            dispatch( onAddNewStock({...dataStock, id: data.id}) );
        
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }

    const startDeleteStock = async(activeStock) => {

        try {

            await olinalaApi.delete(`/producto/${ activeStock }`);
            dispatch( onDeleteStock(activeStock) )
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    }

    // Cargar todos los eventos de la base de datos
    const startLoadingStock = async() => {
        try {
            
            const { data } = await olinalaApi.get('/producto')
            dispatch( onLoadStocks( data.producto ) );

        } catch (error) {
            console.log('Error cargando los Productos');
            console.log(error);
        }
    }

    return {

        // Metodos
        startSavingStock,
        startDeleteStock,
        startLoadingStock,
    }
}
