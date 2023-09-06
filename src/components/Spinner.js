import React from 'react'
import loading from './Loading.gif'

export default function Spinner() {
  return (
    <div className='text-center' >
        <img src={loading} alt='Loading' style={{width:'48px',height:'48px'}}></img>
      </div>
  )
}


