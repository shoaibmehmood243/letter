import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from "../../components";
import { addFriends, unfollow } from '../../utils/api';

const Cards = ({ data, active, toggle }) => {
    const userId = JSON.parse(localStorage.getItem("user"))?.user?._id;
    const handleFollow = async (id) => {
        try {
            const res = await axios.post(addFriends, {
                user1_id: userId, user2_id: id
            })
            if (res.data?.error === true) {
                toast.error(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                toggle((prev) => !prev);
            } else {
                toast.success(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                toggle((prev) => !prev);
            }
        } catch (error) {
            toast.error(error.response.data.error.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            toggle((prev) => !prev);
            throw new Error(error);
        }
    }
    const handleUnFollow = async (id) => {
        try {
            const res = await axios.post(unfollow, {
                user1_id: userId, user2_id: id
            })
            if (res.data?.error === true) {
                toast.error(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                toggle((prev) => !prev);
            } else {
                toast.success(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                toggle((prev) => !prev);
            }
        } catch (error) {
            toast.error(error.response.data.error.message, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            toggle((prev) => !prev);
            throw new Error(error);
        }
    }
    return (<>
    {
        active === 1 ? (
            <div>
                <div className='rounded-lg bg-[#f5f9ff] px-4 py-8 shadow-lg shadow-[#2190ff]/10' key={data._id}>
                    <div className='flex items-center justify-start gap-6'>
                        <div className='h-10 w-10 bg-[#2190ff] text-white rounded-full flex items-center justify-center text-2xl uppercase'>{data?.username?.charAt(0)}</div>
                        <div>
                            <h1 className='capitalize text-xl font-semibold'>{data?.username}</h1>
                            <p className='text-xs text-gray-400 mt-1'>{data?.email}</p>
                            <p className='text-xs text-gray-400'>{data?.number}</p>
                        </div>
                    </div>
                    <div className='w-full mt-10 mb-3'>
                        <Button className="w-full" label="Follow" onClick={() => handleFollow(data._id)} />
                    </div>
                </div>
                <ToastContainer />
            </div>
        ) : (
            <div>
                <div className='rounded-lg bg-[#f5f9ff] px-4 py-8 shadow-lg shadow-[#2190ff]/10' key={data?.user2_id._id}>
                    <div className='flex items-center justify-start gap-6'>
                        <div className='h-10 w-10 bg-[#2190ff] text-white rounded-full flex items-center justify-center text-2xl uppercase'>{data?.user2_id?.username?.charAt(0)}</div>
                        <div>
                            <h1 className='capitalize text-xl font-semibold'>{data?.user2_id?.username}</h1>
                            <p className='text-xs text-gray-400 mt-1'>{data?.user2_id?.email}</p>
                            <p className='text-xs text-gray-400'>{data?.user2_id?.number}</p>
                        </div>
                    </div>
                    <div className='w-full mt-10 mb-3 flex items-center justify-between gap-4'>
                        <Button variant="secondary" className="w-full" label="Followed" />
                        <Button variant="secondary" className="w-full" label="Unfollow" onClick={() => handleUnFollow(data?.user2_id._id)} />
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }
    </>)
}

export default Cards;
