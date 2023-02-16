import React, { useEffect, useRef, useState } from 'react';
import Chat from '../sections/Home/Chat';
import Sidebar from '../sections/Home/Sidebar';

const Home = ({ socket }) => {
  const [userMessages, setUserMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(()=> {
    socket.on('messageResponse', (data) => setUserMessages([...userMessages, data]))
  }, [socket, userMessages]);

  useEffect(()=> {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [userMessages]);

  useEffect(()=> {
    socket.on('typingResponse', (data)=> setTypingStatus(data));
  }, [socket]);

  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>Messages</h1>
      <div className='bg-white rounded-xl shadow-md p-4 max-w-screen-2xl m-auto'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='border-r-2'>
            <Sidebar socket={socket} />
          </div>
          <div className='col-span-2'>
            <Chat userMessages={userMessages} socket={socket} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;