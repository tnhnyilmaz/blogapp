import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';


const LoginFormCard = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home")
    };

    return (
        <div className='w-3/5 h-3/5 bg-white rounded-3xl gap-7 p-2 py-6 shadow-2xl flex flex-col items-center text-left'>

            <span className='text-4xl self-start pl-10 font-bold text-left bg-gradient-to-bl from-blue2 to-blue4 bg-clip-text text-transparent'>Sign In</span>
            <span className='text-xs self-start pl-10 font-bold bg-gradient-to-br from-blue2 to-blue4 bg-clip-text text-transparent'>Login to access your BlogApp  account</span>
            <FormInput type={"text"} placeholder={"example@mail.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <FormInput type={"password"} placeholder={"*******"}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className='w-4/5 h-14  text-white font-semibold text-xl bg-gradient-to-br from-blue2 to-blue4 rounded-xl'>
                Sign In
            </button>

            <span className='font-medium'>Don't have an account? <button onClick={() => navigate("/register")} className='bg-gradient-to-b font-bold from-blue2 to-blue4 bg-clip-text text-transparent'>Sign Up</button></span>
        </div>
    )
}

export default LoginFormCard