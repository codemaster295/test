import React from 'react'
import { HiHome } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { IoWallet } from 'react-icons/io5'
import { BsPersonFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const FooterNavigation = ({ children }) => {
  return (
    <div className="">
      {children}
      <div className="fixed bottom-0 w-full left-0 py-4">
        <div className="flex justify-around items-center text-2xl text-[#a3a6b5]">
          <NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>
            <HiHome />
          </NavLink>
          <NavLink to="/search" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>
            <FaSearch />
          </NavLink>
          <NavLink to="/create" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>
            <IoIosAddCircle />
          </NavLink>
          <NavLink to="/wallet" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>
            <IoWallet />
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>
            <BsPersonFill />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default FooterNavigation