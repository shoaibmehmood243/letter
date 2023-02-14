import React from 'react';
import { vector } from "../../assets"

const Sidebar = () => {
    const users = [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
    ]
  return (
    <div className='w-full h-full max-h-[75vh] overflow-y-auto'>
        {
            users.map((user) => (
                <div className='flex items-center justify-between pr-8 cursor-pointer hover:bg-teal-400 py-4 pl-3 mr-3 rounded-lg hover:text-white'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-8 w-8' src={vector} />
                        <h4 className='font-semibold'>John</h4>
                    </div>
                    <p className='text-gray-500 text-xs'>12:12 pm</p>
                </div>
            ))
        }
    </div>
  )
}

export default Sidebar;