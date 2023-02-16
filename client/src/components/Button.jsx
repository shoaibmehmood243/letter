import React from 'react'

const Button = ({ label, onClick, className, type }) => {
  return (
    <button type={type} className={`bg-teal-300 py-2 px-4 rounded-lg ring-2 ring-teal-400 font-semibold text-center ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button;
