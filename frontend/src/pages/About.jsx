import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>ChillFits was born out of a passion for fashion and a desire to revolutionize the way people express their style. Our journey began with a simple idea: to provide a platform where customers can effortlessly discover, explore, and shop the latest trends from the comfort of their homes.</p>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality apparel that caters to every taste and lifestyle. From streetwear and casual fits to premium essentials, we offer an extensive collection sourced from trusted brands and designers.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at ChillFits is to empower individuals with style, confidence, and convenience. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We carefully curate and vet each piece to ensure it meets our high-quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trend-Forward Styles:</b>
            <p className=' text-gray-600'>We bring you the latest trends and timeless classics to keep your wardrobe fresh.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our dedicated team is here to assist you every step of the way, ensuring your satisfaction is our priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
