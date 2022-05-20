import React from 'react'
import EventList from '../../components/events/EventList'
import { getData } from '../api/hello'
import SearchEvents from '../../components/ui/Search'
import { useRouter } from 'next/router'

const Events = (props) => {
    const router = useRouter()
    const handleSearch = (year, month) => {
        router.push(`events/${year}/${month}`)
    }

  return (
    <div>  
        <SearchEvents onSearch={handleSearch} />
        <EventList items={props.events}/>
    </div>
  )
}

export default Events


export const getStaticProps = async () => {
    const events = await getData()

    console.log(events);

    if (!events.ok || events.data.length === 0) {
        return { notFound: true };
    }
    
      return {
        props: {
        events: events.data
        },
        revalidate: 10,
      };
}