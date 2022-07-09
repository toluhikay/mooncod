import React, { Fragment } from 'react'
import TwoMobile from '../../../assets/twinMobile2.png'

const QuickStart = () => {
  return (
    <Fragment>
        <div className='lg:py-28 py-4'>
            <div className='text-center flex flex-col items-center justify-center'>
                <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold pb-4'>Your Trusted Crypto Wallet</p>
                <p className='w-4/6'>1.3 million people call Mooncod their home for Crypto. Discover how to easily earn interest and more.</p>
            </div>
            <div>
                <img src={TwoMobile} alt="" />
            </div>
        </div>
    </Fragment>
  )
}

export default QuickStart