import './Events.css';
import { EventsData } from '../../data/events.data';
import { useState, useEffect } from 'react';
import { fetchBlogsURL } from '../../data/constants';

const Events = () => {
    const [eventNo, setEventNo] = useState(0);
    const [blogs, setBlogs] = useState({});

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

    useEffect(()=> {
        fetch(fetchBlogsURL)
            .then((response) => response.json())
            .then((data) => {console.log(data);setBlogs(data)});
    }, [])

    return (
        <div id="events" className="Events__container">
            <div className="Events__top-container">
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
                    <p className='Events__bottomLeftContainerh'>Theme of the Week:</p>
                    <p className='Events__bottomLeftContainerh'>BODY POSITIVITY</p>
                </div>
                <div className='Events__bottomRightContainer'>
                    <p className='Events__bottomRightContainerh'>Latest Blogs</p>
                    {blogs?.items && <p style={{fontSize: "25px", padding: "0 1rem", textAlign: 'center'}}>{blogs.items[0].title}</p>}
                    {blogs?.items && <a className='Events__aa' href={blogs.items[0].url}>Check this blog out!</a>}
                </div>
            </div>
        </div>
    );
}

export default Events;