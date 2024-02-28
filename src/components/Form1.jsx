import React, { useState } from 'react'


const Form1 = () => {
    const[Form, setForm]=useState({Fname:" ", Lname:" ", Email:" ", Phone:" "});
const changeForm=()=>{
    changeForm({...Form,[e.target.name]:e.target.value})
}

const formsubmit =(e)=>{
    e.preventDefault;
  
} 
  return (
    <div className='border-2 rounded-lg w-[500px] bg-blue-900  overflow-hidden'>
    <form onSubmit={formsubmit}>
    <h1 className="font-bold sm:w-[480px] p-4 sm:text-3xl text-xl h-12 text-white mt-5">
    Please fill the Form below to Place Admission Enquiry</h1>
    <div className=' p-5' >

        <input className="sm:w-[480px] bg-blue-900  border-b-2 mt-14   font-bold sm:text-xl  " type='text' placeholder=' Name of Student' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
        <input className="sm:w-[480px] bg-blue-900  border-b-2 mt-5     font-bold sm:text-xl " type='text' placeholder=' Admission Require For Which Grade' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
        <input className="sm:w-[480px] bg-blue-900  border-b-2 mt-5    font-bold sm:text-xl " type='text' placeholder=' Parent Name' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
        <input className="sm:w-[480px] bg-blue-900 border-b-2  mt-5    font-bold sm:text-xl " type='text' placeholder=' Contact Number' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
         <input className="sm:w-[480px] bg-blue-900 border-b-2 mt-5     font-bold sm:text-xl " type='email' placeholder=' Email ID' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
         <input className="sm:w-[480px] bg-blue-900 border-b-2 mt-5    font-bold sm:text-xl " type='text' placeholder=' Residential Address' name='Fname' onChange={changeForm} value={Form.F}/><br /><br />
    
                <button
                  type="submit"
                  className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
                >
                  Send
                </button>
            </div>
          
    </form>
    </div>
  )
}

export default Form1