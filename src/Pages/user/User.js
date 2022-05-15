import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function User() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`).then((res) => {
            setUser(res.data);
        })
    }, [])

    const { id } = useParams();
    return (
        <>
        <div className='w-full flex flex-col justify-center items-center'>
        <Link to="/" className='flex justify-center items-center w-48 bg-blue-400 text-white font-semibold text-xl h-12 rounded-lg mt-5' >Back To Home</Link>
            {user && (
                <div className='w-[700px] h-[200px] flex px-6 py-4 border border-black mt-16'>
                    <div className='w-5/12 flex flex-col justify-center sapce-y-4'     >
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Name</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Email</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>Phone</h2>
                    </div>
                    <div className='w-7/12 flex flex-col justify-center sapce-y-4'     >
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.name}</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
                        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.phone}</h2>
                        
                    </div>
                   
                </div>
                
            )}
           
        </div>
        
        </> 
    )
    
}

export default User