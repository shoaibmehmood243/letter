import React, { useState } from 'react';
import { vector, send } from "../../assets";
import { Button, Input } from "../../components";

const Chat = ({ socket, userMessages, lastMessageRef, typingStatus }) => {
    const [message, setMessage] = useState("");
    const user = JSON.parse(localStorage.getItem('user'))?.user;
    const now = new Date();
    const options = { timeZone: 'Asia/Karachi', hour12: true, hour: 'numeric', minute: 'numeric' };
    const timeString = now.toLocaleString('en-US', options);

    const handleTyping = ()=> {
        socket.emit('typing', `${JSON.parse(localStorage.getItem('user'))?.user} is typing...`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message && localStorage.getItem('user')) {
            socket.emit('chat message', {
                text: message,
                name: JSON.parse(localStorage.getItem('user'))?.user,
                time: timeString,
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id
            })
            setMessage('');
        }
    }

    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='w-full h-full max-h-[70vh] overflow-y-auto'>
                <div>
                    {
                        userMessages?.map((data) => (
                            data.name === user ? (
                                <div key={data.id}>
                                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                                        <p>{data.text}</p>
                                    </div>
                                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>{data.time}</p>
                                </div>
                            ) : (
                                <div key={data.id}>
                                    <div className='flex items-center gap-2'>
                                        <img className='h-7 w-7' src={vector} />
                                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                    <p className='text-xs text-gray-500 pl-10'>{data.time}</p>
                                </div>
                            )
                        ))
                    }
                </div>
                <div ref={lastMessageRef} />
            </div>
            <form className='w-full px-4 mt-4' onSubmit={handleSubmit}>
                <div className='grid grid-cols-7 gap-4'>
                    <Input className="col-span-6" placeholder="Write a message down here..." type="text" value={message} onChange={(e)=> setMessage(e.target.value)} onKeyDown={handleTyping} />
                    <Button label={<img className='mx-auto h-6 w-8' src={send} />} />
                </div>
            </form>
            <p className='text-sm text-gray-400 pl-4 mt-2'>{typingStatus}</p>
        </div>
    )
}

export default Chat;