import React from 'react';

export const Tabla = ({ arte, cantidad, precios }) => (
  <>
    {
      arte.id ?
        <div className="flextot">

          <ul className="listatot">
            <li>{cantidad}</li>
          </ul>
          
          <ul className="listatot">
            <li>{arte.name}</li>
          </ul>
          
          <ul className="listatot">
            <li>$ {precios * cantidad} </li>
          </ul>
        
        </div>
      : null
    }
  </>
);