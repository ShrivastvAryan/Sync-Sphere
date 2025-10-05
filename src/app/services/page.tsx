import React from 'react'
import { MapPin, Heart, Briefcase } from "lucide-react";
import Image from 'next/image';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';

const Page = () => {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "MongoDB"
  ];

  return (
    <>
    <Navbar/>
      <div className=" bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        
       <div className="flex items-center justify-center">
  <div className="w-full bg-black border border-gray-700 shadow-xl rounded-2xl overflow-hidden">
    
    {/* Profile Image */}
    <div className="h-72 bg-gray-900 flex items-center justify-center">
      <div className='relative w-56 h-56 rounded-full border-4 border-gray-300 shadow-md overflow-hidden'>
        <Image
          src="/aryan.jpg"
          alt="User"
          fill
          className='object-cover'
        />
      </div>
    </div>

    {/* User Info */}
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-white">Aryan Shrivastava</h2>

      {/* Location */}
      <div className="flex items-center justify-center mt-2 text-gray-400">
        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
        <span>Indore, India</span>
      </div>

      <p className="text-gray-400 text-md py-1">Age: 22</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-5 justify-center">
         <p className='font-semibold'>Interest: </p>
        {["React", "Next.js", "Tailwind CSS", "TypeScript"].map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs text-white rounded-full 
              bg-white/5 backdrop-blur-md border border-white/10 shadow-sm hover:bg-white hover:text-black transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hobbies */}
      <div className="flex flex-wrap gap-2 mt-5 justify-center">
        <p className='font-semibold'>Hobbies: </p>
        {["Gaming", "Music", "Traveling", "Photography", "Reading", "Cycling"].map((hobby, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs text-white rounded-full 
              bg-white/5 backdrop-blur-md border border-white/10 shadow-sm hover:bg-white hover:text-black transition"
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Card 2 */}
        <div className='relative'>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white">
            
            {/* Image wrapper */}
            <div className="p-4">
              <div className='relative w-full h-[400px] rounded-2xl overflow-hidden'>
                <Image
                  src="/aryan.jpg"
                  alt="Profile"
                  fill
                  className='object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                />
              </div>
            </div>

            {/* Info section */}
            <div className="p-4">
              <div className="flex justify-between items-center py-2">
                <h2 className="font-semibold text-lg">Aryan Shrivastava</h2>
                <span className="text-sm text-gray-400">@aryanshrivastava</span>
              </div>

              {/* Skills */}
              <div className='flex flex-wrap gap-2 mt-3'>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs text-white rounded-full 
                      bg-white/5 backdrop-blur-md border border-white/10 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white font-medium
                             hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                >
                  Send Friend Request
                </button>
                <button
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white font-medium
                             hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder third column */}
       {/* Card 3 - Stats / Requests */}
<div className="w-full h-fit border border-gray-800 rounded-2xl bg-gray-900 p-6 text-white flex flex-col gap-6">

  {/* Friend Requests */}
  <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-sm">
    <h3 className="text-lg font-semibold">Friend Requests</h3>
    <p className="text-3xl font-bold mt-2">8</p>
    <p className="text-gray-400 text-sm">Pending requests</p>
  </div>

  {/* Connections */}
  <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-sm">
    <h3 className="text-lg font-semibold">Connections</h3>
    <p className="text-3xl font-bold mt-2">120</p>
    <p className="text-gray-400 text-sm">Total friends</p>
  </div>

</div>


      </div>

      <Footer/>
    </>
  )
}

export default Page;
