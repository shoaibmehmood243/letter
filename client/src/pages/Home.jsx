import React from 'react';
import socketIO from "socket.io-client";
import Chat from '../sections/Home/Chat';
import Sidebar from '../sections/Home/Sidebar';
const SERVER = "http://localhost:8080"

const Home = () => {
  var socket = socketIO(SERVER);
  socket.on('connection', () => {
    console.log('I am connected');
  })
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>Messages</h1>
      <div className='bg-white rounded-xl shadow-md p-4 max-w-screen-2xl m-auto'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='border-r-2'>
            <Sidebar />
          </div>
          <div className='col-span-2'>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;