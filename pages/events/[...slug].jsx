import React from 'react'
import { filterData } from '../api/hello'
import EventList from '../../components/events/EventList'

const Search = (props) => {

    if (!props.events) {
        return <p className='center'>Loading...</p>;
      }

      if (props.events.length === 0) {
        return <p className='center'>No such events</p>;
      }
  return (
    <div>
        <h2>Search</h2>
        <EventList items={props.events}/>
    </div>
  )
}

export default Search


export const getServerSideProps = async context => {
    const { params } = context;
    const {slug} = params

    const year = slug[0]
    const month = slug[1]

    const numYear = +year
    const numMonth = +month

    if(isNaN(numMonth) || isNaN(numYear) || numMonth > 12 || numMonth < 0) {
        return {
            props: { hasError: true },
            // notFound: true,
            // redirect: {
            // destination: '/error'
            // }
        }
    }

    const filteredEvents = await filterData(numYear, numMonth)

    return {
        props: {
            events: filteredEvents
        }
    }
}