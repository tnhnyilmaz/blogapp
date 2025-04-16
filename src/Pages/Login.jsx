import React from 'react'
import LoginFormCard from '../components/Login/LoginFormCard'
import LoginWelcom from '../components/Login/LoginWelcom'

const Login = () => {
    return (
        <div className='w-full h-screen flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-[#60a5fa] to-[#1e3a8a]'>

            <LoginWelcom />
            <div className='w-full md:w-1/2 h-1/2 md:h-screen relative flex justify-center items-center'>
                <div className="hidden md:block w-[700px] h-[700px] bg-gradient-to-bl opacity-80 blur-sm from-[#3b82f6] to-[#122e88] rounded-full absolute top-[-350px] right-[-100px] shadow-2xl"></div>

                <div className='z-10 w-full h-full flex justify-center items-center px-4 py-8 md:p-0'>
                    <LoginFormCard />
                </div>
            </div>
        </div>
    )
}

export default Login