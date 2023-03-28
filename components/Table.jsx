import React from 'react'

function Table({ data }) {
    return (
        <>
            <table className="min-w-full table-auto table table-striped">
                <thead>
                    <tr className='bg-gray-800'>
                        <th scope="col"><span className='text-gray-200'>NAME</span></th>
                        <th scope="col"><span className='text-gray-200'>EMAIL</span></th>
                        <th scope="col"><span className='text-gray-200'>SALARY</span></th>
                        <th scope="col"><span className='text-gray-200'>BIRTHDAY</span></th>
                        <th scope="col"><span className='text-gray-200'>STATUS</span></th>
                        <th scope="col"><span className='text-gray-200'>ACTIONS</span></th>
                        {/* <th scope="col"><span className='text-gray-200'>ID</span></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (Tr(item))
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table


function Tr({ id, name, avatar, email, salary, date, status }) {
    // {id,name,avatar,email,salary,status}
    return (
        <tr key={id} className='bg-gray-50 text-center'>
            <td className=' py-2 flex flex-row items-center'>
                <img src={avatar} alt={name} />
                <span className='text-center ml-2 font-semibold'>{name || 'Unknown'}</span>
            </td>
            <td className=' py-2'>{email || 'Unknown'}</td>
            <td className=' py-2'>{salary || 'Unknown'}</td>
            <td className='py-2'>{date || 'Unknown'}</td>
            <td className=' py-2'>
            <button className='cursor'><span className='bg-green-500 text-white px-2 rounded-md'>{status || 'Unknown'}</span></button>
            </td>
            <td className='py-2'>
                <button className='pr-1'>EDIT</button>
                <button>DELETE</button>
            </td>
        </tr>
    )
}