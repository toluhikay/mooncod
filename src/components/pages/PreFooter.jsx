import React from "react";
import Saly from "../../assets/Saly.png";

const PreFooter = () => {
  return (
    <section id='manage' className='h-full lg:h-96 w-100 '>
      <article className='container h-full mx-auto xl:px-8 flex justify-center items-center flex-wrap'>
        <div className='mr-4 mt-8 sm:mt-0 flex flex-col items-center mb-7 sm:mb-0'>
          <h4 className='text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center'>
            Get Mooncod Wallet
          </h4>
          <p className='text-base font-body text-center text-white font-normal px-4 md:px-0 mt-2'>
            The magic key to your crypto world
          </p>
          <button className=' bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 mt-7 text-white h-full rounded-full'>
            DOWNLOAD
          </button>
        </div>
        <div>
          <img src={Saly} alt='saly illustration' loading='lazy' />
        </div>
      </article>
    </section>
  );
};

export default PreFooter;
