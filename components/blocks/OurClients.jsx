import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "react-use";
import initializeLazyLoading from "@/lib/services/initializeLazyLoading";
import React, { useEffect } from "react";

export default function Block({ block }) {
  const { title, description, images = [] } = block?.main;
  const { width } = useWindowSize();
  // let size = 5;
  // let speed = 4000;
  // if (width > 1024) {
  //   size = 7;
  //   speed = 4000;
  // } else if (width > 800) {
  //   size = 4;
  //   speed = 3000;
  // } else {
  //   size = 3;
  //   speed = 3000;
  // }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: speed,
    // autoplaySpeed: speed,
    // cssEase: "linear",
    // pauseOnHover: false,
    // draggable: false,
  };

  useEffect(() => {
    initializeLazyLoading();
  }, []);

  return (
    <div className="flex flex-col mt-16 space-y-4 overflow-hidden text-center">
      <div>
        <div
          className={`font-bold md:text-[2.5rem] sm:text-4xl smallerMobile:text-3xl text-2xl md:pb-[50px]`}
        >
          {title || ""}
        </div>
        {/* <div
          className={`flex justify-center text-center leading-6 md:text-lg text-sm post-description max-w-xl py-6 px-3 mb-5 mx-auto`}
          dangerouslySetInnerHTML={{ __html: description || "" }}
        /> */}
      </div>
      <div className="flex flex-row flex-wrap justify-center space-y-7">
        {/* <Slider {...settings}> */}
        {images.map((image, i) => (
          <div className="!flex focus:outline-none justify-center lazy" key={i}>
            <Image
              alt={image}
              // src={image}
              loading="lazy"
              data-src={image}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              width={171}
              height={171}
              className="object-contain mx-2 md:mx-14 lazy"
            />
          </div>
        ))}
        {/* </Slider> */}
        {/* <Slider {...settings} rtl="false">
          {images.slice(9,18).map((image, i) => (
            <div className="!flex focus:outline-none justify-center" key={i}>
              <Image
                alt={image}
                src={image}
                width={140}
                height={140}
                className="object-contain transition ease-in-out delay-100"
              />
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
}
