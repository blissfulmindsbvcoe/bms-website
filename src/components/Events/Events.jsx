import './Events.css';
import { EventsData } from '../../data/events.data';
import { useState } from 'react';
// import { useEffect } from 'react';

const Events = () => {
    const [eventNo, setEventNo] = useState(0);


    const nextImage = () => {
        if(eventNo === EventsData.length-1){
            setEventNo(0);
        } else {
            setEventNo(prev => (prev + 1));
        }
    }

    const prevImage = () => {
        if(eventNo === 0){
            setEventNo(EventsData.length-1);
        } else {
            setEventNo(prev => (prev - 1));
        }
    }

    // useEffect(()=> {
    //     setInterval(()=>{changeImage()}, 10000)
    // }, [])

    return (
        <div id="events" class="Events__container">
            <div class="Events__top-container">
                <div className='Events__inside-top-container'>
                    <div className='Events__topLeftContainer'>
                        {/* <div className='Events__topLeftContainerDiv1'>
                            <img src={shanti} alt="shaanti" height='100%'/>
                        </div> */}
                        <div className='Events__topLeftContainerDiv2'>
                            <p className='Events__name'>{EventsData[eventNo].name}</p>
                            <p className='Events__desc'>{EventsData[eventNo].description}</p>    
                        </div>
                    </div>
                    <div className='Events__topRightContainer'>
                        <div className='Events__Overlay'>
                            <div className='Events__leftOverlay' onClick={prevImage}><i className="fa-solid fa-angle-left" style={{fontSize: '50px', color: 'black'}}></i></div>
                            <div className='Events__rightOverlay' onClick={nextImage}><i className="fa-solid fa-angle-right" style={{fontSize: '50px', color: 'black'}}></i></div>
                        </div>
                        <img className='Events__image' src={EventsData[eventNo].imageSrc} alt="group pic" height='100%' width='100%'/>
                    </div>
                </div>
            </div>
            <div className="Events__bottom-container">
                <div className='Events__bottomLeftContainer'>
                    <p className='Events__bottomLeftContainerh'>Celebrating</p>
                    <p className='Events__bottomLeftContainerh'>Pride Month</p>
                </div>
                <div className='Events__bottomRightContainer'>
                    {/* <p className='Events__bottomRightContainerh'>Registration for</p>
                    <p className='Events__bottomRightContainerh'>Team Open</p>
                    <p className='Events__bottomRightContainersh'>Register Now</p> */}
                </div>
            </div>
        </div>
    );
}

export default Events;