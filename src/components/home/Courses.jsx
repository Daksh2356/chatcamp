import React from 'react'
import Card from './Card'

const Courses = () => {
  return (
    <>
      <div className=' bg-white h-[700px] w-full flex flex-col items-center justify-center'>
        <h1 className=" font-ourFont font-black text-3xl">Our Courses</h1>
        <div className='flex justify-between items-center mx-10 my-5'>
        <Card/>
        </div>
      </div>
    </>
  )
}

export default Courses
