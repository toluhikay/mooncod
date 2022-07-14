import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import Chart from "chart.js/auto";
// import { getRelativePosition } from "chart.js/helpers";
// import { Line } from "react-chartjs-2";

import Navigation from "../navigation/navigation.component";
import PreFooter from "./PreFooter";
import SMS from "../../assets/sms.png";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
// import { PrinterIcon } from "@heroicons/react/outline";
import Chart from "../../assets/chart.png";

const Explore = () => {
  const [page, setPage] = useState(1);
  //   const [id, setId] = useState([]);

  //   const canva = useRef();

  const coinMarkets = async () => {
    const response = await fetch(
      //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=${page}&sparkline=false`
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    return response.json();
  };

  //   function getId(data) {
  //     return data.map((cur) => cur);
  //   }

  //   const coinChart = async () => {
  //     const response = await fetch(
  //       //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=${page}&sparkline=false`
  //       `https://api.coingecko.com/api/v3/coins/${getId(
  //         id
  //       )}/market_chart?vs_currency=usd&days=1`
  //     );
  //     return response.json();
  //   };

  const { data = [], status } = useQuery("data_market_prices", coinMarkets);

  const Loader = () => {
    return (
      <div className='flex justify-center items-center'>
        <div
          className='spinner-border border-t-[#3D8DFF] border-r-red-[#3D8DFF] border-l-red-[#3D8DFF]  animate-spin inline-block w-8 h-8 border-4 rounded-full'
          role='status'>
          <span className='visually-hidden'></span>
        </div>
      </div>
    );
  };

  const Error = ({ error }) => {
    return (
      <div className='flex justify-center items-center'>
        <p className='text-red-700 text-center'>{error}</p>
      </div>
    );
  };

  function nextPage() {
    setPage(() => page + 1);
  }

  //   const { isIdle, data: projects } = useQuery(
  //     ['projects', userId],
  //     getProjectsByUser,
  //     {
  //       // The query will not execute until the userId exists
  //       enabled: !!userId,
  //     }
  //   )

  //   useEffect(() => {
  //     setId((i) => data.map((coin) => coin.id));
  //   }, [data]);

  //   const { data: prices, status: success } = useQuery(
  //     "coin_market_prices",
  //     coinChart,
  //     {
  //       enabled: !!id,
  //     }
  //   );

  //   function convertToMint(data) {
  //     return new Date(data);
  //   }

  //   const lineChart = () => {
  //     const data = {
  //       labels: prices.prices.map((time) => convertToMint(time[0])),
  //       datasets: [
  //         {
  //           label: "",
  //           data: prices.prices.map((data) => data[1]),
  //           backgroundColor: "transparent",
  //           borderColor: "#008AED",
  //           borderJoinStyle: "round",
  //           borderCapStyle: "round",
  //           borderWidth: 3,
  //           pointRadius: 0,
  //           pointHitRadius: 10,
  //           lineTension: 0.2,
  //         },
  //       ],
  //     };

  //     const options = {
  //       title: {
  //         display: false,
  //         text: "",
  //         fontSize: 35,
  //       },
  //       legend: {
  //         display: false,
  //         position: "right",
  //       },
  //       //   layout: {
  //       //     padding: {
  //       //       left: 0,
  //       //       right: 0,
  //       //       top: 0,
  //       //       bottom: 0,
  //       //     },
  //       //   },
  //       scales: {
  //         y: {
  //           stacked: false,
  //           display: false,
  //         },
  //         x: {
  //           stacked: false,
  //           display: false,
  //         },
  //       },
  //     };

  //     return (
  //       <Fragment>{success && <Line data={data} options={options} />}</Fragment>
  //     );
  //   };

  const displayCoinData = (data) => {
    if (status === "success") {
      return data.map((coin) => {
        let {
          name,
          symbol,
          current_price,
          price_change_percentage_24h,
          market_cap,
          image,
        } = coin;
        return (
          <div
            key={coin.id}
            className='flex justify-between items-center border-b border-b-[#2B2C3B] md:text-2xl    sm:text-base text-xs font-bold py-2'>
            <div className=' w-[3.4rem] h-[3.4rem] mr-3'>
              <img src={image} alt='' />
            </div>
            <div className='w-1/2 flex justify-between items-center pr-4'>
              <p className=' w-[30%] text-[8px] sm:text-xl text-white '>
                {name}
              </p>

              <p className='w-[20%] text-[8px] text-[#3D8DFF] sm:text-xl uppercase'>
                {symbol}
              </p>
              <p className='w-[20%] text-[8px] text-white text-[#3D8DFF] sm:text-xl uppercase'>
                {market_cap}
              </p>
              <p className=' w-[30%] flex justify-end items-end text-[8px] sm:text-xl text-white'>
                ${current_price.toLocaleString("en-US")}
              </p>
            </div>
            <div className='w-1/2 flex justify-between items-center pl-4'>
              <p
                className={
                  price_change_percentage_24h > 0
                    ? "text-[#0DBB7C]"
                    : "text-red-900"
                }>
                {price_change_percentage_24h > 0 ? "+" : ""}
                {`${price_change_percentage_24h.toFixed(2)}%`}
              </p>
              <img src={Chart} alt='' className='w-[30%]' />
              {/* <div className='w-[8rem] h-10'>{lineChart()}</div> */}
              <Link
                to={"download"}
                className='flex items-center justify-center md:text-base text-[8px]'>
                Trade Now <ArrowRightOutlined className='ml-4 text-[2s0px]' />
              </Link>
            </div>
          </div>
        );
      });
    }
  };

  const showQustionList = () => {
    return (
      <div className='bg-[#101419] w-full h-auto md:rounded-3xl md:py-8 py-4 sm:px-9 px-4'>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={status} />}
        {displayCoinData(data)}
      </div>

      //   </Fragment>
    );
  };

  return (
    <main id='faq'>
      <Navigation />
      <section className='container h-full md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0'>
        <div className='w-full pb-4 md:mb-0 mt-20 mt-48 '>
          <div>
            {/* <h1 className='text-lg mb-4 font-body text-center font-bold text-white'>
              FAQs
            </h1> */}
            <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
              First-hand Insight into the Market
            </h2>
            <p className='text-sm mt-4 font-body text-center font-normal text-white'>
              24hrs metrics that help you understand the market.
            </p>
          </div>
        </div>

        <div className='w-full h-full relative py-4 px-4 '>
          <div className='w-full md:w-80 h-10 mx-auto bg[#080A0C] border border-1 border-white flex items-center justify-center rounded-lg px-1'>
            <SearchOutlined className='text-[#fff] w-7' onClick={() => {}} />
            <input
              type='search'
              className='py-1 w-full bg-transparent focus:outline-none text-white text-xs'
              id='search-question'
              placeholder='Search for an assets'
              onChange={() => {
                //   setQuestion(val.current.value);
              }}
              // ref={val}
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
      </section>
      <section>
        <article className='container h-full mx-auto py-4'>
          <div className='h-full mt-14'>{showQustionList()}</div>
          <div className='w-96 h-24 mx-auto flex justify-center items-center'>
            <button
              className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'
              onClick={nextPage}>
              Load More
            </button>
          </div>
          <div className='w-full pb-4 md:mb-0 mt-20'>
            <div>
              <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
                Still have questions?
              </h2>
              <p className='text-sm mt-4 font-body text-center font-normal text-white'>
                If you cannot find answers to your questions in our FAQ,
                <br /> drop us a line on our Contact page.
              </p>
            </div>
          </div>
        </article>
      </section>
      <PreFooter />
    </main>
  );
};

export default Explore;
