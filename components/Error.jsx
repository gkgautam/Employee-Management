import React from 'react'

function Error({message}) {
  return (
    <div className='success container mx-auto'>
    <div className='flex rounded justify-center mx-auto border border-red-200 bg-red-100 w-1/2 text-gray-900 text-md my-4'>
        {message}
    </div>
    </div>
  )
}

export default Error