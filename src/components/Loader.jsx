import React from 'react'
import {} from './loader.css'
import spinner from '../assets/spinner.gif'
const Loader = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <img src={spinner} className='mt-auto '/>
    </div>
  )
}

export default Loader
