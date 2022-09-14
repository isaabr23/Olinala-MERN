import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import SendIcon from '@mui/icons-material/Send';


export const Footer = () => {

  return (
    <>
      <div className="footer">

      <div className='contenedor-Flogo'>
        <div className='flex'>
          <Link to="/Olinala" >
              <img src={require("../img/logo.jpg")} alt="logo" className="logo-footer"/>
          </Link>
          <h1 className="titulo-footer">Artesanias <span className='span-footer'>Olinala</span></h1>
        </div>
        <div className='text-titleFooter'>
          <p className='texto-footer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nesciunt beatae hic sunt libero similique alias tempora consectetur aut, maxime nemo</p>
        </div>
      </div>

      <div>
        <h1 className="titulo-footer">Nuestras Redes Sociales</h1>
        <div className='service'>

          <div className='flex'>
            <MapIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, marginRight:2 }} />
            <p className='texto-footer'>Ciudad de Mexíco, Alcaldia Cuauhtemos, #123 Alamos</p>
          </div>

          <div className='flex'>
            <PhoneIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, marginRight:2 }} />
            <p className='texto-footer'>+52-57-82-44-99</p>
          </div>

          <div className='flex'>
            <EmailIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, marginRight:2 }} />
            <p className='texto-footer'>Isaac23@gmail.com</p>
          </div>

        </div>
      </div>

      <div>
        <h1 className="titulo-footer">Servicio</h1>

        <div className='redesFooter'>
          <FacebookIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, cursor: 'pointer' }} />
          <TwitterIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, cursor: 'pointer' }} />
          <InstagramIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, cursor: 'pointer' }} />
          <LinkedInIcon sx={{ fontSize: 25, color: '#ffffff', marginLeft: 2, marginTop:2, cursor: 'pointer' }} />
        </div>

        <h1 className="titulo-footer">Unete a Newsletter</h1>

        <input type="text" className='btn-Newsletter marginTop-20 marginLeft-20' placeholder='Email'/>
        <SendIcon sx={{ fontSize: 30, color: '#ffffff', position: 'relative', top: 10, left: 5, cursor: 'pointer' }}/>
      </div>


      </div>
    </>
  );
};