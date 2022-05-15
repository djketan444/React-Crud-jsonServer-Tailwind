import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");

    const navigate = useNavigate();

    const data = {
        name: name,
        email: email,
        phone: phone
    }

    function Submit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/users', data).then(
            navigate('/')
        )
    }
    return (
        <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Add User</h1>
            <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>

                <input value={name} onChange={(e) => SetName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={email} onChange={(e) => SetEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={phone} onChange={(e) => SetPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <button onClick={Submit} className='w-[80%] bg-blue-600 mt-4 text-xl text-white font-Montserrat font-semibold py-4 pl-6'>Add User</button>
            </form>

        </div>
    )
}

export default AddUser