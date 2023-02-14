import React from 'react';
import { Input, Button } from "../components";

const Signup = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='h-100'>
        <h1 className='text-4xl font-bold text-center'>Welcome Back</h1>
        <p className='text-gray-500 mt-2 mb-6'>Welcome back! Please enter your details.</p>
        <form>
          <Input type="text" placeholder="Enter your name" label="Username" />
          <div className='mt-6'>
            <Button className="w-full" label="Signup" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;