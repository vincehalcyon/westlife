import React from "react";
import CustomIcon from "../svg-custom/CustomIcon";

export default function Block({ block }) {
  const { title, description, quotation_marks, image } = block.main;
  return (
    <section className="px-[20px] pb-[22px] pt-[30px] 2sm:py-[50px] md:py-[95px] overflow-hidden">
      <div className="container-primary">
        <div className="relative max-w-full md:max-w-[772px] mx-auto w-fit">
          <div className="text-[#EEEEEE] absolute top-0 left-[-40px] 4sm:left-[-50px] sm:left-[-70px] md:left-[-90px] lg:left-[-100px] xl:left-[-150px] h-fit w-[40px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[116px]">
            <CustomIcon iconType="quote" />
          </div>
          <div className=" text-[#EEEEEE] absolute rotate-180 bottom-0 right-[-40px] 4sm:right-[-50px] sm:right-[-70px] md:right-[-90px] lg:right-[-100px] xl:right-[-150px] h-fit w-[40px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[116px]">
            <CustomIcon iconType="quote" />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-center md:text-start font-inter page-header text-[20px] md:text-[35px] lg:text-[45px] xl:text-[50px] w-full max-w-[205px] md:max-w-full relative md:left-[-9px] lg:left-[-3px]"
          />
        </div>
        <div className="max-w-[300px] sm:max-w-[530px] md:max-w-[550px] lg:max-w-[688px] xl:max-w-[769px] mx-auto w-full">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-center md:text-start font-inter font-justify text-[#353535] text-[12px] sm:text-[17px] lg:text-[18px] xl:text-[18px] leading-[27.5px] tracking-[0.72px] pt-[40px]"
          />
        </div>
      </div>
    </section>
  );
}
