import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { format } from 'date-fns';

const Header = () => {
  const [date, setDate] = useState(new Date())
  const formattedDate = format(date, 'PP')

  return (
    <div className="navbar bg-base-100 border font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='border'><Link to='/'> <span className=' text-lg'><FcPlus /></span>Create</Link></li>
            <li><Link to='/compleatTask'>Completed Tasks</Link></li>
            <li tabIndex="0">
              <Link to='/todo'>  To-Do</Link>
            </li>
            <li><Link to='/calender'>Calendar</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl hidden lg:block">Task Management App</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className='border rounded-lg'><Link to='/'> <span className=' text-lg'><FcPlus /></span>Create</Link></li>
          <li><Link to='/compleatTask'>Completed Tasks</Link></li>
          <li tabIndex="0">
            <Link to='/todo'>  To-Do</Link>
          </li>
          <li><Link to='/calender'>Calendar</Link></li>
        </ul>
      </div>
      <div className="navbar-end px-6">
        <h4 className='btn-disabled btn bg-[#0000FF] text-white'> Today- {formattedDate}</h4>
      </div>
    </div>
  );
};

export default Header;