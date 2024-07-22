import React, {useState, useEffect} from 'react'
import './Card.css'
import ApiCall from '../ApiCall'

function Card({reservations, handleDelete}) {

   
    return (
        <>
        {reservations.map(reservation=> (
        <div className='cardContainer' key={reservation.id} >
            <h1 className='name'>{reservation.name}</h1>
            <p className='date'>{reservation.date}</p>
            <p className='time'>{reservation.time}</p>
            <p className='numGuests'>Number of guests: {reservation.number}</p>
            <button className='remove' onClick={() => handleDelete(reservation.id)}>Cancel</button>
        </div>
    ))}
    </>
  )
}

export default Card