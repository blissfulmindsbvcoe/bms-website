import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/footer.component';
import Navbar from '../../components/Navbar/Navbar.component';
import { EventsData } from '../../data/events.data';
import './Event.css';

const Event = () => {

    const { id } = useParams();
    let event = EventsData.find(e => e.id === id);

    return (
        <div>
            <Navbar isTeam={true} />
            {event === undefined ? 
                <div className='EventPage__NotFoundContainer'>
                    Event Not Found!
                </div>
            : 
                <div className='EventPage'>
                    <div className='EventPage__bannerSection'>
                        {event.name}
                    </div>
                    <div className='EventPage__summaryContainer'>
                        <div style={{width: '60%', paddingRight: '1em'}}>
                            <p className='EventPage__summaryHeading'>Event Summary</p>
                            <p>{event.description}</p>
                        </div>
                        <img alt='eventImage' src={event.imageSrc} />
                    </div>
                    <p className='EventPage__summaryHeading' style={{paddingLeft: '1em'}}>Photo Gallery</p>
                    {(event.photos === undefined || event.photos.length === 0) ?
                        <p style={{textAlign: 'center', fontSize: 'x-large', fontWeight: '600'}}>No Photos To Show</p>
                        :
                        <div className='EventPage__photoGallary'>
                            {event.photos.map(photo => <img alt='eventImage' style={{marginRight: '2%', marginTop: '1em'}} src={photo} height='250px' width='23%' />)}    
                        </div>
                    }
                </div>
            }
            <Footer isTeam={true} />
        </div>
    );
}

export default Event;