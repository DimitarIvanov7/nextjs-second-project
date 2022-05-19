import React from 'react'
import EventInfo from '../../components/events/EventInfo'

const Event = (props) => {
    const event = props.loadedEvent

    if(!event) return <p>Loading...</p>
    const {date, description, image, title, location} = event

    if(!event) return <p>Loading...</p>
  return (
    <div>
        <EventInfo>
            <img src={image} alt="event image" />
            <h2>{title}</h2>
            <div>
                <time>{date}</time>
                <address>{location}</address>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </EventInfo>
    </div>
  )
}

export default Event

const getData = async () => {
    const data = await fetch('https://next-project-21e99-default-rtdb.firebaseio.com/data.json')

    const dataJSON = await data.json()
    return dataJSON
}


export const getStaticPaths = async() => {
    const data = await getData()
    
    const paths = data.map(event => event.id).map((id) => ({ params: { eventId: id } }))

    return {
        paths: paths,
        fallback: true,
      };
}

export const getStaticProps = async (context) => {

    const { params } = context;

  const eventId = params.eventId;

  const data = await getData();

  const eventData = data.find((event) => event.id === eventId);

  console.log(eventData);

  if(!eventData) return {
    notFound:true
    }
  

  return {
    props: {
      loadedEvent: eventData,
    },
  };

}