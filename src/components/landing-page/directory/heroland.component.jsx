import { ArrowRightOutlined, CaretRightOutlined, } from '@ant-design/icons'
import React, { Fragment } from 'react'
import IphoneOne from '../../../assets/iphone1.png'
import {RefreshIcon, ChatAltIcon} from '@heroicons/react/solid'
import ellipse from '../../../assets/ellipse1.png'

const HeroLand = () => {
  return (
    <Fragment>
        <div className='bg-[#080A0C] text-white'>
            {/* <div className='bg-gradient-to-b w-[600px] h-[600px] from-[#607B8470] via-[#39153F70] via-[#510B2E70] to-[#672D0370] rounded-full absolute -top-40 -left-40 -z-50'></div> */}
            <div className='flex flex-col justify-center items-center px-3 lg:px-32 bg-[#080A0C] lg:flex-row lg:justify-between pb-11'>
                <div className='pt-20 lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:text-start text-center'>
                    <p className=' text-[18px] flex items-center mb-[26px]'>Keep your Crypto on fire with the <ArrowRightOutlined className='text-base text-[#54F0D1] '/></p>
                    <h1 className=' text-4xl lg:text-[80px] font-bold mb-[26px] leading-none'>Mooncod Bitcoin & Crypto Wallet</h1>
                    <p className='text-[18px] mb-[26px]'>Receive, Send and exchange Bitcoin +155 Crypto currencies on the go.   On the Easiest and Most   Powerful Crypto Wallet. 
                    </p>
                    <div className='flex'>
                        <button className='border-[1px] flex items-center rounded-full py-[12px] px-[18px] border-[#5F97FF] text-[#5F97FF] mr-[15px]' ><CaretRightOutlined className='text-[#54F0D1] '/> Watch Video</button>
                        <button className='bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full py-[12px] px-[18px]'>Get Moncod Now</button>
                    </div>
                </div>
                <div className='pt-[43px] lg:pr-28 relative'>
                    <div className='hidden lg:block w-[276px] h-[276px] bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-full absolute bottom-[-25px] -left-14 z-0'></div>
                    <img src={IphoneOne} alt="" className=' z-10 relative'/>
                </div>
            </div>
            <div className='xl:mx-32 mt-10 rounded-2xl bg-gradient-to-r from-[#7E7E8333] via-[#9D9DA067] to-[#4B4B564B] '>
                <div className='flex px-12 py-10 justify-between '>
                    <p className=' text-4xl font-bold '>Exchange</p>
                    <div className='flex relative items-center'>
                        <p className=' mr-4 font-bold text-xl '>1 BTC</p>
                        <ArrowRightOutlined className='mr-4 w-4 h-4'/>
                        <p className='text-xl mr-4'>35,500.20</p>
                        <p className='text-base mr-4 text-[#DAE0E7]'>USD</p>
                        <div className='bg-[#008AED] rounded-full flex items-center justify-center p-1'>
                            <RefreshIcon className='w-4 h-4 '/>
                        </div>
                        <div className='flex absolute top-1/6 -right-20 bg-gradient-to-r from-[#008AED] to-[#54F0D1] rounded-full p-4'>
                            <ChatAltIcon className='w-7'/>
                            <p>Help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HeroLand