import React from 'react'

const Button = ({ label, onClick, className, type }) => {
  return (
    <button type={type} className={`bg-[#2190ff] py-2 px-6 rounded-lg ring-2 ring-[#2190ff] font-semibold text-center text-white ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button;
