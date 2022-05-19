import React from 'react'
import EventList from '../../components/events/EventList'

const Events = (props) => {

  return (
    <div>  
        <EventList items={props.events}/>
    </div>
  )
}

export default Events


export const getStaticProps = async () => {
    const data = await fetch('https://next-project-21e99-default-rtdb.firebaseio.com/data.json')

    const dataJSON = await data.json()

    console.log(dataJSON);

    if (!dataJSON || dataJSON.length === 0) {
        return { notFound: true };
    }
    
      return {
        props: {
        events: dataJSON
        },
        revalidate: 10,
      };
}