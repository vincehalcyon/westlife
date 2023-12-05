import Image from "next/image";
import CustomIcon from "../svg-custom/CustomIcon";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useRef, useState } from "react";
import Link from "next/link";
// import ScoreRow from "../partials/ScoreRow"

export default function Block({ block }) {
  const { title, websites } = block?.main;
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: true,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  const sliderHandleNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderHandlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const [selectedToggle, setSelectedToggle] = useState(
    block?.main?.websites?.[0]?.tabs?.[1]?.title
  );
  const handleToggleClick = (title) => {
    setSelectedToggle(selectedToggle === title ? null : title);
  };

  return (
    <section className="flex portfolio-carousel flex-col justify-center items-center text-center bg-white pb-[20px] px-[20px] md:pb-[50px]">
      <div className="text-center text-[25px] md:text-[50px] font-[800] leading-[1.3] text-dim-black mb-[48px] md:mb-[20px]">
        {title}
      </div>
      <div className="max-w-[1080px] mx-auto w-full relative">
        <div
          onClick={sliderHandlePrev}
          className={`${currentSlide === 0 ? "text-[#d1d1d1] cursor-not-allowed" : "text-[#686868] cursor-pointer"} z-[1] max-w-[15px] 3sm:max-w-[20px] md:max-w-[36px] tansition-all duration-100 rotate-180 w-fit absolute md:left-0 lg:left-[40px] 1xl:left-[-130px] top-[39%] md:top-[42%] cursor-pointer`}
        >
          <CustomIcon iconType="carouselArrowRight" />
        </div>
        <div
          onClick={sliderHandleNext}
          className={`${currentSlide === websites.length - 1 ? "text-[#d1d1d1] cursor-not-allowed" : "text-[#686868] cursor-pointer"} z-[1] max-w-[15px] 3sm:max-w-[20px] md:max-w-[36px]  tansition-all duration-100 w-fit absolute right-0 md:right-0 lg:right-[40px] 1xl:right-[-130px] top-[39%] md:top-[42%] `}
        >
          <CustomIcon iconType="carouselArrowRight" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {websites.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center md:flex-row mx-auto 3smp-[30px] sm:p-[50px] md:max-w-[700px]  lg:max-w-[800px] w-full 1xl:max-w-full">
                <picture className="w-full h-full object-cover  md:max-w-[355px] justify-center items-center flex">
                  <source media="(min-width: 768px)" srcSet={item.image} />
                  <source
                    media="(max-width: 767px)"
                    srcSet={item.mobile_image || item.image}
                  />
                  <Image
                    src={item.image}
                    width={1130}
                    height={561}
                    alt={item.title}
                    className="w-full h-full object-cover max-w-[500px] md:max-w-[355px] px-[20px] md:px-0 "
                  />
                </picture>
                <div className="w-full text-start md:max-w-[calc(100%-267px)] md:pl-[30px]">
                  <div
                    className={`flex flex-col md:flex-row flex-wrap items-center md:items-end gap-[5px] md:gap-[19px] mb-[43px] md:mb-[10px]`}
                  >
                    <h3 className="whitespace-nowrap text-[25px] sm:text-[40px] md:text-[35px] lg:text-[45px] text-dim-black font-[800] leading-[1.3]">
                      {item.title}
                    </h3>
                    <h4 className="flex md:hidden sm:text-[22px] text-center md:text-start leading-[1.3] text-[#717171]">
                      {item.description}
                    </h4>
                    <div className="whitespace-nowrap flex gap-[4px] md:gap-[7px] items-center text-[12px] sm:text-[17px] md:text-[22px] transition-all duration-100 text-[#0C51AC] leading-[1.3] pb-[7px]">
                      <div className="w-[10px] md:w-[17px]">
                        <CustomIcon iconType="globe" />
                      </div>
                      {item.link}
                    </div>
                  </div>
                  <h4
                    className={`hidden md:flex text-[18px] lg:text-[22px] text-center md:text-start leading-[1.3] text-[#717171] ${
                      item?.description ? "mb-[42px]" : "mb-[66px]"
                    }`}
                  >
                    {item.description}
                  </h4>
                  <div>
                    <div className="w-full">
                      <div
                        className={`overflow-hidden flex justify-center ${
                          item?.tabs?.length === 0 ? "hidden" : ""
                        } `}
                      >
                        <div className="flex border-b-[3px] border-solid border-[#D9D9D9] w-full mb-[25px] mx-[18px] justify-center">
                          <div className="flex sm:px-[20px] bg-red max-w-[663px] mx-auto w-full text-center justify-center">
                            {item?.tabs?.map((item, index) => (
                              <div
                                key={index}
                                onClick={() => handleToggleClick(item.title)}
                                className={`relative flex items-center justify-center gap-[5px] md:gap-[8px] whitespace-nowrap leading-[1.3] min-w-[86px] md:min-w-[165px] text-[12px] 2sm:text-[15px] md:text-[18px] px-[9px] md:px-[29px] py-[7px] md:py-[20px] cursor-pointer transition-all ease-in duration-150
                                  ${
                                    selectedToggle === item.title
                                      ? "active pointer-events-none !bg-[#F3F8FF] !text-[#0C51AC]"
                                      : "bg-[#F7F7F7] hover:bg-[#bbbbbb] text-[#717171] hover:text-black"
                                  } `}
                              >
                                {index === 0 ? (
                                  <div className="w-[9px] md:w-[18px]">
                                    <CustomIcon iconType={"mobile"} />
                                  </div>
                                ) : (
                                  <div className="w-[15px] md:w-[27px]">
                                    <CustomIcon iconType={"desktop"} />
                                  </div>
                                )}
                                {item.title}
                                <div
                                  className={` ${
                                    selectedToggle === item.title
                                      ? ""
                                      : "opacity-0"
                                  }  transition-all ease-in duration-300 absolute bottom-[-4.1px] inset-x-0 border-b-[6px] rounded-full border-solid border-[#0C51AC] z-0 pointer-events-none`}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`max-w-[550px] md:max-w-[664px] h-full max-h-[388px] mx-auto 
                        ${item.tabs.length === 0 ? "hidden" : ""}`}
                      >
                        {item.tabs.map((item, index) => (
                          <React.Fragment key={index}>
                            {selectedToggle === item.title && (
                              //WIP Dynamic Scores
                              // <ScoreRow performance_score={69}
                              // accessibility_score={76}
                              // best_practices_score={98}
                              // seo_score={100}
                              // speed_index={0.3} />
                              <Image
                                src={item.score}
                                width={355}
                                height={228}
                                alt={item.title}
                                className="w-full max-w-[550px] md:max-w-[664px] max-h-[379.81px]  h-full px-[18px] md:px-0"
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
