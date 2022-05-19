import React from 'react'
import Button from '../ui/Button'

const Event = (props) => {
    const {date, title, id, image,location } = props
    const visitLink = `/events/${id}`;

  return (
    <div>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <div>
            <time>{date}</time>
            <address>{location}</address>
        </div>
        <Button link={visitLink}/>
    </div>
  )
}

export default Event