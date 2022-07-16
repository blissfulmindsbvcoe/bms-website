import './Navbar.css';
import logo from '../../assets/Main/logo.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg" style={{height: '4em'}}>
        <div className="container-fluid d-flex justify-content-end">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className='Navbar__logo'>
              <img alt="BMS Logo" style={{marginLeft: "25px", marginTop: "35px"}} src={logo} height="110px" width="110px"/>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to='aboutus' spy={true} smooth={true} duration={500}>About</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to='team' spy={true} smooth={true} duration={500}>Team</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to='events' spy={true} smooth={true} duration={500}>Events</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to='contact' spy={true} smooth={true} duration={500}>Contact</ScrollLink>
              </li>
              <li className="nav-item" style={{marginRight: '-0.5em'}}>
                <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                  <div className='Navbar__line'></div>
                </div>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-globe" style={{color: 'white'}}></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;