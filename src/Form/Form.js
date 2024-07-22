import React, {useState} from 'react'
import './Form.css'


function Form({setReservations}) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')

    const newReservation = (e) => {
        e.preventDefault();

        if(!name.trim() && !date.trim() && !time.trim() && !number.trim()){
            setError('All fields are required for submission')
            return
        }
        setReservations(prevReservations => [...prevReservations, {name, date, time, number}])
        setDate('')
        setNumber('')
        setName('')
    }
  return (
    <div className='formWrapper'>
        <form onSubmit={newReservation}>
        <input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='First Name'
        name='name'
        />
        <input 
        type='text'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='MM/DD'
        pattern='\d{2}/\d{2}'
        name='date'
        />
        <input 
        type='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder='Time'
        name='time'
        />
        <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder='Number of Guests'
        name='number'
        />
        <button type='submit' className='submitButton'>Make Reservation</button>
        </form>
    </div>
  )
}

export default Form