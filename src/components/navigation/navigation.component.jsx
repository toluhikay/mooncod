import React, {Fragment, useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import {DownOutlined} from '@ant-design/icons'
import logo from '../../assets/logomoon.png'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navigation = () => {
    const [nav, setNav] = useState(true)
    const handleClick = () =>{setNav(!nav)}

  return (
    <Fragment>
        <div className='bg-[#080A0C]'>
            <div className=' bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-7 flex justify-between content-center sticky top-0 right-0'>
                <div className='flex justify-between w-full lg:w-1/4'>
                    <Link to='/' className=' text-red-700 ' >
                        <img src={logo} alt="" />
                    </Link>
                    <div className='lg:hidden' onClick={handleClick}>
                        {nav? <MenuIcon className='text-[#fff] w-7'/>: <XIcon className='text-[#fff] w-7'/>}
                    </div>
                </div>
                <div className="hidden  lg:flex w-2/4 align-middle justify-center py-2">
                    <ul className="flex w-full justify-between items-center ">
                        <li ><Link to='/' >About Us</Link></li> 
                        <li ><Link to='/' className='flex'>Individuals <span className='flex items-center justify-center'><DownOutlined className='text-xs ml-1 '/></span></Link></li>
                        <li ><Link to='/' >Investors</Link> </li>
                        <li ><Link to='/' className='flex items-center' >Company <span className='flex justify-center items-center '><DownOutlined className='text-xs ml-1'/></span></Link></li>
                    </ul>
                </div>
                <button className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white' >DOWNLOAD</button>
                
            </div>
        </div>
            <div className={nav? 'hidden': 'w-full lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2'}>
                <ul className="flex-col w-full justify-center align-middle text-center">
                    <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'><Link to='/' >About Us</Link></li> 
                    <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'><Link to='/' >Individuals <DownOutlined className='text-xs '/></Link></li>
                    <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'><Link to='/' >Investors</Link> </li>
                    <li className='py-2 mt-2 w-full'><Link to='/' >Company <DownOutlined className='text-xs'/></Link></li>
                </ul>
                <button className=' bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 text-white h-full w-full' >DOWNLOAD</button>
            </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation