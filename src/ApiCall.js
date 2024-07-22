import React from 'react'

function ApiCall() {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json)
  .then(data => data.reservations)
  .catch(err => console.error('Failed to fetch', err))
}

export default ApiCall