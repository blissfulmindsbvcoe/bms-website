import Main from '../../components/Main/Main.component';
import AboutUs from '../../components/AboutUs/AboutUs.component'
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import Events from '../../components/Events/Events';
import { useEffect } from 'react';
import './Home.css'
// import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='mobileView'>
                For Now and For better experience, You can view it on Desktop.
            </div>
            <div className='desktopView'>
                <Main />
                <AboutUs />
                <Events />
                <Contact />
            </div>
        </>
    );
}

export default Home;