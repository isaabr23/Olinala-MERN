import nosotros from "../img/nosotros.jpg";

export const Nosotros = () => {
  return (
    <>
      <h3 className="center marginUpDown-10">Nosotros</h3>
      <div className="contenedor center">
          <h2 className="centrar-texto marginUpDown-10">Conoce sobre nosotros</h2>
          <div className="contenido-nosotros">
              <div>
                  <img src={nosotros} alt="Nosotros" className="img-nosotros"/>
              </div>
              <div className="texto-nosotros">
                <div >
                  <p className="roboto">25 Años de experiencia</p>
                  <p className="roboto2">Estamos creando una experiencia de usuarios única</p>
                </div>
                <div>
                  <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nesciunt beatae hic sunt libero similique alias tempora consectetur aut, maxime nemo, ea est fuga esse in, ab a sequi quos! Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Laboriosam consectetur magnam earum ducimus ipsum reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nesciunt beatae hic sunt libero similique alias tempora consectetur aut, maxime nemo, ea est fuga esse
                      in, ab a sequi quos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  </div>
              </div>
          </div>

      </div>
    </>
  )
}
