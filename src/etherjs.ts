// import {ethers} from 'ethers'
// import { Address} from 'cluster'

// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/5f52fd5d4306475c9edc883e378af0c1')
// const poolAddress = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8'
// const poolImmutablesAbi = [
//     'function factory() external view returns (address)',
//     'function token0() external view returns (address)',
//     'function token1() external view returns (address)',
//     'function fee() external view returns (uint24)',
//     'function tickSpacing() external view returns (int24)',
//     'function maxLiquidityPerTick() external view returns (uint128)',
//   ]

//   const poolContract = new ethers.Contract(poolAddress, poolImmutablesAbi, provider)
//   interface Immutables {
//     factory: Address
//     token0: Address
//     token1: Address
//     fee: number
//     tickSpacing: number
//     maxLiquidityPerTick: number
//   }
//   async function getPoolImmutables() {
//     const PoolImmutables: Immutables = {
//       factory: await poolContract.factory(),
//       token0: await poolContract.token0(),
//       token1: await poolContract.token1(),
//       fee: await poolContract.fee(),
//       tickSpacing: await poolContract.tickSpacing(),
//       maxLiquidityPerTick: await poolContract.maxLiquidityPerTick(),
//     }
//     return PoolImmutables
//   }
//   getPoolImmutables().then((result) => {
//     console.log(result)
//   })


  /**
   * import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logomoon.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Wallet from "../../assets/walletIcon.png";
import Logo from "../../assets/faviconlogo.png";

//  headline='Moodcod Wallet'
// subHeadline='The best self-hosted crypto wallet'
// link='/wallet'
const CompanyDropdown = function ({ dropdownState }) {
  return (
    <div
      className={`${
        dropdownState ? "opacity-1" : "opacity-0"
      } w-64 h-[8rem] rounded-lg shadow-lg dropdown flex items-center justify-evenly absolute top-[70%] right-60 duration-100 transition ease-in companydropdown`}>
      <Link
        to='/about'
        className='h-10 w-28 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        About
      </Link>
      <Link
        to='/faq'
        className='h-10 w-28 cursor-pointer flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        FAQ
      </Link>
    </div>
  );
};

const DropDownLink = function (props) {
  return (
    <div
      className={` ${
        props.dropdownState ? "opacity-1" : "opacity-0"
      } w-[36rem] h-[8rem] rounded-lg shadow-lg dropdown flex items-center justify-evenly absolute top-[70%] left-[30%] duration-300 transition`}>
      <Link
        to='/'
        className='h-20 w-64 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        <div>
          <img src={Logo} alt='Buy and Sell' />
        </div>
        <div>
          <h2 className='text-sm font-normal'>Buy and Sell</h2>
          <p className='text-xs font-thin mt-2'>Buy, sell and use crypto</p>
        </div>
      </Link>
      <Link
        to='/wallet'
        className='h-20 w-64 flex cursor-pointer items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        <div>
          <img src={Wallet} alt='Wallet' />
        </div>
        <div>
          <h2 className='text-sm font-normal'>Moodcod Wallet</h2>
          <p className='text-xs font-thin mt-2'>
            The best self-hosted crypto wallet
          </p>
        </div>
      </Link>
    </div>
  );
};

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
>>>>>>> otherPages



<div
        className='container top-0 w-full bg-[181e25] px-4 lg:px-16 xl:px-32 flex justify-between items-center transition ease-in-out'
        style={{ backdropFilter: "blur(85px)", height: "102px" }}>
        <div className='flex justify-between w-full lg:w-1/4'>
          <Link to='/' className=' text-red-700'>
            <img src={logo} alt='' />
          </Link>
          <div className='lg:hidden cursor-pointer' onClick={handleClick}>
            {nav ? (
              <MenuIcon className='text-[#fff] w-7' />
            ) : (
              <XIcon className='text-[#fff] w-7' />
            )}
          </div>
        </div>
        <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
          <ul className='flex w-full justify-between align-middle'>
            <li>
              <Link to='/'>About Us</Link>
            </li>
            <li>
              <Link
                to='#'
                className='relative'
                id='individual'
                onClick={() => {
                  setShowDropdown(!showDropdown);
                  setShow(false);
                }}>
                Individuals
                <span>
                  <DownOutlined className='text-xs ' />
                </span>
              </Link>
            </li>
            <DropDownLink dropdownState={showDropdown} />

            <li>
              <Link to='/'>Investors</Link>{" "}
            </li>
            <li>
              <Link
                to='#'
                // id='company'
                className='relative'
                onClick={(e) => {
                  setShow(!show);
                  setShowDropdown(false);
                }}>
                Company
                <span>
                  <DownOutlined className='text-xs ' />
                </span>
              </Link>
              <CompanyDropdown dropdownState={show} />
            </li>
   */