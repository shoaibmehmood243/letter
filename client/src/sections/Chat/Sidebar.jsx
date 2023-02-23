import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { vector } from "../../assets"
import { getFriends } from '../../utils/api';

const Sidebar = ({ socket }) => {
    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getFriendsData = async () => {
        try {
            axios.get(getFriends).then((res) => {
                if (res.data.success === true) {
                    setIsLoading(false);
                    setFriends(res.data.data);
                } else {
                    setIsLoading(false);
                    setFriends([]);
                }
            })
        } catch (error) {
            setIsLoading(false);
            setFriends([]);
            throw new Error(error);
        }
    }

    useEffect(() => {
        getFriendsData();
        socket.on('newUserResponse', (data) => {
            setUsers(data);
        });
    }, [socket, users]);
    return (
        <div className='w-full h-full max-h-[75vh] overflow-y-auto'>
            {
                !friends[0] ?
                    (
                        <div>
                            <h1 className='text-center'>No user added</h1>
                        </div>
                    ) : (
                        friends.map((user, index) => (
                            <div key={index} className='flex items-center justify-between pr-8 cursor-pointer hover:bg-[#2190ff] py-4 pl-3 mr-3 rounded-lg hover:text-white'>
                                <div className='flex gap-2 items-center'>
                                    <div className='h-8 w-8 bg-[#2190ff] text-white rounded-full flex items-center justify-center uppercase'>{user?.user2_id?.username[0]}</div>
                                    <h4 className='font-semibold'>{user?.user2_id?.username}</h4>
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
}

export default Sidebar;