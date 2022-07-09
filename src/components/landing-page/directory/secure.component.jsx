import { LockFilled } from '@ant-design/icons'
import React, { Fragment } from 'react'
import Dashboard from '../../../assets/dashboard.png'
import secureKey from '../../../assets/security.png'

const Secure = () => {
  return (
    <Fragment>
        <div className="bg-[#080A0C] bg-[url('/src/assets/whyBackground.png')] text-white px-4 py-5 xl:px-32 lg:px-24 lg:py-[80px] bg-center bg-cover ">
            <div className='w-full flex flex-col items-center justify-center text-center'>
                <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:w-[80%] pb-3'>Why Choose Mooncod</p>
                <p className='md:text-lg text-sm md:w-[53%] md:mb-[60px] mb-6'>With our uniquely crafted features, Mooncod offers security and efficiency, making it the best platform to manage your portfolio.</p>
            </div>
            <div className='flex flex-wrap justify-evenly items-center w-full'>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl sm:text-2xl text-xl'>Manage Assets</p>
                    <p className='text-[#B4C0CF] md:text-base text-sm py-2'>Keep track of your portfolio and market conditions in one place.</p>
                </div>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                        {/* <img src={secureKey} alt="" /> */}
                    </div>
                    <p className='font-bold lg:text-3xl sm:text-2xl text-xl'>Best price swaps</p>
                    <p className='text-[#B4C0CF] md:text-base text-sm py-2'>Mooncod monitors the market to ensure users trade assets at the best price.</p>
                </div>
                <div className='flex flex-col flex- mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto  lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl sm:text-2xl text-xl'>Mobile friendly</p>
                    <p className='text-[#B4C0CF] md:text-base text-sm py-2'>Receive, swap and trade assets on your Android or iOS devices.</p>
                </div>
                <div className='flex flex-col flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] md:w-[40%] sm:w-full sm:h-auto h-auto lg:w-[31%] md:h-[240px] items-start justify-start px-7 py-3'>
                    <div className='md:h-[60px] md:w-[60px] h-[45px] w-[45px] rounded-full border border-[#3d8dff] flex items-center justify-center'>
                        <LockFilled />
                    </div>
                    <p className='font-bold lg:text-3xl sm:text-2xl text-xl'>Enhanced Security</p>
                    <p className='text-[#B4C0CF] md:text-base text-sm py-2'>Timed withdrawal vaults that allow users to enjoy enhanced security. </p>
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