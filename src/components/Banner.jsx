import React from 'react'

const Banner = ({userName , balance}) => {
  return (
    <div className="my-4">
      <div className="rounded-3xl  relative overflow-hidden h-40  z-0   ">
        <img className="w-full h-full object-cover blur-[1px]" src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__340.jpg"  />
        <div className="flex items-center top-1/2 transform -translate-y-1/2 absolute px-5 z-10 space-x-6">
          <div className="w-24 h-24   rounded-full  overflow-hidden">
            <img className="w-full h-full object-cover" src="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=" alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="text-white font-semibold tracking-tighter leading-7 text-xl ">{userName}</h1>
            <div className="">
              <span className="text-gray-50 block text-sm">Balance</span>
            <span className="text-white font-semibold  leading-none text-xl">{`$ ${balance}`}</span>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-r from-gray-200 to-blue-500  opacity-50 z-5 top-0 left-0"></div>
      </div>
    </div>
  )
}

export default Banner