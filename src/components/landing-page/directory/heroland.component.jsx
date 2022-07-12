import { ArrowRightOutlined, CaretRightOutlined, DollarCircleFilled, DownOutlined, } from '@ant-design/icons'
import React, { Fragment } from 'react'
import IphoneOne from '../../../assets/heroImage.png'
import {RefreshIcon, ChatAltIcon} from '@heroicons/react/solid'
import { useQuery } from 'react-query'
import Header from '../../pages/Header'
import Input from './input.component'

const HeroLand = () => {

    const {data, status} = useQuery
  return (
    <Fragment>
        <Header>

        <div className="bg-cover bg-center bg-[url('/src/assets/heroBackground.png')] bg-[#080A0C] text-white ">
            <div className='h-full  flex flex-col justify-center items-center px-3 lg:px-32 lg:flex-row lg:justify-between pb-5 pt-7'>
                <div className=' lg:w-1/2 mt-28 lg:h-[30rem] flex flex-col justify-evenly items-center lg:items-start lg:text-start text-center '>
                    <p className=' md:text-[18px] text-base flex items-center mb-4 lg:mb-0'>Keep your Crypto on fire with the <ArrowRightOutlined className='ml-2 text-base text-[#54F0D1] '/></p>
                    <h1 className='lg:text-[80px] md:text-[48px] sm:text-[30px] text-[24px] font-bold w-full mb-4 leading-none'>Mooncod Bitcoin & Crypto Wallet</h1>
                    <p className='md:text-[18px] sm:text-base text-xs mb-4'>Your one-stop service platform to receive, trade and swap Bitcoin, Ethereum and 200+ crypto tokens
                    </p>
                    <div className='flex flex-col md:flex-row justify-evenly items-center'>
                        <button className='border-[1px] flex items-center rounded-full py-[12px] px-[18px] border-[#5F97FF] text-[#5F97FF] sm:text-base text-base font-bold'>
                            <CaretRightOutlined className='text-[#54F0D1] text-2xl mr-2'/> Watch Video</button>
                        <button className='bg-gradient-to-r md:text-base font-bold from-[#008AED] to-[#54F0D1] rounded-full py-[12px] px-[18px] mt-4 md:mt-0'>Get Moncod Now</button>
                    </div>
                </div>
                <div className='pt-[43px] xl:pr-28 lg:pr-12 relative'>
                    <div className='hidden lg:block w-[220px] h-[220px] bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-full absolute bottom-[-25px] -left-14 z-0'></div>
                    <img src={IphoneOne} alt="" className=' z-10 relative w-56 h-auto'/>
                </div>
            </div>
            <div className='xl:mx-32 mt-10 rounded-2xl px-4 md:px-12 py-10 bg-gradient-to-r from-[#7E7E8333] via-[#9D9DA067] to-[#4B4B564B] '>
                <div className='flex flex-col md:flex-row  justify-between relative mb-8'>
                    <p className=' md:text-4xl sm:text-3xl text-2xl font-bold '>Exchange</p>
                    <div className='flex items-center'>
                        <p className=' mr-4 font-bold md:text-xl sm:text-base text-sm '>1 BTC</p>
                        <ArrowRightOutlined className='mr-4 w-4 h-4'/>
                        <p className='font-bold md:text-xl sm:text-base text-sm  mr-4'>35,500.20</p>
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
                        <p className='absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full md:text-base text-sm font-semibold'>Get</p>
                        {/* <p className='font-bold md:text-xl text-sm'>15,000</p>
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                            <DollarCircleFilled className='text-[#008AED]'/>
                            <p className='flex items-center md:text-base text-sm font-bold'>USD <DownOutlined className="md:text-sm text-xs"/> </p>
                        </div> */}
                        <Input/>
                    </div>

                    <div className='flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between items-center relative'>
                        <p className='absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full md:text-base text-sm font-semibold'>Pay</p>
                        {/* <p className='font-bold md:text-xl text-sm'>0.00344</p>
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                            <DollarCircleFilled className='text-[#008AED]'/>
                            <p className='flex items-center md:text-base text-sm font-bold'>BTC<DownOutlined className="md:text-sm text-xs"/> </p>
                        </div> */}
                    </div>

                    <div className='w-auto md:w-[32%] flex justify-center items-center'>
                        <button className='w-auto md:w-full px-12 flex justify-center items-center bg-gradient-to-r from-[#008AED]
                        to-[#54F0D1] rounded-full md:py-5 py-3 font-bold md:text-2xl sm:text-xl text-base'>Exchange</button>
                    </div>
                </div>
            </div>
        </div>
        </Header>
    </Fragment>
  )
}

export default HeroLand