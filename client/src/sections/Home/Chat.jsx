import React from 'react';
import { vector, send } from "../../assets";
import { Button, Input } from "../../components";

const Chat = () => {
    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='w-full h-full max-h-[70vh] overflow-y-auto'>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <img className='h-7 w-7' src={vector} />
                        <div className='max-w-xs rounded-lg text-xs border p-3 mb-2'>
                            <p>The open-source notifications infrastructure for developers</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-500 pl-10'>11:12 pm</p>
                </div>
                <div>
                    <div className='max-w-xs ml-auto rounded-lg text-xs border p-3 bg-slate-100'>
                        <p>Check out our growing community of engineers solving the Notification</p>
                    </div>
                    <p className='text-xs text-gray-500 pl-10 text-end mt-2 mr-2'>11:12 pm</p>
                </div>
            </div>
            <div className='w-full px-4 mt-4'>
                <div className='grid grid-cols-7 gap-4'>
                    <Input className="col-span-6" placeholder="Write a message down here..." type="text" />
                    <Button label={<img className='mx-auto h-6 w-8' src={send} />} />
                </div>
            </div>
        </div>
    )
}

export default Chat;