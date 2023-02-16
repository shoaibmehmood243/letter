import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "../components";

const Signup = ({ socket }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleUserName = (e) => {
    setUser({user: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    socket.emit('newUser', { user, socketId: socket.id });
    setTimeout(()=> navigate("/"), 500);
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='h-100'>
        <h1 className='text-4xl font-bold text-center'>Welcome Back</h1>
        <p className='text-gray-500 mt-2 mb-6'>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Enter your name" label="Username" value={user?.user} onChange={handleUserName} />
          <div className='mt-6'>
            <Button type={"submit"} className="w-full" label="Signup" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;