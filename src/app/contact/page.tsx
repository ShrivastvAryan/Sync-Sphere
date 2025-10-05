'use client'
import React from 'react'
import ProfileCard from '@/components/ProfileCard'
import Shuffle from '@/components/Shuffle'
import Navbar from '@/ui/Navbar'

const page = () => {
  return (

    <>
    <Navbar/>
   {/* <div className='text-7xl w-full flex justify-center items-center pt-4 '>

        <Shuffle
  text="OUR TEAM"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/> 
    </div> */} 

    <div className='min-h-screen flex items-center justify-center bg-black gap-12'>
        <ProfileCard
        name="Aryan Shrivastava"
        title="Software Engineer"
        handle="shrivastavaryan"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/aryan.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
        showBehindGradient={true}
       />

      
    </div>

    </>
  )
}

export default page