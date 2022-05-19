import React from 'react'
import Link from 'next/link'

const Button = ({link}) => {
  return (
    <div>
        <Link href={link}>View Event</Link>
    </div>
  )
}

export default Button