import Navbar from '../../components/Navbar/Navbar.component';
import eventImage from '../../assets/Main/nature.jpg';
import './Main.css';

const Main = () => {
    return (
        <div className='Main__container'>
            <div className='Main__leftContainer'>
                <p className='Main__leftContainerp'>Blissful Minds Society</p>
                <p className='Main__leftContainerSubp'>Keeping Mental Health in Check</p>
                <div className='Main__line'></div>
                <div className='Main__bottomLeftContainer'>
                    <div className='Main__BLContainer1'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>02</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Orientation</div>
                    </div>
                    <div className='Main__BLContainer2'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>03</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Workshop</div>
                    </div>
                    <div className='Main__BLContainer3'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>04</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>BMS Fiesta</div>
                    </div>
                </div>
            </div>
            <div className='Main__rightContainer'>
                <img className='Main__rightContainerimg' src={eventImage} alt="img" />
            </div>
        </div>
    );
}

export default Main;