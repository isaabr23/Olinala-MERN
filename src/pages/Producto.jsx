import { NavLink } from 'react-router-dom';
import { Corazon } from '../interface/Corazon';
import { Estrellas } from '../interface/Estrellas';
import { Cart } from './Cart';

export const Producto = ({ arte }) => {

  return (
    <div className="container">
      <NavLink
        to={{
          pathname: `/Informacion/${arte.id}`,
          // pathname: `/Informacion/${arte.name}`,
          state: { id: arte.id },
        }}
      >
        <img src={ require(`../img/productos/${arte.imagen}`) } alt="producto" className='imagen-producto'/>
      </NavLink>

      <div className="contenido">
        <div className="review">
          <div className="stars">
            <span>Reviews</span>
            <Estrellas />
          </div>
          <h5>$ {arte.precio}</h5>
        </div>
        <h4 className="nombre">{arte.name}</h4>
        <div className="detalles">
          <p>{arte.comentario}</p>
        </div>
        <div className="btn-box">
          <span className="like point">
            <Corazon />
          </span>
          <Cart value={arte} />
        </div>
      </div>
    </div>
  );
};