import React from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import PreFooter from "./PreFooter";
import PlayStore from "../../assets/playStore.png";
import AppStore from "../../assets/appStore.png";
import Phones from "../../assets/overlayingPhone.png";
import SMS from "../../assets/sms.png";
import Control from "../../assets/control.png";
import Store from "../../assets/store.png";
import Security from "../../assets/security.png";
import Work from "../../assets/work.png";
import Icons from "../../assets/cryptoIcons.png";
import Mobile from "../../assets/cryptoMobile.png";
import TwinMobile from "../../assets/twinMobile.png";

const Wallet = () => {
  return (
    <main>
      <Header>
        <div className='container md:px-16 xl:px-20 mx-auto h-full w-full flex items-center justify-center flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0'>
          <div className='w-full lg:w-3/5 pb-4 md:mb-0'>
            <div>
              <h2 className='text-5xl lg:text-5xl xl:text-7xl mb-2 font-body font-bold text-white text-center lg:text-left'>
                Mooncod Wallet
              </h2>
              <p className='lg:text-l xl:text-2xl mt-4 lg:mt-0 font-body text-center lg:text-left font-medium text-white'>
                Your key to the world of cryptocurrency
              </p>
            </div>

            <ul className='flex flex-col justify-evenly items-center md:items-start px-7 mt-7'>
              <li className='list-disc text-md xl:text-xl text-center lg:text-left text-white font-body mt-4 lg:mt-2 lg:mt-0 font-normal mx-auto lg:mx-0 '>
                All of your cryptocurrency should be stored in one location.
              </li>
              <li className='list-disc text-md xl:text-xl text-white text-center lg:text-left font-body mt-4 lg:mt-2 lg:mt-0 mt-4 md:mt-0 font-normal mx-auto lg:mx-0 '>
                Hundreds of thousands of tokens and a vast array of dapps are
                supported
              </li>
              <li className='list-disc text-md xl:text-xl text-white text-center lg:text-left font-body mt-4 lg:mt-2 lg:mt-0 font-normal mx-auto lg:mx-0 '>
                Use your phone or browser to explore the decentralized web
              </li>
              <li className='list-disc text-md xl:text-xl text-center lg:text-left text-white font-body mt-4 lg:mt-2 lg:mt-0 font-normal mx-auto lg:mx-0 '>
                With industry-leading protection, you can keep your digital
                assets safe.
              </li>
            </ul>

            <div className='flex  items-center justify-center md:items-center h-full pb-6 flex-col sm:flex-row justify-start md:justify-center lg:justify-start mt-7'>
              <button className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-9 py-3 rounded-full text-white sm:mr-4'>
                <img
                  src={PlayStore}
                  alt='playStore icon'
                  loading='lazy'
                  width='80%'
                  height='80%'
                  className='mx-auto'
                />
              </button>
              <button className='bg-gradient-to-tr mt-3 sm:mt-0 from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'>
                <img
                  src={AppStore}
                  alt='appStore icon'
                  width='90%'
                  height='90%'
                />
              </button>
            </div>
          </div>

          <div className='w-full md:w-1/2 h-full relative'>
            <img
              src={Phones}
              alt='phones'
              height={"100%"}
              width={"100%"}
              loading='lazy'
            />

            <button
              className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-4 md:px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 left-3/5 md:left-0 z-10'
              style={{ left: "80%" }}>
              <img src={SMS} alt='appStore icon' className='mr-2' />
              {""}
              Help
            </button>
          </div>
        </div>
      </Header>

      <section className='h-full bg-wallet pb-24' id='walletSection'>
        <article className='container md:px-16 xl:px-8 mx-auto py-6'>
          <div className='mt-16'>
            <PageHeader
              header={`Uncover the world of cryptocurrency
    `}
              paragraph='Life on the blockchain has been simplified and made more secure.'
            />
          </div>
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-x-16 lg:gap-x-4 */}
          <div className='h-full flex flex-wrap xl:justify-evenly gap-y-8 md:gap-x-16 lg:gap-x-2 xl:gap-x-0 mt-28 w-full px-4 md:px-0'>
            <div
              className='w-72 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img src={Control} alt='Control your crypto' loading='lazy' />
              </div>
              <h6 className='text-body text-xl font-bold text-white '>
                Control your crypto
              </h6>
              <p className='text-center text-xs text-body font-normal text-[#B4C0CF]'>
                Moodcod Wallet is a self-custody wallet that gives you full
                control over your digital assets.
              </p>
            </div>

            <div
              className='w-72 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img src={Store} alt='Store your assets' loading='lazy' />
              </div>
              <h6 className='text-body text-xl font-bold text-white '>
                Store your assets
              </h6>
              <p className='text-center text-xs text-body font-normal text-[#B4C0CF]'>
                All of your assets & tokens can be safely stored and viewed in
                your Wallet.
              </p>
            </div>
            <div
              className='w-72 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img
                  src={Security}
                  alt='Leading-edge security'
                  loading='lazy'
                />
              </div>
              <h6 className='text-body text-xl font-bold text-white '>
                Leading-edge security
              </h6>
              <p className='text-center text-xs text-body font-normal text-[#B4C0CF]'>
                Additional security options on all of your devices give you more
                options for keeping your crypto safe..
              </p>
            </div>
            <div
              className='w-72 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img src={Work} alt='Works with Mooncod' loading='lazy' />
              </div>
              <h6 className='text-body text-xl font-bold text-white '>
                Works with Mooncod
              </h6>
              <p className='text-center text-xs text-body font-normal text-[#B4C0CF]'>
                Already a Mooncod customer? Link your Mooncod account to your
                Wallet to easily access your crypto.
              </p>
            </div>
          </div>

          <div>
            <div className='mt-24'>
              <PageHeader
                header='With Over 155+ Cryptocurrency Assets'
                paragraph='With the mobile security of face or fingerprint scanning, you can secure, manage, and exchange your cryptocurrency'
              />
            </div>
            <div className='mt-36 px-4 md:px-4'>
              <img src={Icons} alt='crypto Icons' loading='lazy' />
            </div>
          </div>
        </article>
      </section>

      <section class='h-full' id='explorer'>
        <div className='container mx-auto'>
          <div className='pt-32'>
            <PageHeader
              header='Manage Crypto on Mobile'
              paragraph="Control your digital assets while you're on the move with Mooncod for iOS and Android."
            />
          </div>
          <div className='w-full md:flex items-center justify-evenly mt-24'>
            <div className='w-full  md:w-1/2'>
              <div className='w-4/5 mx-auto'>
                <img src={Mobile} alt='' loading='lazy' />
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='w-4/5 mx-auto h-72 flex flex-col items-center justify-center mt-6 md:mt-0 md:h-0'>
                <h4 className='text-3xl md:text-4xl text-center md:text-left leading-10 mb-2 font-body font-bold text-white '>
                  Your crypto, access keys and wallet
                </h4>
                <p className='text-l leading-7 md:text-xl font-body text-white text-center md:text-left font-normal md:leading-8 mt-3'>
                  Mooncod Wallet is a self-custody crypto wallet that puts your
                  crypto, keys, and data in your control. You can now keep all
                  of your crypto in one secure location.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col-reverse md:flex-row md:items-center md:justify-evenly mt-24'>
            <div className='w-full md:w-1/2'>
              <div className='w-4/5 mx-auto h-72 flex flex-col items-center justify-center md:h-0'>
                <h4 className='text-3xl md:text-4xl text-center md:text-left leading-10 mb-2 font-body font-bold text-white'>
                  Explore other crypto assets with confidence
                </h4>
                <p className='text-l leading-7 md:text-xl font-body text-white text-center md:text-left font-normal md:leading-8 mt-3'>
                  Mooncod Wallet allows you to easily swap your current current
                  assets for other crypto assets looking promising.
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='w-4/5 mx-auto'>
                <img src={TwinMobile} alt='' loading='lazy' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter />
    </main>
  );
};

export default Wallet;
