import logo from "../img/logo.jpg"
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button } from "@mui/material";
import { onLogout } from "../store/auth/auth";


export const Navbar = () => {

    const { counter } = useSelector( state => state.carrito );
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(onLogout())
    }

    let activeStyle = {
        color: 'white'
    };

    let desactiveStyle = {
        color: '#bbd4ce'
    };

    return (
        <nav className="navbar">
            <div className="container-logo">
                {
                    status !== 'authenticated'
                        ?   
                            <Link to="/" >
                                <img src={logo} alt="logo" className="logo"/>
                            </Link>
                        :
                            <Link to="/auth" >
                                <img src={logo} alt="logo" className="logo"/>
                            </Link>
                }            
            </div>
            
            {
                status !== 'authenticated'
                    ?   
                        <div className="link">
                            
                            <NavLink className="navbar-name" to="/" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                                Inicio
                            </NavLink>

                            <NavLink className="navbar-name" to="/Nosotros" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                                Nosotros
                            </NavLink>

                            <NavLink className="navbar-name" to="/Galeria" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                                Galeria
                            </NavLink>

                            <NavLink className="navbar-name" to="/Cotizador" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                                Cotizador
                            </NavLink>

                            <NavLink className="navbar-name" to="/Contacto" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                                Contacto
                            </NavLink>

                        </div>
                    :   
                        <div className="link">
                                
                            <NavLink className="navbar-name" to="/" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                                Inicio
                            </NavLink>

                            <NavLink className="navbar-name" to="/admin" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                                Administradores
                            </NavLink>

                            <NavLink className="navbar-name" to="/producto" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }> 
                                Stock
                            </NavLink>
                
                            <NavLink className="navbar-name" to="/contacto" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                                Clientes
                            </NavLink>

                        </div>
            }        

            <div className="login-cart">
            {
                status !== 'authenticated'
                ? 
                    <NavLink className="navbar-name relative" to="/Carrito" >
                        <ShoppingCartIcon sx={{ fontSize: 25 }}/>
                        <div className="circle-cart absolute"><p className="margon-cont">{ counter }</p></div>
                    </NavLink>
                :
                    <Avatar alt="Cindy Baker" src="../img/logo.jpg" />
            }    

            {
                status === 'authenticated'
                ?   <Button variant="text" size="large" sx={{ color: '#fdebd3', fontSize: 15, marginTop: 0, marginRight: 4, marginleft: 4, marginBottom: 0, width: 115}} onClick={ handleLogout }>
                        Logout
                    </Button>
                :   <NavLink className="navbar-name login" to="/auth/login" style={({ isActive }) => isActive ? activeStyle : desactiveStyle }>
                        Login
                    </NavLink>
            }
            </div>
        </nav>
  )
}