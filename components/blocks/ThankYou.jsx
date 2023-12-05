import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Block({ block }) {
  const { image, heading, subheading } = block.main;

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-[50px] md:pt-[100px] justify-center px-[40px] overflow-y-hidden">
        <div className=" shadow-[0_3px_15px_rgb(0,0,0,0.25)] rounded-[12px] md:rounded-[20px] bg-white max-w-[761px] p-[20px] 3sm:p-[34px] md:p-[64px] mx-auto w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src={image}
              width={233}
              height={159}
              alt="Message Sent"
              className="mb-[37px] md:mb-[50px] h-full w-full max-w-[160px] md:max-w-[233px]"
            />
            <div>
              <h1 className="font-[800] text-[20px] md:text-[40px] leading-[1.3] text-main-black mb-[11px] md:mb-[20px]">
                {heading}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: subheading }}
                className="text-[#787878] font-[400] text-[10px] md:text-[20px] 3sm:tracking-[0.4px] md:tracking-[0.8px] mb-[37px] md:mb-[50px]"
              />
            </div>
            <Link
              href={"/"}
              className="text-white rounded-[50px] transition ease-in-out delay-150 bg-main-black hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 duration-100 py-[6px] md:py-[16px] px-[15px] md:px-[60px] text-center text-[10px] 3sm:text-[12px] md:text-[22px] font-[600] leading-[27.5px] tracking-[0.48px] md:tracking-[0.8px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Image
          src={"../images/thank-you-page-background.webp"}
          width={1440}
          height={920}
          alt="Thank You Page Background"
          className="absolute min-h-screen w-full top-0 right-0 z-[-100]"
        />
      </section>
    </>
  );
}
