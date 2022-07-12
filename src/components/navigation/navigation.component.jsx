import React, { Fragment, useState } from "react";
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
      } w-64 h-[8rem] rounded-lg shadow-lg dropdown flex items-center justify-evenly absolute top-[70%] right-60 duration-100 transition ease-in companydropdown `}>
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

// const Navigation = () => {
//   const [nav, setNav] = useState(true);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [show, setShow] = useState(false);
// >>>>>>> otherPages

// export default Navigation;

// import React, {Fragment, useState} from 'react'
// import { Outlet, Link } from 'react-router-dom'
// import {DownOutlined} from '@ant-design/icons'
// import logo from '../../assets/logomoon.png'
// import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  // handling mobile dropdown
  const [mobileDrop, setMobileDrop] = useState(true);
  const handleMobileDrop = () => setMobileDrop(!mobileDrop);

  //second mobile dropdown
  const [mobileDrop1, setMobileDrop1] = useState(true);
  const handleMobileDrop1 = () => setMobileDrop1(!mobileDrop1);

  return (
    <Fragment>
      <div
        className='bg-[181e25] fixed w-screen z-50'
        style={{ backdropFilter: "blur(85px)" }}>
        <div className='bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-6 flex justify-between items-center top-0 right-0'>
          <div className='flex justify-between w-full py-2 lg:py-0 lg:w-1/4'>
            <Link to='/' className=' text-red-700 '>
              <img src={logo} alt='Mooncod' className='w-32 md:w-full' />
            </Link>
            <div className='lg:hidden' onClick={handleClick}>
              {
                nav ? (
                  <MenuIcon className='text-[#fff] w-7 cursor-pointer' />
                ) : null
                // <XIcon className='text-[#fff] w-7' />
              }
            </div>
          </div>
          <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
            <ul className='flex w-full justify-between items-center '>
              <li>
                <Link to='about'>Explore</Link>
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
            </ul>
          </div>
          <Link
            to='/download'
            className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
            DOWNLOAD
          </Link>
        </div>
        <div
          className={
            nav
              ? "absolute left-0 translate-x-[200rem] transition linear duration-300"
              : "w-full h-screen top-0 translate-x-0 absolute z-[100000] flex lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2 transition ease-in-out duration-500"
          }>
          <XIcon
            className='text-white cursor-pointer w-7 absolute right-4 top-4'
            onClick={closeNav}
          />
          <ul className='flex flex-col h-full py-16 justify-between transition linear duration-300 items-center text-center px-6 '>
            <li className=' py-2 my-2 w-full'>
              <Link to='about' onClick={closeNav}>
                Explore
              </Link>
            </li>

            <li className='  py-2 my-2 w-full'>
              <li
                className='flex items-center justify-center text-white'
                onClick={handleMobileDrop}>
                Individuals <DownOutlined className='text-xs ml-1' />
              </li>
              <div
                className={
                  mobileDrop ? "hidden" : "mt-4 border border-[#c4c4c4] py-2"
                }>
                <li className='mb-3'>
                  <Link to='/'>Buy and Sell</Link>
                </li>
                <li>
                  <Link to='/'>Mooncod Wallet</Link>
                </li>
              </div>
            </li>

            <li className=' py-2 my-2 w-full'>
              <Link to='/'>Investors</Link>{" "}
            </li>

            <li className='py-2 mt-2 w-full'>
              <Link
                to='/'
                className='flex items-center justify-center'
                onClick={handleMobileDrop1}>
                Company <DownOutlined className='text-xs ml-1' />
              </Link>
              <div
                className={
                  mobileDrop1 ? "hidden" : "mt-4 border border-[#c4c4c4] py-2"
                }>
                <li className='mb-3'>
                  <Link to='/'>About</Link>
                </li>
                <li>
                  <Link to='/'>FAQ</Link>
                </li>
              </div>
            </li>
          </ul>
          <Link
            to='/download'
            className='h-auto bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 text-white transition linear duration-300  w-full'>
            DOWNLOAD
          </Link>
        </div>
      </div>

      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Navigation;
