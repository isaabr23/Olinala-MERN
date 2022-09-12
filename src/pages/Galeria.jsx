import arte1 from "../img/galeria/arte1.jpg";
import arte2 from "../img/galeria/arte2.jpg";
import arte3 from "../img/galeria/arte3.jpg";
import arte4 from "../img/galeria/arte4.jpg";
import arte5 from "../img/galeria/arte5.jpg";
import arte6 from "../img/galeria/arte6.jpg";
import arte7 from "../img/galeria/arte7.jpg";
import arte8 from "../img/galeria/arte8.jpg";
import arte9 from "../img/galeria/arte9.jpg";
import arte10 from "../img/galeria/arte10.jpg";
import arte11 from "../img/galeria/arte11.jpg";
import arte12 from "../img/galeria/arte12.jpg";
import arte13 from "../img/galeria/arte13.jpg";
import arte14 from "../img/galeria/arte14.jpg";
import arte15 from "../img/galeria/arte15.jpg";

export const Galeria = () => {
  return (
    <>
      <h3 className="center marginUpDown-10">Galeria</h3>
      <div className="center">
          <h2 className="centrar-texto marginUpDown-10">Galeria de nuestras artesanias</h2>
          
          <div className="galeria">

                <div className="contenedor-img">
                  <img src={arte1} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte2} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte3} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte4} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte5} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte6} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte7} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte8} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte9} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte10} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte11} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte12} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte13} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte14} alt="producto" className="imagen-galeria"/>
                </div>
                
                <div className="contenedor-img">
                  <img src={arte15} alt="producto" className="imagen-galeria"/>
                </div>
  
          </div>
      </div>
    </>
  )
}

