// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import { DownOutlined } from "@ant-design/icons";
// import logo from "../../assets/logomoon.png";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Wallet from "../../assets/walletIcon.png";

// //background: #181E25;
// // opacity: 0.5;
// // backdrop-filter: blur(85px);
// const DropDown = function ({ dropdownState }) {
//   /**
//    *  <div className='bg-[#080A0C] bg-transparent relative'>
//             <div className=' bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-5 flex justify-between content-center fixed top-0 left-0 w-full z-50 '>
//    */
//   return (
//     <div
//       className={` ${
//         dropdownState ? "block" : "hidden"
//       } w-[34rem] h-[8rem] rounded-lg dropdown flex items-center justify-center absolute top-[70%] transition ease-in-out translate-y-1 duration-300`}>
//       <Link
//         to='/wallet'
//         className='h-20 w-64 flex items-center justify-evenly bg-green-500 py-4 px-2 rounded-md mt-4'
//         style={{
//           background:
//             "linear-gradient(100.7deg, rgba(255, 255, 255, 0.4) -4.35%, rgba(255, 255, 255, 0.1) 100.97%)",
//         }}>
//         <div>
//           <img src={Wallet} alt='' />
//         </div>
//         <div>
//           <h2 className='text-sm font-normal'>Mooncod Wallet</h2>
//           <p className='text-xs font-thin mt-2'>
//             The best self-hosted crypto wallet
//           </p>
//         </div>
//       </Link>
//       {/* <Link to='/wallet'></Link> */}
//     </div>
//   );
// };

// const Navigation = () => {
//   const [nav, setNav] = useState(true);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleClick = () => {
//     setNav(!nav);
//   };

//   return (
//     <Fragment>
//       <div
//         className='container top-0 w-full bg-[181e25] px-4 lg:px-16 xl:px-32 flex justify-between items-center transition ease-in-out'
//         style={{ backdropFilter: "blur(85px)", height: "102px" }}>
//         <div className='flex justify-between w-full lg:w-1/4'>
//           <Link to='/' className=' text-red-700'>
//             <img src={logo} alt='' />
//           </Link>
//           <div className='lg:hidden cursor-pointer' onClick={handleClick}>
//             {nav ? (
//               <MenuIcon className='text-[#fff] w-7' />
//             ) : (
//               <XIcon className='text-[#fff] w-7' />
//             )}
//           </div>
//         </div>
//         <div className='hidden lg:flex w-2/4 align-middle justify-center py-2'>
//           <ul className='flex w-full justify-between align-middle'>
//             <li>
//               <Link to='/'>About Us</Link>
//             </li>
//             <li>
//               <Link
//                 to='#'
//                 className='relative'
//                 onClick={() => setShowDropdown(!showDropdown)}>
//                 Individuals
//                 <span>
//                   <DownOutlined className='text-xs ' />
//                 </span>
//               </Link>
//             </li>
//             <DropDown dropdownState={showDropdown} />
//             <li>
//               <Link to='/'>Investors</Link>{" "}
//             </li>
//             <li>
//               <Link to='/'>
//                 Company{" "}
//                 <span>
//                   <DownOutlined className='text-xs ' />
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <button className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
//           DOWNLOAD
//         </button>
//       <div
//         className={
//           nav
//             ? "hidden"
//             : "w-full lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2"
//         }>
//         <ul className='flex-col w-full justify-center align-middle text-center'>
//           <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
//             <Link to=''>About Us</Link>
//           </li>
//           <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
//             <div>
//               Individuals <DownOutlined className='text-xs ' />
//             </div>
//           </li>
//           <li className='border-b-2 border-[#54f0d1] py-2 my-2 w-full'>
//             <Link to='/'>Investors</Link>{" "}
//           </li>
//           <li className='py-2 mt-2 w-full'>
//             <Link to='/'>
//               Company <DownOutlined className='text-xs' />
//             </Link>
//           </li>
//         </ul>
//         <button className=' bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 text-white h-full w-full'>
//           DOWNLOAD
//         </button>
//       </div>

//       {/* <Outlet /> */}
//     </Fragment>
//   );
// };

// export default Navigation;

import React, { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logomoon.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navigation = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  return (
    <Fragment>
      <div className='bg-[#080A0C] static'>
        <div className=' bg-[#181E25] bg-opacity-50 px-2 py-2 xl:px-32 lg:px-20 lg:py-7 flex justify-between content-center sticky top-0 right-0'>
          <div className='flex justify-between w-full lg:w-1/4'>
            <Link to='/' className=' text-red-700 '>
              <img src={logo} alt='' />
            </Link>
            <div className='lg:hidden' onClick={handleClick}>
              {nav ? (
                <MenuIcon className='text-[#fff] w-7' />
              ) : (
                <XIcon className='text-[#fff] w-7' />
              )}
            </div>
          </div>
          <div className='hidden  lg:flex w-2/4 align-middle justify-center py-2'>
            <ul className='flex w-full justify-between items-center '>
              <li>
                <Link to='about'>Explore</Link>
              </li>
              <li>
                <Link to='/' className='flex'>
                  Individuals{" "}
                  <span className='flex items-center justify-center'>
                    <DownOutlined className='text-xs ml-1 ' />
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/'>Investors</Link>{" "}
              </li>
              <li>
                <Link to='/' className='flex items-center'>
                  Company{" "}
                  <span className='flex justify-center items-center '>
                    <DownOutlined className='text-xs ml-1' />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <button className='hidden lg:block  bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
            DOWNLOAD
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute -left-full transition linear duration-300"
            : "w-full h-screen top-0 left-0 absolute z-[100000] flex lg:hidden bg-[#181e25] flex-col align-middle justify-center pt-2 transition ease-in-out duration-500"
        }>
        <XIcon
          className='text-white w-7 absolute right-4 top-4'
          onClick={closeNav}
        />
        <ul className='flex flex-col h-full py-16 justify-between transition linear duration-300 items-center text-center '>
          <li className=' py-2 my-2 w-full'>
            <Link to='about' onClick={closeNav}>
              Explore
            </Link>
          </li>
          <li className='  py-2 my-2 w-full'>
            <Link to='/' className='flex items-center justify-center'>
              Individuals <DownOutlined className='text-xs ml-1' />
            </Link>
          </li>
          <li className=' py-2 my-2 w-full'>
            <Link to='/'>Investors</Link>{" "}
          </li>
          <li className='py-2 mt-2 w-full'>
            <Link to='/' className='flex items-center justify-center'>
              Company <DownOutlined className='text-xs ml-1' />
            </Link>
          </li>
        </ul>
        <button className='h-auto bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 text-white transition linear duration-300  w-full'>
          DOWNLOAD
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
