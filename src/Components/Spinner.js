import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-2'>
            <div className="spinner"></div>
            <p className=' text-lg font-semibold'>Loading...</p>
        </div>
  )
}

export default Spinner