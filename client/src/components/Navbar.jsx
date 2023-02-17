import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../components";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.user?.username.charAt(0);
  const navigate = useNavigate();
  const logout = ()=> {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className='flex items-center justify-between px-10 py-4 shadow-lg shadow-[#2190ff]/5'>
      <div>
        <h3 className='text-xl font-semibold tracking-wider'><strong className='text-3xl text-[#2190ff] font-bold'>L</strong>etter</h3>
      </div>
      <div className='flex gap-6 items-center'>
        {
          user ?
          (<>
            <div className='uppercase text-2xl cursor-pointer hover:border-2 text-[#2190ff] hover:border-[#2190ff] rounded-lg h-12 w-16 flex items-center justify-center'><AiOutlineHome /></div>
            <div className='uppercase text-2xl cursor-pointer hover:border-2 text-[#2190ff] hover:border-[#2190ff] rounded-lg h-12 w-16 flex items-center justify-center'><HiOutlineChatBubbleBottomCenterText /></div>
            <div onClick={logout} className='uppercase text-2xl cursor-pointer hover:border-2 text-[#2190ff] hover:border-[#2190ff] rounded-lg h-12 w-16 flex items-center justify-center'><AiOutlinePoweroff /></div>
            <div className='uppercase text-xl cursor-pointer border-2 text-white bg-[#2190ff] border-[#2190ff] rounded-full h-10 w-10 flex items-center justify-center'>{username}</div>
          </>) : (
            <Link to="/login">
              <Button label="Login" />
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
