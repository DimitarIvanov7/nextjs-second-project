import React from 'react'
import { useRef } from 'react'


const SearchEvents = (props) => {

    const year = useRef(null)
    const month = useRef(null)

  return (
    <div>
        <input ref={year} type="text" placeholder='year'/>
        <label  htmlFor="year">Year</label>
        <select ref={month} name="year" id="year">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <button onClick={() => props.onSearch(year.current.value, month.current.value)}>Search</button>
    </div>
  )
}

export default SearchEvents