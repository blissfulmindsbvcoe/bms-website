import Team from '../../components/Team/Team';
import { useEffect } from 'react';
import './About.css'

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
                <Team />
            </div>
        </>
    );
}

export default Home;