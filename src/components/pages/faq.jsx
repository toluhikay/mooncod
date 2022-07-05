import React, { Fragment, useState } from "react";
import SMS from "../../assets/sms.png";
import Navigation from "../navigation/navigation.component";
import { SearchOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";
import PreFooter from "./PreFooter";

const questions = [
  {
    id: 0,
    headline: "Does Mooncod have transaction fees to send or receive?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 1,
    headline: "How do I update Mooncod?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 2,
    headline: "How do I import a private key?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 3,
    headline: "How does Mooncod make money?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 4,
    headline: "Can I use the same Mooncod wallet on multiple devices?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 5,
    headline: "How do I contact Mooncod Support?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 6,
    headline: "How do I create multiple portfolios on the same device?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
  {
    id: 7,
    headline: "What happens if I lose access to my wallet?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus, sodales felis felis vel. Neque nam nisi, scelerisque luctus.",
  },
];
const Faq = function () {
  const [activeIndex, setActiveIndex] = useState(null);

  const onAccordionOpen = function (id) {
    setActiveIndex(id);
  };
  const onAccordionClose = function (id) {
    setActiveIndex(null);
  };

  const showQustionList = () => {
    const questionList = questions.map((question, index) => {
      const active = activeIndex === question.id ? "h-full" : "h-16";
      const slide = activeIndex === question.id ? "opacity-1" : "opacity-0";
      return (
        <Fragment key={index}>
          <div className={`${active} overflow-y-hidden my-2`}>
            <div
              className='w-4/5 lg:w-1/2 h-14 mx-auto flex justify-between items-center px-6 rounded-lg outline outline-1 outline-offset-1 bg-[#080A0C] outline-[#3D8DFF] open mt-1'
              onClick={() => onAccordionOpen(index)}>
              <h2 className='text-sm md:text-md md:text-lg text-white'>
                {question.headline}
              </h2>
              <PlusOutlined className='text-[#454545] cursor-pointer icon' />
            </div>
            <div
              className={`w-4/5 lg:w-1/2 h-full ${slide} transition transition-all ease-linear duration-300 mx-auto px-6 py-6 rounded-lg mt-3  bg-[#080A0C] outline outline-1 outline-offset-1 outline-[#3D8DFF]`}>
              <div className='h-full mx-auto flex justify-between items-center py-2'>
                <h4 className='text:sm md:text-md md:text-lg text-white'>
                  {question.headline}
                </h4>
                <MinusOutlined
                  className='text-[#454545]'
                  onClick={() => onAccordionClose()}
                />
              </div>
              <p className='mt-10 text-white text-sm leading-6 lg:text-md'>
                {question.description}
              </p>
            </div>
          </div>
        </Fragment>
      );
    });
    return questionList;
  };

  //   const onOpen

  return (
    <main id='faq'>
      <Navigation />

      <section className='container h-full md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 lg:mt-0'>
        <div className='w-full pb-4 md:mb-0 mt-20'>
          <div>
            <h1 className='text-lg mb-4 font-body text-center font-bold text-white'>
              FAQs
            </h1>
            <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
              Frequently asked questions
            </h2>
            <p className='text-sm mt-4 font-body text-center font-normal text-white'>
              Have questions? we are we're here to help.
            </p>
          </div>
        </div>

        <div className='w-full h-full relative py-4 '>
          <div className='w-80 h-10 mx-auto bg[#080A0C] border border-1 border-white flex items-center justify-center rounded-lg px-1'>
            <SearchOutlined className='text-[#fff] w-7' />

            <input
              type='search'
              className='py-1 w-full bg-transparent focus:outline-none text-white text-xs'
              id='search-question'
              placeholder='Search'
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

          <div className='w-full pb-4 md:mb-0 mt-20'>
            <div>
              <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
                Still have questions?
              </h2>
              <p className='text-sm mt-4 font-body text-center font-normal text-white'>
                If you cannot find answers to your questions in our FAQ,
                <br /> you can always contact us. We will answer to you shortly!
              </p>
            </div>
          </div>
        </article>
      </section>
      <PreFooter />
    </main>
  );
};

export default Faq;
