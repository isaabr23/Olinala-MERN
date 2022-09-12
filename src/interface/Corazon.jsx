import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Corazon = () => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(10);

  const heart = () => {
    setLike(value => !value);
    setLikes(likes - 1);
    if (like === false) {
      setLikes(likes + 1);
    }
  };

  return (
    <div className="contenedor-corazon">
      {
        like ? <FavoriteIcon sx={{ fontSize: 30, position: 'relative', top: 5 }} onClick={heart} color="error" fontSize="large" /> : <FavoriteBorderIcon onClick={heart} sx={{ fontSize: 25, position: 'relative', top: 5 }} fontSize="large"/>
      }
      
      <div>
        <p className="likes"> {likes} personas les gusta</p>
      </div>
    </div>
  );
};