import React from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import PreFooter from "./PreFooter";
import Dashboard from '../../assets/dashboard.png'
import SMS from "../../assets/sms.png";
import Safe from "../../assets/safe.png";
import Reliable from "../../assets/reliable.png";
import Trusted from "../../assets/trusted.png";
// import Store from "../../assets/store.png";
// import Security from "../../assets/security.png";
// import Work from "../../assets/work.png";
import Icons from "../../assets/cryptoIcons.png";
import Mobile from "../../assets/cryptoMobile.png";
import TwinMobile from "../../assets/twinMobile.png";


export const AboutPageHeader = function ({header,paragraph}){

    return(
        <div className="mx-auto w-full flex flex-col items-center justify-center px-4  md:px-0">
        <h4 className="text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center" >{header}</h4>
    <p className="text-base font-body text-center text-white font-normal px-4  md:px-0 lg:px-72 mt-3">{paragraph}</p>
        </div>
    )
}

const AboutUs = () => {

  return (
    <main>
      <Header>
        <div className='container h-full md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0'>
          <div className='w-full pb-4 md:mb-0 mt-20'>
            <div>
              <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
              Mooncod allows you to control your <br/>crypto wealth
              </h2>
              <p className='text-lg mt-4 lg:mt-0 font-body text-center font-normal text-white'>
              Your key to the world of cryptocurrency 
              </p>
            </div>

    

            
          </div>

          <div className='w-full h-full relative'>
            <div className="w-8/12 mx-auto mt-9">

            <img
              src={Dashboard}
              alt='phones'
              height={"100%"}
              width={"100%"}
              loading='lazy'
            />
            </div>

            <button
              className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 z-10'
              style={{ left: "85%" }}>
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
            <AboutPageHeader
              header={`About Mooncod
    `} paragraph='
              At Mooncod we pour our hearts into every detail, from pixel-perfect icons to subtle sounds, creating a cryptocurrency experience that works for everyone.
              Our goal is to remove the geek requirement and make it fun and easy to learn and use cryptocurrency. No technical talk. No confusing steps - we think it shows.
              '
            />
          </div>
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-x-16 lg:gap-x-4 */}
          <div className='h-full flex flex-wrap xl:justify-around gap-y-8 mt-28 w-full px-4 md:px-8'>
           

            <div
              className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img src={Safe} alt='Safe' loading='lazy' />
              </div>
              <h6 className='text-body text-3xl font-bold text-white '>
                Safe
              </h6>
             
            </div>
            <div className="hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]"></div>
            <div
              className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img
                  src={Reliable}
                  alt='Reliable'
                  loading='lazy'
                />
              </div>
              <h6 className='text-body text-3xl font-bold text-white '>
                Reliable
              </h6>
         
            </div>
            <div className="hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]"></div>
            <div
              className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
              style={{
                outlineStyle: "solid",
                outlineWidth: "1px",
                outlineColor: "rgba(255, 0, 203, 0.15)",
                outlineOffset: "-1px",
              }}>
              <div>
                <img src={Trusted} alt='Trusted' loading='lazy' />
              </div>
              <h6 className='text-body text-3xl font-bold text-white '>
               Trusted
              </h6>
              
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

export default AboutUs;
