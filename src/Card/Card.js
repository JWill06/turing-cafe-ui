import React, {useState, useEffect} from 'react'
import './Card.css'
import ApiCall from '../ApiCall'

function Card() {
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
        .then(data => setReservations(data))
        .catch(err => console.error('Failed to fetch', err))
    }, [])

    const handleDelete = (deletedReservationId) => {
        const certainReservations = reservations.filter(reservation => reservation.id !== deletedReservationId)
        setReservations(certainReservations)
    }
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