import Navbar from '../Navbar/Navbar.component';
import './Main.css';

const Main = () => {
    return (
        <div className='Main__container'>
            <Navbar />
            <div className='Main__innerContainer'>
                <div className='Main__leftContainer'>
                    <div className='Main__taglineContainer'>
                        <div className='Main__line'></div>
                        <p className='Main__tagline'>KEEPING MENTAL HEALTH IN CHECK</p>
                    </div>
                    <p className='Main__name1'>Blissful Minds</p>
                    <p className='Main__name2'>Society</p>
                    <p className='Main__tagline2'>Creating a community for all to be aware and know more about mental health.</p>
                </div>
                <div className='Main__rightContainer'>
                    <div className='Main__impNewsHeading'>IMPORTANT NEWS</div>
                    <div className='Main__news'></div>
                </div>
            </div>
        </div>
    );
}

export default Main;