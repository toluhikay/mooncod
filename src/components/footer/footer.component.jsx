import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logomoon.png'
import {GithubOutlined, GoogleOutlined, LinkedinFilled, LinkedinOutlined, RedditCircleFilled, RedditOutlined, SlackOutlined, TwitterOutlined} from '@ant-design/icons'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()

  
  return (
    <Fragment>
      <div className='px-3 bg-[#080A0C] md:px-32 '>
        <div className='bg-[#080A0C] text-white flex flex-col md:flex-row md:justify-between md:pt-24 pb-6 '>
          <div>
            <p className=' text-lg font-medium mb-4 '>COMPANY</p>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >About Moncod</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Affiliate</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Blog</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Digital Asset Disclosures</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Legal & Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' text-lg font-medium mb-4 '>PRODUCTS</p>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Desktop Wallet</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Mobile Wallet</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' text-lg font-medium mb-4 '>SUPPORT</p>
            <div>
              <ul>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Support</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Legal Inquires</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Status</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Careers</Link>
                </li>
                <li className='mb-4'>
                  <Link to='/' className='text-base text-[#DAE0E7] font-medium' >Enquires and Sponsorship</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=' text-lg font-medium mb-4 '>JOIN OUR COMMUNITY</p>
            <div>
              <p className=' w-80 mb-4'>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form action="">
                <input type="text" placeholder='Enter your email address' className=' bg-inherit appearance-none border-[#fff] border-2 py-3 px-3 w-72 rounded-full outline-none text-[#000] mb-4'/>
                <br />
                <button className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] w-72 py-3 rounded-full'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className=' pb-14 flex flex-col md:flex-row justify-between '>
          <div className='flex justify-between items-center md:w-1/2'>
            <img src={logo} alt=""  className=' border-r-2 border-[#fff] pr-8 '/>
            <p className='text-white'>© <span>{year}</span> Moncod - All Rights Reserved</p>
          </div>
          <div className='text-white w-1/3 flex justify-between'>
            <TwitterOutlined/>
            <GithubOutlined/>
            <GoogleOutlined/>
            <RedditCircleFilled/>
            <LinkedinFilled/>
            <SlackOutlined/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer