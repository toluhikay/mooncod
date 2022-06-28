import React from "react";
import Header from "./Header";

import PreFooter from "./PreFooter";
import Dashboard from "../../assets/dashboard.png";
import SMS from "../../assets/sms.png";
import Safe from "../../assets/safe.png";
import Reliable from "../../assets/reliable.png";
import Trusted from "../../assets/trusted.png";
import StanLee from "../../assets/stan-lee.jpeg";
import Emilie from "../../assets/Emilie-Choi.jpeg";
import William from "../../assets/William-Surojit.jpeg";
import Helen from "../../assets/Helen-Pauline .jpeg";

export const AboutPageHeader = function ({ header, paragraph }) {
  return (
    <div className='mx-auto w-full flex flex-col items-center justify-center px-4 md:px-0'>
      <h4 className='text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center lg:px-80 '>
        {header}
      </h4>
      <p className='text-base font-body text-center text-white font-normal px-4  md:px-0 lg:px-80 mt-3'>
        {paragraph}
      </p>
    </div>
  );
};

export const DetailCard = function ({ children }) {
  return <>{children}</>;
};

const AboutUs = () => {
  return (
    <main>
      <Header>
        <div className='container h-full md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0'>
          <div className='w-full pb-4 md:mb-0 mt-20'>
            <div>
              <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
                Mooncod allows you to control your <br />
                crypto wealth
              </h2>
              <p className='text-lg mt-4 lg:mt-0 font-body text-center font-normal text-white'>
                Your key to the world of cryptocurrency
              </p>
            </div>
          </div>

          <div className='w-full h-full relative'>
            <div className='w-8/12 mx-auto mt-9'>
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
    `}
              paragraph='
              At Mooncod we pour our hearts into every detail, from pixel-perfect icons to subtle sounds, creating a cryptocurrency experience that works for everyone.
              Our goal is to remove the geek requirement and make it fun and easy to learn and use cryptocurrency. No technical talk. No confusing steps - we think it shows.
              '
            />
          </div>
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-x-16 lg:gap-x-4 */}
          <div className='h-full flex flex-wrap xl:justify-around gap-y-8 mt-28 w-full px-4 md:px-8'>
            <DetailCard>
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
            </DetailCard>

            <div className='hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]'></div>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <img src={Reliable} alt='Reliable' loading='lazy' />
                </div>
                <h6 className='text-body text-3xl font-bold text-white '>
                  Reliable
                </h6>
              </div>
            </DetailCard>

            <div className='hidden md:block w-14 bg-white h-px my-auto bg[#080A0C]'></div>
            <DetailCard>
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
            </DetailCard>
          </div>

          <div></div>
        </article>
      </section>

      <section class='h-full' id='explorer'>
        <div className='container mx-auto'>
          <div className='pt-32'>
            <AboutPageHeader
              header='The cryptoeconomy is powered by Mooncod. '
              paragraph='Mooncod helps customers all over the world learn about cryptocurrency and get started with it.
              Mooncod is trusted by approximately 10,000 verified users and 500 ecosystem partners from over 15 countries to easily and securely invest, spend, save, earn, and use cryptocurrency.'
            />
          </div>
          <div className='w-full sm:w-4/5 md:3/4 lg:w-3/5 xlg:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-2 gap-y-8 mt-24'>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <h2 className='text-body text-3xl font-bold text-white '>
                    $40B
                  </h2>
                </div>
                <p className='text-body text-base font-thin text-center text-white '>
                  Quarterly volume traded
                </p>
              </div>
            </DetailCard>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <h2 className='text-body text-3xl font-bold text-white '>
                    $26B
                  </h2>
                </div>
                <p className='text-body text-base font-thin text-center text-white '>
                  Assets on platform
                </p>
              </div>
            </DetailCard>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <h2 className='text-body text-3xl font-bold text-white '>
                    100+
                  </h2>
                </div>
                <p className='text-body text-base font-thin text-center text-white '>
                  Countries
                </p>
              </div>
            </DetailCard>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <h2 className='text-body text-3xl font-bold text-white '>
                    9M+
                  </h2>
                </div>
                <p className='text-body text-base font-thin text-center text-white '>
                  Verified users
                </p>
              </div>
            </DetailCard>
            <DetailCard>
              <div
                className='w-52 h-56 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                style={{
                  outlineStyle: "solid",
                  outlineWidth: "1px",
                  outlineColor: "rgba(255, 0, 203, 0.15)",
                  outlineOffset: "-1px",
                }}>
                <div>
                  <h2 className='text-body text-3xl font-bold text-white '>
                    50+
                  </h2>
                </div>
                <p className='text-body text-base font-thin text-center text-white '>
                  Employees
                </p>
              </div>
            </DetailCard>
          </div>

          <div className='w-full flex flex-col-reverse md:flex-row md:items-center md:justify-evenly mt-24'>
            <div className='w-full'>
              <AboutPageHeader header={"Our executive team"} paragraph='' />
            </div>
          </div>
          <div className='w-full h-screen mx-auto grid content-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-2 gap-y-8 px-8'>
            <DetailCard>
              <div className='w-56'>
                <div
                  className='w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}>
                  <div className=' w-56 h-60 rounded-2xl '>
                    <img
                      src={StanLee}
                      alt='Co-Founder & Chief Executive Officer'
                      width='100%'
                      height='100%'
                      className='w-56 h-60 rounded-2xl object-cover'
                      loading='lazy'
                    />
                  </div>
                  {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                </div>
                <div className='w-full flex flex-col justify-evenly items-center'>
                  <h2 className='text-body text-3xl font-medium text-white mt-2'>
                    Stan Lee
                  </h2>
                  <p className='text-body text-lg font-normal text-center text-white '>
                    Co-Founder & Chief Executive Officer
                  </p>
                </div>
              </div>
            </DetailCard>
            <DetailCard>
              <div className='w-56'>
                <div
                  className='w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}>
                  <div className=' w-56 h-60 rounded-2xl '>
                    <img
                      src={Emilie}
                      alt='Chief operating Officer'
                      width='100%'
                      height='100%'
                      className='w-56 h-60 rounded-2xl object-cover'
                      loading='lazy'
                    />
                  </div>
                  {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                </div>
                <div className='w-full flex flex-col justify-evenly items-center'>
                  <h2 className='text-body text-3xl font-medium text-white mt-2'>
                    Emilie Choi
                  </h2>
                  <p className='text-body text-lg font-normal text-center text-white '>
                    President & Chief operating Officer
                  </p>
                </div>
              </div>
            </DetailCard>
            <DetailCard>
              <div className='w-56'>
                <div
                  className='w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}>
                  <div className=' w-56 h-60 rounded-2xl '>
                    <img
                      src={William}
                      alt='Chief product officer'
                      width='100%'
                      height='100%'
                      className='w-56 h-60 rounded-2xl object-cover'
                      loading='lazy'
                    />
                  </div>
                  {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                </div>
                <div className='w-full flex flex-col justify-evenly items-center'>
                  <h2 className='text-body text-3xl font-medium text-white mt-2'>
                    William Surojit
                  </h2>
                  <p className='text-body text-lg font-normal text-center text-white '>
                    {/* William Surojit   Chief product officer */}
                    Chief product officer
                  </p>
                </div>
              </div>
            </DetailCard>
            <DetailCard>
              <div className='w-56'>
                <div
                  className='w-56 h-60 rounded-2xl backdrop-blur-xl bg-[#080a0c33] border-solid border-1 flex flex-col items-center justify-center gap-2.5 py-1 px-6 mx-auto'
                  style={{
                    outlineStyle: "solid",
                    outlineWidth: "1px",
                    outlineColor: "rgba(255, 0, 203, 0.15)",
                    outlineOffset: "-1px",
                  }}>
                  <div className=' w-56 h-60 rounded-2xl '>
                    <img
                      src={Helen}
                      alt=' Chief financial Officer'
                      width='100%'
                      height='100%'
                      className='w-56 h-60 rounded-2xl object-cover'
                      loading='lazy'
                    />
                  </div>
                  {/* Stan Lee   Co-Founder & Chief Executive Officer */}
                </div>
                <div className='w-full flex flex-col justify-evenly items-center'>
                  <h2 className='text-body text-3xl font-medium text-white mt-2'>
                    Helen Pauline
                  </h2>
                  <p className='text-body text-lg font-normal text-center text-white '>
                    {/* William Surojit   Chief product officer */}
                    Chief financial Officer
                  </p>
                </div>
              </div>
            </DetailCard>
          </div>
        </div>
      </section>
      <PreFooter />
    </main>
  );
};

export default AboutUs;
