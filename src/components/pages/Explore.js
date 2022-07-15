import React, { Fragment, useRef, useState } from "react";
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
//  const coinChart = async () => {
//     const response = await fetch(
//       //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=${page}&sparkline=false`
//       `https://api.coingecko.com/api/v3/coins/${getId(
//         id
//       )}/market_chart?vs_currency=usd&days=1`
//     );
//     return response.json();
//   };
const coinMarkets = async (page) => {
  const response = await fetch(
    //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=${page}&sparkline=false`
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  );
  return response.json();
};

export const useGetQuery = (searchvalue, page) => {
  const { data = [], status } = useQuery(
    "data_market_prices",
    () => coinMarkets(page),
    {
      select: (data_market_prices) =>
        data_market_prices.filter((coin) =>
          coin.name.toLowerCase().includes(searchvalue.toLowerCase())
        ),
    }
  );

  return { data, status };
};

const trending = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending?limit=2"
  );
  //   console.log(response.json());
  return response.json();
};

export const Loader = () => {
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

export const Error = ({ error }) => {
  return (
    <div className='flex justify-center items-center'>
      <p className='text-red-700 text-center'>{error}! Please try again.</p>
    </div>
  );
};

const Explore = () => {
  const [page, setPage] = useState(1);
  const [searchCoin, setSearchCoin] = useState("");

  let val = useRef();

  const { data, status } = useGetQuery(searchCoin, page);

  const { data: coins, isSuccess } = useQuery("trend", trending);

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
  //           backgroundColor: "transpare
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

  const displayCoinData = () => {
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
        <tr className='border-b border-[#2B2C3B] ' key={coin.id}>
          <td className='px-2 py-4 whitespace-nowrap text-sm font-bold text-white flex justify-start items-center'>
            <img
              src={image}
              alt='btcimages'
              className='w-[1.4rem] h-[1.4rem] mr-3 rounded-full'
            />
            {name.toUpperCase()}
          </td>
          <td className='text-sm text-white font-light px-1 py-4 whitespace-nowrap text-[#3D8DFF]'>
            {symbol.toUpperCase()}
          </td>
          <td className='text-sm text-white font-light px-6 py-4 whitespace-nowrap'>
            {`$ ${market_cap.toLocaleString("en-US")}`}
          </td>
          <td className='text-sm text-white font-light px-6 py-4 whitespace-nowrap'>
            ${current_price.toLocaleString("en-US")}
          </td>
          {/* className='text-sm text-white font-light px-6 py-4 whitespace-nowrap' */}
          <td
            className={
              price_change_percentage_24h > 0
                ? "text-[#0DBB7C] text-sm"
                : "text-red-600 text-sm"
            }>
            {price_change_percentage_24h > 0 ? "+" : ""}
            {`${price_change_percentage_24h.toFixed(2)}%`}
          </td>
          <td className='text-sm text-white font-light px-6 py-4 whitespace-nowrap'>
            Chart
          </td>
          <td className='text-sm text-white font-light px-1 py-4 whitespace-nowrap'>
            <Link
              to={"download"}
              className='flex items-center justify-center md:text-base text-[8px]'>
              Trade Now <ArrowRightOutlined className='ml-4 text-[2s0px]' />
            </Link>
          </td>
        </tr>
      );
    });
  };

  const showQustionList = () => {
    return (
      <div className='bg-[#101419] w-full h-auto md:rounded-3xl md:py-8 py-4 sm:px-9 px-4 '>
        {status === "loading" && <Loader />}
        {status === "error" && <Error error={status} />}
        <div className='flex justify-between w-full overflow-auto items-center md:text-2xl sm:text-base text-xs font-bold py-2'>
          {status === "success" && (
            <table className='w-full'>
              <thead className='border-b border-[#2B2C3B]'>
                <tr>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white px-6 py-4 text-left'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-[#3D8DFF] px-1 py-4 text-left'>
                    IC{" "}
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white px-6 py-4 text-left'>
                    Market Cap
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white px-6 py-4 text-left'>
                    Price
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white py-4 text-left'>
                    Change
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white px-6 py-4 text-left'>
                    Chart
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-bold text-white px-6 py-4 text-left'>
                    Trade Now
                  </th>
                </tr>
              </thead>
              <tbody>{displayCoinData(data)}</tbody>
            </table>
          )}
        </div>
      </div>

      //   </Fragment>
    );
  };

  const fetchTrending = (coins) => {
    return coins.coins.map(({ item }) => {
      return (
        <Fragment>
          <div className='h-full w-full flex justify-between '>
            <div className='w-28 flex items-center justify-start py-2'>
              <div className='w-18 h-18 rounded-full'>
                <img src={item.thumb} alt={item.name} />
              </div>
              <p className='text-[#B4C0CF] text-[12px] py-2 ml-3'>
                {item.name}
                <br />
                <span className='text-[12px]'>{item.symbol}</span>
              </p>
            </div>
            <div className=''>
              <p className='text-green-500 md:text-base text-sm py-2'>
                {item.price_btc.toFixed(6)} btc
              </p>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <main id='explore'>
      <Navigation />
      <section className='container h-full md:px-16 xl:px-20 mx-auto w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0 '>
        <div className='w-full pb-4 md:mb-0 mt-20 mt-48 '>
          <div>
            <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
              First-hand Insight into the Market
            </h2>
            <p className='text-sm mt-4 font-body text-center font-normal text-white'>
              Your 24hrs metrics that help you understand the market.
            </p>
          </div>
        </div>

        <div className='w-full h-full relative py-4 px-4 '>
          <div className='w-full md:w-80 h-10 mx-auto bg[#080A0C] border border-1 border-white flex items-center justify-center rounded-lg px-1'>
            <SearchOutlined className='text-[#fff] w-7' />
            <input
              type='search'
              className='py-1 w-full bg-transparent focus:outline-none text-white text-xs'
              id='search-question'
              placeholder='Search for an assets'
              onChange={() => {
                setSearchCoin(val.current.value);
              }}
              ref={val}
            />
          </div>
          <button className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 left-[57%] md:left-[85%] z-10'>
            <img src={SMS} alt='appStore icon' className='mr-2' />
            {""}
            Help
          </button>
        </div>
      </section>
      <section>
        <article className='container h-full mx-auto py-4'>
          <div className='h-full mt-14'>{showQustionList()}</div>
          <div className='w-96 h-36 mx-auto flex justify-center items-center'>
            <button
              className='bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-11 py-3 rounded-full text-white'
              onClick={nextPage}>
              Load More
            </button>
          </div>
        </article>
      </section>

      <section className="bg-cover bg-center bg-[#080A0C] bg-[url('/src/assets/trend.png')]  ">
        <article className='container'>
          <div className='flex flex-wrap justify-evenly items-center w-full py-10 '>
            <div className='flex flex-col justify-evenly flex-wrap mx-2 mb-4 rounded-2xl border-2 border-[#3D8DFF] w-[35.3rem] sm:h-auto h-auto px-7 py-3'>
              {/* <img src={secureKey} alt="" /> */}
              <div>
                <p className='text-xl font-bold text-white'>
                  Trending
                  <span className='text-white text-sm opacity-75 ml-2'>
                    24h views
                  </span>
                </p>
              </div>

              <div className=' w-full py-4'>
                {isSuccess && fetchTrending(coins)}
              </div>
            </div>
          </div>
        </article>
      </section>
      <PreFooter />
    </main>
  );
};

export default Explore;
