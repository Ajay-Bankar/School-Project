import React, { useState } from 'react'


const FormContact = () => {
    const[Form, setForm]=useState({Fname:" ", Lname:" ", Email:" ", Phone:" "});
const changeForm=()=>{
    changeForm({...Form,[e.target.name]:e.target.value})
}

const formsubmit =(e)=>{
    e.preventDefault;
  
} 
  return (
    <div className='border-2 rounded-lg w-11/12 sm:w-[500px] bg-blue-900  overflow-hidden'>
    <form onSubmit={formsubmit}>
    <h1 className="font-bold sm:w-[480px] p-4 sm:text-3xl text-xl h-12 text-white">
    Send Us a Message</h1>
    <div className=' p-5' >

        <input className="sm:w-[480px] bg-blue-900  border-b-2 mt-10 w-[300px] font-bold sm:text-xl  " type='text' placeholder=' Name' name='Fname' onChange={changeForm} value={Form.F}/><br /><br /><br />
        <input className="sm:w-[480px] bg-blue-900  border-b-2   w-[300px]   font-bold sm:text-xl " type='text' placeholder=' Mobile Number' name='Fname' onChange={changeForm} value={Form.F}/><br /><br /><br />
        <input className="sm:w-[480px] bg-blue-900  border-b-2   w-[300px]  font-bold sm:text-xl " type='email' placeholder=' Subject' name='Fname' onChange={changeForm} value={Form.F}/><br /><br /><br />
        <input className="sm:w-[480px] bg-blue-900 border-b-2    w-[300px]  font-bold sm:text-xl " type='text' placeholder=' Message' name='Fname' onChange={changeForm} value={Form.F}/><br /><br /><br />
        
       
          
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

export default FormContact