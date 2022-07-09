import { ArrowRightOutlined, CaretDownFilled, CaretDownOutlined, CaretRightOutlined, DollarCircleFilled, DownOutlined, } from '@ant-design/icons'
import React, { Fragment } from 'react'
import IphoneOne from '../../../assets/heroImage.png'
import {RefreshIcon, ChatAltIcon} from '@heroicons/react/solid'
import ellipse from '../../../assets/ellipse1.png'

const HeroLand = () => {
  return (
    <Fragment>
        <div className="bg-cover bg-center bg-[url('/src/assets/heroBackground.png')] bg-[#080A0C] text-white">
            <div className='flex flex-col justify-center items-center px-3 lg:px-32 lg:flex-row lg:justify-between pb-5 pt-14'>
                <div className='pt-12 lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:text-start text-center'>
                    <p className=' text-[18px] flex items-center mb-4'>Keep your Crypto on fire with the <ArrowRightOutlined className='text-base text-[#54F0D1] '/></p>
                    <h1 className=' text-4xl lg:text-[80px] font-bold mb-4 leading-none'>Mooncod Bitcoin & Crypto Wallet</h1>
                    <p className='text-[18px] mb-4'>Receive, Send and exchange Bitcoin +155 Crypto currencies on the go.   On the Easiest and Most   Powerful Crypto Wallet. 
                    </p>
                    <div className='flex'>
                        <button className='border-[1px] flex items-center rounded-full py-[12px] px-[18px] border-[#5F97FF] text-[#5F97FF] mr-[15px]' ><CaretRightOutlined className='text-[#54F0D1] '/> Watch Video</button>
                        <button className='bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full py-[12px] px-[18px]'>Get Moncod Now</button>
                    </div>
                </div>
                <div className='pt-[43px]  xl:pr-28 lg:pr-12 relative'>
                    <div className='hidden lg:block w-[220px] h-[220px] bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-full absolute bottom-[-25px] -left-14 z-0'></div>
                    <img src={IphoneOne} alt="" className=' z-10 relative w-56 h-auto'/>
                </div>
            </div>
            <div className='xl:mx-32 mt-10 rounded-2xl px-4 md:px-12 py-10 bg-gradient-to-r from-[#7E7E8333] via-[#9D9DA067] to-[#4B4B564B] '>
                <div className='flex flex-col md:flex-row  justify-between relative mb-8'>
                    <p className=' text-4xl font-bold '>Exchange</p>
                    <div className='flex items-center'>
                        <p className=' mr-4 font-bold text-xl '>1 BTC</p>
                        <ArrowRightOutlined className='mr-4 w-4 h-4'/>
                        <p className='text-xl mr-4'>35,500.20</p>
                        <p className='text-base mr-4 text-[#DAE0E7]'>USD</p>
                        <div className='bg-[#008AED] rounded-full flex items-center justify-center p-1'>
                            <RefreshIcon className='w-4 h-4 '/>
                        </div>
                        <div className='flex fixed bottom-1 md:right-20 z-[10000] right-4 items-center justify-center bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full p-4'>
                            <ChatAltIcon className='w-4 h-4 mr-2'/>
                            <p className='text-base'>Help</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between items-center relative'>
                        <p className='absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full text-base font-semibold'>Get</p>
                        <p className='font-bold text-xl'>15,000</p>
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                            <DollarCircleFilled className='text-[#008AED]'/>
                            <p className='flex items-center text-base font-bold'>USD <DownOutlined className="text-sm"/> </p>
                        </div>
                    </div>

                    <div className='flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between items-center relative'>
                        <p className='absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full text-base font-semibold'>Pay</p>
                        <p className='font-bold text-xl'>0.00344</p>
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                            <DollarCircleFilled className='text-[#008AED]'/>
                            <p className='flex items-center text-base font-bold'>BTC<DownOutlined className="text-sm"/> </p>
                        </div>
                    </div>

                    <div className='w-full md:w-[32%] flex justify-center items-center'>
                        <button className='w-full flex justify-center items-center bg-gradient-to-r from-[#008AED]
                        to-[#54F0D1] rounded-full py-5 font-bold text-2xl'>Exchange</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HeroLand