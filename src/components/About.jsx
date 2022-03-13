import React from 'react'

const About = () => {
  return (
    <div className="flex items-center justify-around my-2 ">
      <div className="text-center">
        <span className="text-[#6b727e] block font-semibold leading-none">0</span>
        <span className="text-[#c1c4cb] leading-none text-sm">posts</span>
      </div>
      <div className="text-center">
        <span className="text-[#6b727e] block font-semibold leading-none">0</span>
        <span className="text-[#c1c4cb] leading-none text-sm">followers</span>
      </div>
      <div className="text-center">
        <span className="text-[#6b727e] block font-semibold leading-none">0</span>
        <span className="text-[#c1c4cb] leading-none text-sm">following</span>
      </div>
    </div>
  )
}

export default About