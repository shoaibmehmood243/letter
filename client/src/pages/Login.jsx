import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { login } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../components';

const Login = ({ socket }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { handleSubmit, formState: { errors }, register } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsClicked(true);
      const res = await axios.post(login, { ...data });
      if (res.data?.error === true) {
        toast.error(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        setIsClicked(false);
      } else if (res.data?.success === true) {
        toast.success(res.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        setIsClicked(false);
        localStorage.setItem("user", JSON.stringify({user: {...res.data.data}}));
        socket.emit('newUser', { ...data, socketId: socket.id });
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      setIsClicked(true);
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      setIsClicked(false);
      throw new Error(error);
    }
  }
  return (
    <div className='h-[92vh] flex items-center justify-center'>
      <div className='h-100 max-w-[450px] w-[450px]'>
        <h1 className='text-4xl font-bold text-center'>Welcome Back</h1>
        <p className='text-gray-500 mt-2 mb-16 text-center'>Please enter your details.</p>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label className='d-block mb-1 text-lg'>Username</label>
            <input {...register("username", { required: 'Username is required' })} type="text" placeholder="Enter your name"
              className={`border ${errors?.username?.message ? 'border-red-500' : 'border-gray-200'} rounded-lg w-full px-2 py-3 focus:outline-none focus:border-2 focus:border-[#2190ff]`} />
            <span className='text-sm text-red-500'>{errors?.username?.message}</span>
          </div>
          <div className='mb-3'>
            <label className='d-block mb-1 text-lg'>Password</label>
            <input {...register("password", { required: 'Password is required', min: { value: 6, message: "Password length must be minimum 6." } })} type="password" placeholder="Enter your password" label="Password"
              className={`border ${errors?.password?.message ? 'border-red-500' : 'border-gray-200'} rounded-lg w-full px-2 py-3 focus:outline-none focus:border-2 focus:border-[#2190ff]`} />
            <span className='text-sm text-red-500'>{errors?.password?.message}</span>
          </div>
          <div className='mt-10'>
            <Button type={"submit"} className="w-full" label={isClicked ? <Loader /> : "Login"} />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login;