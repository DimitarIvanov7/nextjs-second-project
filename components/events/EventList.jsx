import React from 'react'
import Event from './Event'

const EventList = (props) => {
    const {items} = props
  return (
    <div>
        {items.map(item => <Event date={item.date} title={item.title} id={item.id} image={item.image} location={item.location}/>)}
    </div>
  )
}

export default EventList