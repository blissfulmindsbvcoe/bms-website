import './Navbar.css';
import logo from '../../assets/Main/logo.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = (props) => {
    return (
      <header className='Navbar__Container'>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/"><img src={logo} alt="bms-logo" height="37px"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a className="navLink" href='/'>HOME</a>
              </li>
              {!props.isTeam && <li class="nav-item">
                <ScrollLink className="navLink" to="about" spy={true} smooth={true} duration={500}>ABOUT</ScrollLink>
              </li>}
              <li class="nav-item">
                <Link className="navLink" to="/about" >TEAM</Link>
              </li>
              {!props.isTeam && <li class="nav-item">
                <ScrollLink className="navLink" to="events" spy={true} smooth={true} duration={500}>EVENTS</ScrollLink>
              </li>}
              <li class="nav-item">
              <a className="navLink" href='https://blogs.blissfulmindsbvcoe.com/'>BLOGS</a>
              </li>
              {!props.isTeam && <li class="nav-item">
              <button class="btn" type="button" name="button" onClick={()=>{window.location.hash = "";window.location.hash = "contact";}}>CONTACT US</button>
              </li>}
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;