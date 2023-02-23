import React from 'react'

const Button = ({ label, onClick, className, type, variant="primary" }) => {
  return (
    <button type={type} className={`${ variant === "primary" ? "bg-[#2190ff] text-white ring-[#2190ff] ring-2" : " bg-transparent text-gray-400 ring-1 ring-gray-200"} py-2 px-6 rounded-lg font-semibold text-center  ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button;