import React from 'react'

const FormInput = ({ type, placeholder, value, onChange }) => {
    return (
        <div className='w-4/5 h-14 border border-gray-500 rounded-xl'>
            <input type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder} className='w-full h-full  rounded-xl bg-transparent placeholder: p-2 border-none focus:outline-none ' />
        </div>
    )
}

export default FormInput