import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faHome, faBookmark, faGear } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/Logo.png';
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="verticalNavbarLogos">
            <div className="navbarlogo">
            <div className="verticalNavbarFaceLogo">
            <img src={Logo} alt="Logo" />
            </div>

            </div>
            <div className="navbarlogo">
            <div className="verticalNavbarHomeLogo">
                <Link to={'./'}>
                <button><FontAwesomeIcon icon={faHome}/></button>
                </Link>
            </div>

            </div>
            <div className="navbarlogo">
            <div className="verticalNavbarGenreLogo">
                <Link to={'./genre'}>
                    <button><FontAwesomeIcon icon={faBookmark}/></button>
                </Link>
                 
            </div>

            </div>
            <div className="navbarlogo">
            <div className="verticalNavbarChatLogo">
                <Link to={'./message'}>
                    <button><FontAwesomeIcon icon={faMessage}/></button>
                </Link>
                
            </div>

            </div>
            <div className="navbarlogo">
            <div className="verticalNavbarAccountLogo">
                <Link to={'./user'}>
                    <button><FontAwesomeIcon icon={faUser}/></button>
                </Link>
                
            </div>

            </div>
            <div className="navbarlogo">
            <div className="verticalNavbarSettingLogo">
                <Link to={'./settings'}>
                    <button><FontAwesomeIcon icon={faGear}/></button>
                </Link>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar