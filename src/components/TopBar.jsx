import React from 'react'
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai'
const TopBar = ({ userName }) => {
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="p-2 border-gray-100 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-150 ease-linear">
        <MdModeEditOutline className="text-[#616d86] text-2xl" />
      </div>
      <h1 className="text-[#616979] font-semibold text-lg leading-5">{userName}</h1>
      <div className="p-2 border-gray-100 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-150 ease-linear">
        <AiFillSetting className="text-[#616d86] text-2xl" />
      </div>
    </div>
  )
}

export default TopBar