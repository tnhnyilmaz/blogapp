import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../Login/FormInput';

const RegisterFormCard = () => {
    const navigate = useNavigate();
    return (
        <div className='w-1/3 h-4/5 bg-white flex rounded-3xl flex-col gap-4 justify-center items-center shadow-2xl'>

            <span className='text-4xl self-start pl-12 font-bold text-left bg-gradient-to-bl from-blue2 to-blue4 bg-clip-text text-transparent'>Sign Up</span>
            <span className='text-xs self-start pl-12 font-bold bg-gradient-to-br from-blue2 to-blue4 bg-clip-text text-transparent'>Register to access your BlogApp  account</span>
            <FormInput type={"text"} placeholder={"First Name"} />
            <FormInput type={"text"} placeholder={"Last Name"} />
            <FormInput type={"text"} placeholder={"example@mail.com"} />
            <FormInput type={"password"} placeholder={"*******"} />
            <button onClick={()=>navigate("/")} className='w-4/5 h-14  text-white font-semibold text-xl bg-gradient-to-br from-blue2 to-blue4 rounded-xl'>
                Sign Up
            </button>
            <span className='font-medium'>Do you have an account?<button onClick={() => navigate("/")} className='bg-gradient-to-b font-bold from-blue2 to-blue4 bg-clip-text text-transparent'>Sign In</button></span>

        </div>
    )
}

export default RegisterFormCard