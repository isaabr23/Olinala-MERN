import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Estrellas } from '../interface/Estrellas';
import { Cart } from './Cart';
import { Artesanias, Bolsas } from '../DB/DataBase';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const Informacion = () => {

  let params = useParams();
  // console.log(params)
  
  // Extraemos el id para validar que sea el mismo que el de la url
  const ID = Artesanias.map(arte => arte.id);
  //   console.log(ID);
  // Con el nuevo arreglo comparamos el id del arreglo y el del url para saber si son iguales
  const found = ID.find(element => element === params.id);
  //   console.log(found);

  // {params.id} Extrae el id de cada producto por medio del url
  //   console.log(location);

  const { name, comentario, precio } = Artesanias[found - 1];

  if (params.id !== '0') {
    var carpeta = Bolsas;
  }

  const imagenArr = carpeta.map(bolsa => bolsa.imagen);
  const [imgCarr, setImgCarr] = useState(0);

  const handlenext = () => {
    if (imagenArr.length > imgCarr && imgCarr < imagenArr.length - 1) {
      setImgCarr(imgCarr + 1);
    }
  };

  const handleatras = () => {
    if (imgCarr <= imagenArr.length && imgCarr > 0) {
      setImgCarr(imgCarr - 1);
    }
  };

  const id = params.id;
  const imagen = imagenArr[imgCarr];
  const arte = {
    id,
    imagen,
    name,
    comentario,
    precio,
  };

  // console.log(arte);

  return (
      <div>
        
        <div className="back">
          <Link to="/" className='flexGrow-1'>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 35, marginLeft: 8 }}/>
          </Link>
          <h3 className="head-info">Informacion del producto</h3>
        </div>

        <div className="containerInfo">
          <div className="flex grid-img-info">
            <div className="back-next">
              {
                imgCarr !== 0 ? 
                  <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 25 }} className="pointInfo" onClick={handleatras}/>
                :
                  <ArrowBackIosNewOutlinedIcon className='atras' sx={{ fontSize: 25 }} />
              }
            </div>

            <div className="imageInfo" >
              <img src={ require(`../../public/assets/img/${params.id}/${imagenArr[imgCarr]}`) } alt="producto" className='imagen-producto-info'/>
            </div>

            <div className="back-next">
              {
                imgCarr !== 3 ? 
                  <ArrowForwardIosOutlinedIcon sx={{ fontSize: 25 }} className="pointInfo" onClick={handlenext}/>
                : 
                  <ArrowForwardIosOutlinedIcon sx={{ fontSize: 25 }} className="siguiente"/>
              }
            </div>
          </div>

        <div className='InformacionGrid'>
          <div className="flex-informacion">
            <h3 className="nombreInfo">{name}</h3>
            <div className="detallesInfo">
              <p>{comentario}</p>
            </div>
          </div>
          
          <div className="reviewInfo">
            <div className="starsInfo">
              <span>Reviews</span>
              <Estrellas />
            </div>
            <h5>$ {precio}</h5>
          </div>
          
          <div>
            <Cart value={arte} size={280} />
          </div>
          </div>
        
        </div>
      </div>
  );
};