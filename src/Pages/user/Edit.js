import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");

    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:3001/users/${id}`).then((res)=>{
            SetName(res.data.name)
            SetEmail(res.data.email)
            SetPhone(res.data.phone)

        })
    },[])

    const data ={
        name:name,
        email:email,
        phone:phone,
    }

    const{id} = useParams();
    
    function Update(e){
        e.preventDefault();
        axios.put(`http://localhost:3001/users/${id}`,data).then(navigate("/"))
    }

    

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Edit User</h1>
            <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>

                <input value={name} onChange={(e) => SetName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => SetEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={phone} onChange={(e) => SetPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <button onClick={Update} className='w-[80%] bg-blue-600 mt-4 text-xl text-white font-Montserrat font-semibold py-4 pl-6'>Update User</button>
            </form>

        </div>
  )
}

export default Edit