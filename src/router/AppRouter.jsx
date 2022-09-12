import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../interface/NavBar";
import { Olinala } from "../pages/Olinala";
import { Nosotros } from "../pages/Nosotros";
import { Galeria } from "../pages/Galeria";
import { Cotizador } from "../pages/Cotizador";
import { Contacto } from "../pages/Contacto";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { Informacion } from "../pages/Informacion";
import { Footer } from "../interface/Footer";
import { Carrito } from "../pages/Carrito";
import { Cesta } from "../pages/Cesta";
import { Admin } from "../admin/pages/Admin";

import { useSelector } from 'react-redux';
import { Administradores } from "../admin/pages/Administradores";
import { Stock } from "../admin/pages/Stock";
import { Clientes } from "../admin/pages/Clientes";

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth)

  if( status === 'checking' ) {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <>
    
      <Navbar />

      <Routes>

      {
        ( status === 'not-authenticated' )
          ? (
              <>
                <Route path="/" element={<Olinala />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Cotizador" element={<Cotizador />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/auth/*" element={<Login />} />
                <Route path="/auth/registro" element={<Registro />} />
                <Route path="/Informacion/:id" element={<Informacion />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/Cesta" element={<Cesta />} />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            )
          : 
            (
              <>
                <Route path="/" element={ <Admin /> } />
                <Route path="/admin" element={ <Administradores /> } />
                <Route path="/producto" element={ <Stock /> } />
                <Route path="/contacto" element={ <Clientes /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            )
          
      }        
      </Routes>

      <Footer/>
    </>
  )
}
