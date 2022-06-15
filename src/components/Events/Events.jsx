import './Events.css';
import { EventsData } from '../../data/events.data';
import { useState } from 'react';

const Events = () => {
    const [eventNo, setEventNo] = useState(0);

    const previous = () => {
        if(eventNo !== 0)
            setEventNo(prev => (prev-1))
    }

    const next = () => {
        console.log(eventNo)
        if(eventNo < EventsData.length-1)
            setEventNo(prev => (prev+1))
    }

    return (
        <div id='events' className='Events__container'>
            <div style={{width: "100%"}}>
                <div className='Events__eventsContainer'>
                    <div className='Events__line'></div>
                    <div className='Events__events'>Events</div>
                </div>
            </div>
            <div className='Events__innerEventsContainer'>
                <div className='Events__eventDesc'>
                    <div className='Events__name'>{EventsData[eventNo].name}</div>
                    <div className='Events__desc'>{EventsData[eventNo].description}</div>
                </div>
                <div className='Events__eventImage'>
                    {
                        (eventNo > 0) && 
                            <div className='Events__leftButton' onClick={previous}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                    }
                    {
                        (eventNo < EventsData.length-1) &&
                            <div className='Events__rightButton' onClick={next}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                    }
                    <img alt="event" height='100%' width='100%' src={EventsData[eventNo].imageSrc} />
                </div>
            </div>
        </div>
    );
}

export default Events;