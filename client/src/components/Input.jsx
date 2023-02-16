import React from 'react'

const Input = ({ label, type, placeholder, onChange, value, className, onKeyDown }) => {
  return (
    <div className={className}>
      <label className='d-block mb-1 text-lg'>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyDown={onKeyDown} className={`border border-gray-200 rounded-lg w-full px-2 py-3 focus:outline-none focus:border-teal-400`} />
    </div>
  )
}

export default Input;
