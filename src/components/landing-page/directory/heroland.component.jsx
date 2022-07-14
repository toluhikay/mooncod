import { ArrowRightOutlined, CaretRightOutlined, DollarCircleFilled, DownOutlined } from '@ant-design/icons'
import React, { Fragment, useRef, useState } from 'react'
import IphoneOne from '../../../assets/heroImage.png'
import {RefreshIcon, ChatAltIcon} from '@heroicons/react/solid'
import { useQuery } from 'react-query'
import Header from '../../pages/Header'
// import Input from './input.component'
import { Link } from 'react-router-dom'

const HeroLand = () => {

    // const [coin, setCoinList] = useState("bitcoin");
    const [currencyInputValue, setCurrencyInputValue] = useState('');
    const [exchangeValue,setExchangeValue] =useState('')

    const [value, setValue] = useState('');



//   const [value, setValue] = useState("");
//   const coinValue = useRef().current;
  const currencyValue = useRef();

    const coinData = async  () =>{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')

        return response.json()
    }

    const {data,isLoading, isError, isSuccess} = useQuery('coin_list', coinData)

    // const [value, setValue] = useState('2');
    /**
     *   ()=> {
        if(isSuccess){
          return  data[0].current_price
        }else {
            return ''
        }
    }
     */


    const onExchange= ()=> {
        setExchangeValue(()=> (currencyInputValue /value))
    }



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
                        <a href={'https://www.youtube.com/watch?v=ajw97svAF1Y'} target='blank' className='border-[1px] flex items-center rounded-full py-[12px] px-[18px] border-[#5F97FF] text-[#5F97FF] sm:text-base text-base font-bold md:mr-4'>
                            <CaretRightOutlined className='text-[#54F0D1] text-3xl mr-2'/> Watch Video</a>                       
                            <Link to={'/download'} className='bg-gradient-to-r md:text-base font-bold from-[#008AED] to-[#54F0D1] rounded-full py-[16px] px-[20px] mt-4 md:mt-0'>Get Moncod Now</Link >
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
                        <p className=' mr-4 font-bold md:text-xl sm:text-base text-sm '>1 Bitcoin</p>
                        <ArrowRightOutlined className='mr-4 w-4 h-4'/>
                        <p className='font-bold md:text-xl sm:text-base text-sm  mr-4'>

                            {isSuccess? data[0].current_price.toLocaleString('en-US'): '0'}
                            </p>
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
                        <input className='font-bold py-1 md:text-xl text-sm border-0 outline-0 bg-transparent'
                        type={'number'}
                        id='currency'
                        placeholder='value in USD'
                        ref={currencyValue}
                         onChange={() => {
                            setCurrencyInputValue(currencyValue.current.value);
                          }}
                        
                        />
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                            <p className='flex items-center md:text-base text-sm font-bold'>USD  </p>
                        </div>
                    </div>


                    <div className='flex bg-gradient-to-r from-[#ffffff40] to-[#ffffff20] bg-opacity-40 py-5 px-8 rounded-full w-full md:w-[32%] mb-5 md:mb-0 justify-between items-center relative'>
                        <p className='absolute -top-[15px] bg-gradient-to-r from-[#008AED] to-[#54F0D1] py-[2px] px-4 rounded-full md:text-base text-sm font-semibold'>Pay</p>
                        <p className='font-bold md:text-xl text-sm'>{Number(exchangeValue).toFixed(5)}</p>
                        <div className='flex items-center pl-[5px] border-white border-l-2 w-1/3 justify-between'>
                        {/* <DollarCircleFilled className='text-[#008AED]'/> */}
                        {/* <p className='flex items-center md:text-base text-sm font-bold'>BTC<DownOutlined className="md:text-sm text-xs"/> </p> */}
                        <select
            className='flex items-center md:text-base text-sm font-bold bg-transparent outline-0 border-0 py-2 px-2'
            onChange={(e) => {
                setValue(e.target.value)
                }}>
            {isSuccess && (
              <Fragment >
                {data.map((coin) => (
                  <option key={coin.id} className='text-black py-4 px-3' label={coin.name} value={coin.current_price}>
                    {coin.name}
                  </option>
                ))}
              </Fragment>
            )}
          </select>
                    </div>
                    <div className=' flex justify-between'>
        <div>
          {/* <input
            type='text'
            placeholder='amount of coin'
            onChange={() => {
              setValue(coinValue.current.value);
            }}
            value={coinValue}
            ref={coinValue}
            className='bg-red-800 border-none outline-none '
          /> */}
        </div>
        <div className=' flex'>
         
        
        </div>
      </div>
                    </div>

                

                    <div className='w-auto md:w-[32%] flex justify-center items-center'>
                        <button className='w-auto md:w-full px-12 flex justify-center items-center bg-gradient-to-r from-[#008AED]
                        to-[#54F0D1] rounded-full md:py-5 py-3 font-bold md:text-2xl sm:text-xl text-base' onClick={onExchange}>Exchange</button>
                    </div>
                </div>
            </div>
        </div>
        </Header>
    </Fragment>
  )
}

export default HeroLand