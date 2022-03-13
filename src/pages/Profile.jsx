import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Button from '../components/common/Button'
import FooterNavigation from '../components/FooterNavigation'
import TopBar from '../components/TopBar'

const Profile = () => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="container mx-auto px-4">
      <TopBar userName="Sarah D. Lewis" />
      <Banner userName="Sarah D. Lewis" balance="0" />
      <Button cbFunction={handleClick} extraClasses="text-white font-normal tracking-tighter leading-7 my-2 " text="Top Up Wallet" />
      <About />
      <hr style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(153, 153, 153, 0.75), rgba(0, 0, 0, 0))" }}
        className="w-11/12 mx-auto border-0 h-[2px] my-2"></hr>
      <p className="text-[#9898a2] text-center my-2">Hey, I'm Sarah! Full time content creator and traveller.Follow me for exclusive</p>
    </div>
  )
}

export default Profile