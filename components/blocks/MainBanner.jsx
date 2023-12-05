import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomIcon from "../svg-custom/CustomIcon";

export default function Block({ block }) {
  const {
    desktop_image,
    mobile_image,
    title,
    button_label,
    button_link,
    button_target,
  } = block?.main;

  return (
    <>
      <section className="relative min-h-[calc(100vh+10px)] px-[20px]">
        <div className="full-banner max-w-[1296px] w-full mx-auto">
          <picture className="w-full">
            <source media="(min-width: 415px)" srcSet={desktop_image} />
            <source
              media="(max-width: 414px)"
              srcSet={mobile_image || desktop_image}
            />
            <Image
              src={mobile_image || []}
              width={1440}
              height={798}
              className="w-full h-full absolute left-0 right-0 top-0 object-cover min-h-screen"
              alt="Halcyon Agile Banner"
              loading="eager"
            />
          </picture>
          <div className={`relative ${button_label ? "top-[120px]" : "top-[150px]"} md:min-h-[calc(100vh)] md:top-0 flex flex-col items-start justify-center max-w-[300px] sm:max-w-[357px] md:max-w-[582px] w-full`}>
            <h1 className={`font-[700] text-[26px] whitespace-pre-line md:text-[35px] lg:text-[50px] text-main-black leading-[40px] md:leading-[60px] ${button_label ? "" : "md:mb-[182px]"}`}>
              {title}
            </h1>
            {button_link && button_label && (
              <Link
                prefetch={false}
                href={button_link}
                target={button_target}
                className="font-semibold cursor-pointer "
              >
                <div className="flex items-center w-fit border-b-[2px] md:my-8 my-4 rounded-full py-[10px] md:py-[12px] px-[20px] md:px-[26px] text-white transition ease-in-out delay-150 bg-[#353535] hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 hover:scale-110 duration-300">
                  <span className="sr-only">{button_link}</span>
                  <span className="mr-2 text-[12px] md:text-[18px] tracking-wider">
                    Learn More
                  </span>
                  <div className="max-w-[12px] md:max-w-[24px] max-h-[12px] md:max-h-[24px]">
                    <CustomIcon iconType="arrowRight" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
