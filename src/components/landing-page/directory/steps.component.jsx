import React, { Fragment } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import {GiBank, GiSellCard} from 'react-icons/gi'
import CryptoIcons from '../../../assets/cryptoIcons.png'

const Steps = () => {
  return (
    <Fragment>
        <div className="lg:py-20 md:py-10 py-5 lg:px-32 md:px-7 px-4 flex flex-col justify-center items-center bg-[#080A0C] bg-[url(/src/assets/stepsBackground.png)] bg-center bg-cover text-white">
            <div className='flex flex-col items-center justify-center w-4/6 text-center'>
                <p className='lg:text-5xl md:text-4xl text-xl font-bold pb-4'>In three easy steps, you can get started.</p>
                <p className='md:text-lg text-xs'>Mooncod Supports a number of well-known digital currencies.</p>
            </div>
            <div className='flex flex-col md:flex-row lg:py-24 md:py-16 py-8 justify-between items-center w-full'>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <FaUserPlus className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Create an Account</p>
                </div>
                <div className='hidden md:block w-[15%] h-[2px] bg-white'></div>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <GiBank className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Link your bank account</p>
                </div>
                <div className='hidden md:block w-[15%] h-[2px] bg-white'></div>
                <div className='flex flex-col justify-center items-center md:mb-0 mb-6'>
                    <GiSellCard className='text-[80px] text-[#008AED] md:mb-9 mb-4'/>
                    <p>Start Buying $ Selling</p>
                </div>
            </div>

            <div>
                <p className='lg:text-5xl md:text-4xl text-xl font-bold pb-4 text-center'>With Over <br /> 150+ Cryptocurrency Assets</p>
                <img src={CryptoIcons} alt="" className='lg:my-32 md:my-24 sm:my-12 my-9'/>
            </div>

        </div>
    </Fragment>
  )
}

export default Steps