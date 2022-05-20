import React from 'react'
import EventInfo from '../../components/events/EventInfo'
import { getData } from '../api/hello'

const Event = (props) => {
    const event = props.loadedEvent

    if(!event) return <p>Loading...</p>
    const {date, description, image, title, location} = event

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


export const getStaticProps = async (context) => {
    const { params } = context;

  const eventId = params.eventId;

  const events = await getData();

  if (!events.ok || events.data.length === 0) {
    return { notFound: true };
}

  const eventData = events.data.find(event => event.id === eventId);

  if(!eventData) return {
    notFound:true
    }

  return {
    props: {
      loadedEvent: eventData,
    },
    revalidate: 600
  };

}

export const getStaticPaths = async() => {
    const events = await getData()
    const paths = events.ok ? events.data.map(event => ({ params: { eventId: event.id } })) : [{params: { eventId: "" }}]

    return {
        paths: paths,
        fallback: true,
    };
}