import './Navbar.css';
import logo from '../../assets/Main/logo.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = (props) => {
    return (
      <header className='Navbar__Container'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/"><img src={logo} alt="bms-logo" height="37px"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="navLink" href='/'>HOME</a>
              </li>
              <li className="nav-item">
                <Link className="navLink" to="/about" >ABOUT</Link>
              </li>
              {!props.isTeam && <li className="nav-item">
                <ScrollLink className="navLink" to="events" spy={true} smooth={true} duration={500}>EVENTS</ScrollLink>
              </li>}
              {props.isTeam && <li className="nav-item">
              <Link className="navLink" to="/" >EVENTS</Link>
              </li>}
              <li className="nav-item">
              <a className="navLink" href='https://blogs.blissfulmindsbvcoe.com/'>BLOGS</a>
              </li>
              {!props.isTeam && <li className="nav-item">
              <button className="btn" type="button" name="button" onClick={()=>{window.location.hash = "";window.location.hash = "contact";}}>CONTACT US</button>
              </li>}
              {props.isTeam && <li className="nav-item">
              <button className="btn" type="button" name="button" onClick={()=>{window.location = "/";}}>CONTACT US</button>
              </li>}
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;