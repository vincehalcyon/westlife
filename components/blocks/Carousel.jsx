import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import initializeLazyLoading from "@/lib/services/initializeLazyLoading";

export default function Block({ block }) {
  const { carousel, carouselType } = block.main;
  const sliderRef = useRef(null);

  const desktopView = carouselType === "desktop";

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: desktopView ? 3 : 5,
    speed: 500,
    responsive: desktopView
      ? //DESKTOP
        [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "50px",
            },
          },
        ]
      : [
          //MOBILE
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 768,

            settings: {
              slidesToShow: 1,
              infinite: true,
            },
          },
        ],
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  useEffect(() => {
    initializeLazyLoading();
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-[50px] overflow-hidden">
      {desktopView ? (
        <div className="md:max-w-[1650px]">
          <div className="relative mx-auto items-center max-w-[322px] md:max-w-[730px] lazy">
            <Image
              // src={"/Desktop-Frame.png"}
              width={730}
              height={560}
              quality={100}
              alt="Mobile"
              loading="lazy"
              data-src={"/Desktop-Frame.png"}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="mx-auto lazy"
            />

            <div className="absolute top-0 left-0 pt-[13px] pb-[68px] px-[13px] md:pb-[157px] md:pt-[30px] md:px-[29px] w-full h-full lazy">
              <Image
                // src={carousel[currentSlide].image}
                width={664}
                height={375}
                alt="ActiveSlide"
                loading="lazy"
                data-src={carousel[currentSlide].image}
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                className="object-cover w-full h-full lazy"
              />
            </div>
          </div>

          <div className="flex relative text-[40px] items-center justify-center py-[20px] max-w-[300px] mx-auto">
            <div
              onClick={handlePrev}
              className="absolute left-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M15 2.18557e-06L18.5 3.625L9.625 12.5L40 12.5L40 17.5L9.625 17.5L18.5 26.375L15 30L-1.31134e-06 15L15 2.18557e-06Z"
                  fill="#353535"
                />
              </svg>
            </div>

            <h1 className="text-center text-[24px]">
              {carousel[currentSlide].title}
            </h1>

            <div
              onClick={handleNext}
              className="absolute right-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M25 30L21.5 26.375L30.375 17.5H0V12.5H30.375L21.5 3.625L25 0L40 15L25 30Z"
                  fill="#353535"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-[100vw] px-[20px]">
            <Slider ref={sliderRef} {...settings}>
              {carousel.map((item, index) => (
                <div
                  className={`transition relative ${
                    index === currentSlide
                      ? "origin-center active"
                      : "not-active opacity-50 scale-[.9]"
                  }`}
                  key={index}
                >
                  <div className="flex justify-center rounded-3xl lazy">
                    <Image
                      // src={item.image}
                      width={418}
                      height={233}
                      alt={item.title}
                      loading="lazy"
                      data-src={item.image}
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="h-[233px] w-full rounded-3xl object-cover lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="max-w-[1650px] ">
          <div className="md:max-w-[108vw] lg:max-w-[128vw] mx-auto relative">
            <Slider ref={sliderRef} {...settings}>
              {carousel.map((item, index) => (
                <div
                  className={`transition relative ${
                    index === currentSlide
                      ? "origin-center active"
                      : "not-active opacity-50 scale-[.9]"
                  }`}
                  key={index}
                >
                  <div className="flex justify-center rounded-3xl lazy">
                    <Image
                      // src={item.image}
                      width={245}
                      height={525}
                      alt={item.title}
                      loading="lazy"
                      data-src={item.image}
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="rounded-3xl lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>

            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 z-10">
              <Image
                src={"/Iphone-Frame.png"}
                width={269}
                height={500}
                quality={100}
                loading="lazy"
                alt="Mobile"
              />
            </div>
          </div>

          <div className="flex relative text-[40px] items-center justify-center py-[20px] max-w-[300px] mx-auto">
            <div
              onClick={handlePrev}
              className="absolute left-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M15 2.18557e-06L18.5 3.625L9.625 12.5L40 12.5L40 17.5L9.625 17.5L18.5 26.375L15 30L-1.31134e-06 15L15 2.18557e-06Z"
                  fill="#353535"
                />
              </svg>
            </div>

            <h1 className="text-center text-[24px]">
              {carousel[currentSlide].title}
            </h1>

            <div
              onClick={handleNext}
              className="absolute right-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M25 30L21.5 26.375L30.375 17.5H0V12.5H30.375L21.5 3.625L25 0L40 15L25 30Z"
                  fill="#353535"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
