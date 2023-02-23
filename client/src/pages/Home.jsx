import React, { useEffect, useState } from 'react';
import axios from "axios";
import { getAllUsers, getFriends } from '../utils/api';
import { Loader } from "../components";
import Cards from '../sections/Home/Cards';
import DataSection from '../sections/Home/DataSection';

const Home = () => {
  const [data, setData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setIsActive] = useState(1);
  const [refresh, toggle] = useState(false);

  const getData = async()=> {
    try {
      axios.get(getAllUsers).then((res) => {
        if(res.data.success === true) {
          setIsLoading(false);
          setData(res.data.data)
        } else {
          setIsLoading(false);
          setData([]);
        }
      })
    } catch (error) {
      setIsLoading(false);
      setData([]);
      throw new Error(error);
    }
  }

  const getFriendsData = async()=> {
    try {
      axios.get(getFriends).then((res) => {
        if(res.data.success === true) {
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
  
  useEffect(()=> {
    if(active === 1) {
      getData();
    } else if(active === 2) {
      getFriendsData();
    }
  }, [active, refresh]);

  return (
    <div className='min-h-[86vh]'>
      <div className='max-w-[1500px] m-auto my-10 rounded-2xl p-10 bg-white'>
        <div className='flex items-center gap-6 justify-center mb-8'>
          <div onClick={()=> setIsActive(1)} className={`${active === 1 ? "bg-[#2190ff]" : "bg-[#f5f9ff]"} ${active === 1 ? "text-white" : "text-black"} rounded-lg min-w-[300px] shadow-md shadow-[#2190ff]/5 hover:bg-[#2190ff] hover:text-white font-semibold cursor-pointer px-4 py-6 text-center`}>
            People you might like
          </div>
          <div onClick={()=> setIsActive(2)} className={`${active === 2 ? "bg-[#2190ff]" : "bg-[#f5f9ff]"} ${active === 2 ? "text-white" : "text-black"} rounded-lg min-w-[300px] shadow-md shadow-[#2190ff]/5 hover:bg-[#2190ff] hover:text-white font-semibold cursor-pointer px-4 py-6 text-center`}>
            (200) Followers
          </div>
        </div>

        {/* get data */}
        {
          active === 1 ? (
            <DataSection data={data} loading={isLoading} active={active} toggle={toggle} />
          ) : (
            <DataSection data={friends} loading={isLoading} active={active} toggle={toggle} />
          )
        }
      </div>
    </div>
  )
}

export default Home;
