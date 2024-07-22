import React, {useState} from 'react'


function Form() {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(0)
    const [error, setError] = useState('')
    const [details, setDetails] = useState([])

    const onSubmit = (newDetails) => {
        setDetails([...details, newDetails])
    }

    const newReservation = (e) => {
        e.preventDefault();

        if(!name.trim() & !date.trim() & !time.trim() & !guests.trim()){
            setError('All fields are required for submission')
            return
        }
        onSubmit({name, date, time, guests})
        setDate('')
        setGuests('')
        setName('')
    }
  return (
    <div>
        <form onSubmit={newReservation}>
        <input 
        type='text'
        value={name}
        onChange={(e) => e.target.value}
        placeholder='First Name'
        />
        <input 
        type='date'
        value={date}
        onChange={(e) => e.target.value}
        placeholder='Date'
        />
        <input 
        type='time'
        value={time}
        onChange={(e) => e.target.value}
        placeholder='Time'
        />
        </form>
    </div>
  )
}

export default Form