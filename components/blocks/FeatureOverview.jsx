import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Block({ block }) {
  const { title, subtitle, content, right_image } = block.main;
  return (
    <section className="py-[22px] 2sm:py-[95px] px-[20px] bg-gradient-to-t from-[#feffff] to-[#ffffff]">
      <div className="container-primary">
        <div className="w-full pb-[18px] 2sm:pb-[62px] flex flex-col lg:flex-row gap-[20px] md:gap-[60px] items-center ">
          <div className="max-w-[600px] order-2 lg:order-1">
            <h2 className="text-main-black text-center lg:text-start text-[20px] 2sm:text-[40px] font-inter font-[800] pb-[5px] 2sm:pb-[10px] leading-[100%]">
              {title}
            </h2>
            <h3 className="text-[15px] 2sm:text-[30px] text-main-black leading-[100%] text-center lg:text-start font-inter font-[500] italic pb-[14px] 2sm:pb-[40px]">
              {subtitle}
            </h3>
            <div
              className="text-main-black text-[12px] 2sm:text-[18px] font-inter text-center lg:text-start leading-[20px] 2sm:leading-[27.5px] tracking-[0.48px] 2sm:tracking-[0.72px]"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <Image
            src={right_image}
            width={500}
            height={250}
            alt="speedometer"
            className="max-w-[290px] md:max-w-[485px] max-h-[142px] md:max-h-[238px] order-1 lg:order-2"
          />
        </div>
        {/* <div className="py-[35px] text-center max-w-[1144px] w-full flex flex-wrap gap-[30px] sm:gap-[100px] md:gap-[130px] rounded-[10px] border-[#D9D9D9] border items-center justify-center"> */}
        <div className="grid grid-cols-2 md:grid-cols-4 py-[35px] max-w-[1144px] w-full text-center text-[12px] md:text-[20px]  rounded-[10px] border-[#D9D9D9] border items-center justify-center">
          <div>
            <div className="score">100</div>
            <p className="font-inter">Performance</p>
          </div>
          <div>
            <div className="score">100</div>
            <p className="font-inter">
              Accessibility
            </p>
          </div>
          <div>
            <div className="score">100</div>
            <p className="font-inter">
              Best Practices
            </p>
          </div>
          <div>
            <div className="score">100</div>
            <p className="font-inter">SEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
