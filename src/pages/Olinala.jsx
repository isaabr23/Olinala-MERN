import { Artesanias } from '../DB/DataBase';
import { Producto } from './Producto';

export const Olinala = () => {
  return (
    <div className="fondo-olinala">
      <div>
          <h3 className="center">Artesanias Olinala</h3>
          <div className='contenedor-productos'>
            {
              Artesanias.map(arte => (
                <Producto arte={arte} key={arte.id} />
              ))
            }
          </div>
        </div>
    </div>
  )
}
