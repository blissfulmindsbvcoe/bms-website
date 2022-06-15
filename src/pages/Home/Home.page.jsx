import Main from '../../components/Main/Main.component';
import AboutUs from '../../components/AboutUs/AboutUs.component'
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import Events from '../../components/Events/Events';
import { useEffect } from 'react';
// import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Main />
            <AboutUs />
            <Team />
            <Events />
            <Contact />
        </>
    );
}

export default Home;