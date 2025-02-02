import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo & About Section */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="ChillFits Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              ChillFits is your go-to destination for stylish, comfortable, and trendy casual wear.  
              We believe fashion should be effortless and fun, bringing you premium quality fits that  
              keep you looking fresh all year round.
            </p>
        </div>

        {/* Company Links */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Collections</li>
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Contact Information */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 99014 55110</li>
                <li>support@chillfits.com</li>
            </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>© 2025 ChillFits. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
