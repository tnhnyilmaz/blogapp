import React from 'react';
import FormInput from '../components/Login/FormInput';
import { useNavigate } from 'react-router-dom';
import RegisterFormCard from '../components/Register.jsx/RegisterFormCard';

const Register = () => {
    return (
        <div className='w-full h-screen relative flex flex-col justify-center items-center md:flex-row overflow-hidden bg-gradient-to-br from-[#60a5fa] to-[#1e3a8a]'>
            <div className="z-0 w-[700px] h-[700px] bg-gradient-to-bl opacity-80 blur-sm from-[#3b82f6] to-[#122e88] rounded-full absolute bottom-[-350px] left-[-100px] shadow-2xl"></div>

            <div className='z-20 w-full h-full flex justify-center items-center'>
                <RegisterFormCard />
            </div>
            <div className="hidden md:block w-[700px] h-[700px] bg-gradient-to-bl opacity-80 blur-sm from-[#3b82f6] to-[#122e88] rounded-full absolute top-[-350px] right-[-100px] shadow-2xl"></div>

        </div>
    )
}

export default Register