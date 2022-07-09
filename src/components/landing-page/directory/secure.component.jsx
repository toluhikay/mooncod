import { LockFilled } from '@ant-design/icons'
import React, { Fragment } from 'react'
import Dashboard from '../../../assets/dashboard.png'

const Secure = () => {
  return (
    <Fragment>
        <div className="bg-[#080A0C] bg-[url('/src/assets/whyBackground.png')] text-white px-4 py-5 xl:px-32 lg:px-24 lg:py-[80px] bg-center bg-cover ">
            <div className='w-full flex flex-col items-center justify-center text-center'>
                <p className='lg:text-5xl md:text-4xl text-3xl font-bold md:w-[80%] pb-3'>Securely Create your cryptocurrency portfolio today</p>
                <p className='text-lg md:w-[53%] mb-[60px]'>Mooncod has variety of features on our application that makes it the best place o start your portfolio</p>
            </div>
            <div className='flex flex-wrap justify-evenly items-center w-full'>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl text-2xl'>Manage your portfolio</p>
                    <p className='text-[#B4C0CF] py-2'>Buy and sell digital currencies, eep track of them in one place</p>
                </div>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl text-2xl'>Swap Desk</p>
                    <p className='text-[#B4C0CF] py-2'>Invext in crypto anytime, anywhere with our safe, secure, and easy to use online platform</p>
                </div>
                <div className='flex flex-col flex- mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto  lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl text-2xl'>Mobile Apps</p>
                    <p className='text-[#B4C0CF] py-2'>With the Mooncod app for Android or iOS, you can stay on top of the markets</p>
                </div>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl text-2xl'>Vault Protection</p>
                    <p className='text-[#B4C0CF] py-2'>Store your assets in a timed withdrawals for enhanced security</p>
                </div>

            </div>
            <div className=' md:pt-20 pt-8'>
                <img src={Dashboard} alt="" />
            </div>
        </div>
    </Fragment>
  )
}

export default Secure