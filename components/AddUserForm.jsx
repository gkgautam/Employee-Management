import React, { useReducer } from 'react';
import Succes from './succes';
import Error from './Error';



function AddUserForm() {

    const formReducer = (state,e)=>{
        return{
            ...state,
        [e.target.name]:e.target.value
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0)
        {
            console.log('No data!');
        }
        // if(Object.keys(formData).length>0){
        //    return( <Succes message={'your data saved.'}/>)
        // }
    }

    const [formData,setFormData] = useReducer(formReducer,{});
  return (
    Object.keys(formData).length>0 ? <>
    {/* <Error message={'Something Wrong!'}/> */}
        <Succes message={'your data saved.'}/>
    </> :
   <>
    <form onSubmit={handleSubmit} method='post' className='grid lg:grid-cols-2 w-2/3 gap-4'>
    <div className='input-field py-1 pt-2'>
        <input type="text" onChange={setFormData} name='firstname' placeholder='First Name' className='border w-full px-5 py-3 focus:outline-none rounded-md'></input>
    </div>
    <div className='input-field py-1 pt-2'>
        <input type="text" onChange={setFormData} name='lastname' placeholder='Last Name' className='border w-full px-5 py-3 focus:outline-none rounded-md'></input>
    </div>
    <div className='input-field py-1'>
        <input type="text" onChange={setFormData} name='email' placeholder='Email' className='border w-full px-5 py-3 focus:outline-none rounded-md'></input>
    </div>
    <div className='input-field py-1'>
        <input type="text" onChange={setFormData} name='salary' placeholder='Salary' className='border w-full px-5 py-3 focus:outline-none rounded-md'></input>
    </div>
    <div className='input-field py-1'>
        <input type="date" onChange={setFormData} name='date' placeholder='Salary' className='border w-full px-5 py-3 focus:outline-none rounded-md'></input>
    </div>
    <div className='flex gap-10 items-center'>
    <div className='form-check py-1'>
        <input type="radio" onChange={setFormData} name="status" value='Active' id='radioDefault1' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white- checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
        <label htmlFor='radioDefault1' className='inline-block text-gray-800'>Active</label>
    </div>
    <div className='form-check py-1'>
        <input type="radio" onChange={setFormData} name="status" value='Inactive' id='radioDefault2' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white- checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'/>
        <label htmlFor='radioDefault2' className='inline-block text-gray-800'>Inactive</label>
    </div>
    </div>
    <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-100 hover:border-green-500 hover:text-green-500'>Add +</button>
   </form>
   </> 
  )
}

export default AddUserForm