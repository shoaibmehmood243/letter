import React, { useEffect, useRef, useState } from 'react';
import ChatSection from '../sections/Chat/ChatSection';
import Sidebar from '../sections/Chat/Sidebar';

const Chat = ({ socket }) => {
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
    <div className='min-h-[88vh]'>
      <h1 className='text-4xl font-bold text-center my-10'>Messages</h1>
      <div className='bg-white rounded-xl shadow-lg shadow-[#2190ff]/5 p-4 min-h-[60vh] max-w-screen-2xl m-auto'>
        <div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='border-r-2'>
              <Sidebar socket={socket} />
            </div>
            <div className='col-span-2 min-h-[60vh]'>
              <ChatSection userMessages={userMessages} socket={socket} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;