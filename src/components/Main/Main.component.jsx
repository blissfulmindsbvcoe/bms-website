import Navbar from '../../components/Navbar/Navbar.component';
import eventImage from '../../assets/Main/landing2.jpg';
import orientation from '../../assets/Main/orientation1.jpg';
import Webinar from '../../assets/Main/event2.jpg';
import mind from '../../assets/Main/mindyourmind1.jpg';

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
                        <div className='Main__NameEvent'>Mind Your Mind</div>
                        <img src={mind} alt="img" height='60%' width='75%'/>
                    </div>
                    <div className='Main__BLContainer2'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>03</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Webinar</div>
                        <img  src={Webinar} alt="img" height='60%' width='75%'/>
                    </div>
                    <div className='Main__BLContainer3'>
                        <div className='Main__NumberContainer'>
                            <div className='Main__Number'>04</div>
                            <div className='Main__horizontalLine'></div>
                        </div>
                        <div className='Main__NameEvent'>Orientation</div>
                        <img  src={orientation} alt="img" height='60%' width='75%'/>
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