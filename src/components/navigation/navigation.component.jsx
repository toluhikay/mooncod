import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logomoon.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Wallet from "../../assets/walletIcon.png";

//background: #181E25;
// opacity: 0.5;
// backdrop-filter: blur(85px);
const DropDown = function ({ dropdownState }) {
  return (
    <div
      className={` ${
        dropdownState ? "block" : "hidden"
      } w-[34rem] h-[8rem] rounded-lg dropdown flex items-center justify-center absolute top-[70%] transition ease-in-out translate-y-1 duration-300`}>
      <Link
        to='/wallet'
        className='h-20 w-64 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
        style={{
          background:
            "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
        }}>
        <div>
          <img src={Wallet} alt='' />
        </div>
        <div>
          <h2 className='text-sm font-normal'>Mooncod Wallet</h2>
          <p className='text-xs font-thin mt-2'>
            The best self-hosted crypto wallet
          </p>
        </div>
      </Link>
      {/* <Link to='/wallet'></Link> */}
    </div>
  );
};

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <Fragment>
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
                onClick={() => setShowDropdown(!showDropdown)}>
                Individuals
                <span>
                  <DownOutlined className='text-xs ' />
                </span>
              </Link>
            </li>
            <DropDown dropdownState={showDropdown} />
            <li>
              <Link to='/'>Investors</Link>{" "}
            </li>
            <li>
              <Link to='/'>
                Company{" "}
                <span>
                  <DownOutlined className='text-xs ' />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <button className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
          DOWNLOAD
        </button>
      </div>
      <div
        className={
          nav
            ? "hidden"
            : "w-full lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2"
        }>
        <ul className='flex-col w-full justify-center align-middle text-center'>
          <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
            <Link to='/'>About Us</Link>
          </li>
          <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
            <div>
              Individuals <DownOutlined className='text-xs ' />
            </div>
          </li>
          <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
            <Link to='/'>Investors</Link>{" "}
          </li>
          <li className='py-2 mt-2 w-full'>
            <Link to='/'>
              Company <DownOutlined className='text-xs' />
            </Link>
          </li>
        </ul>
        <button className=' bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 text-white h-full w-full'>
          DOWNLOAD
        </button>
      </div>

      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Navigation;
