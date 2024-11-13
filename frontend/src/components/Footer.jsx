import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ----------------left section----------------------- */}
        <div>
            <img className='text-xl font-medium mb-5' src={assets.logo} alt="" />
            <p className='flex flex-col gap-2 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam similique totam autem aperiam molestias, adipisci et, voluptatum deleniti incidunt alias ab voluptates corrupti aspernatur ut delectus voluptatem animi iure velit consequatur ipsa debitis cumque. Ab reiciendis nihil similique? Quidem!</p>
        </div>

        {/* -------------------center section--------------------------- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* ------------------------right section------------------------------- */}
        <div>
            <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <p>+91 1234567891</p>
                <p>princesahu@gmail.com</p>
            </ul>
        </div>
      </div>
      {/* --------------------------copyright text------------------------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Alumni Association - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
