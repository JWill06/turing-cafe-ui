import './App.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Form from '../Form/Form';


function App() {
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
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form setReservations={setReservations}/>
      </div>
      <div className='resy-container'>
          <Card reservations={reservations} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App; 