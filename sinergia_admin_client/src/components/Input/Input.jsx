import React from 'react'

export default function Input({id, label, type, value, onChange, placeholder, name }) {


  return (
    <div className='w-full my-1'>
        <label htmlFor={id}>{label}</label>
        <input type={type} value={value} id={id} placeholder={placeholder} name={name} className='border px-4 border-black/40 rounded-md w-full placeholder:px-1' onChange={onChange} />
    </div>
 )
}
