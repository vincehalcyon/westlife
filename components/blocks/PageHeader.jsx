import React from "react";
import CustomIcon from "../svg-custom/CustomIcon";
import Image from "next/image";

export default function Block({ block }) {
  const { title, description, image } = block.main;
  return (
    <>
      {image ? (
        <section className="pt-[30px] pb-[40px] md:py-[134px] px-[20px] md:px-[40px]">
          <div className="max-w-[1138px] w-full mx-auto flex flex-col md:flex-row gap-[34px] md:gap-[51px] justify-center items-center">
            <div className="gap-[17px] md:gap-[40px] flex flex-col max-w-[641px] w-full mx-auto">
              <div className=" mx-auto md:mx-0 text-center md:text-start font-inter font-[800] text-[20px] 1sm:text-[25px] sm:text-[35px] lg:text-[45px] xl:text-[50px] text-main-black leading-none md:leading-[1.3]">
                {title}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="mx-auto md:mx-0 text-center md:text-start font-inter font-[400] text-[12px] 2sm:text-[17px] sm:text-[17px] lg:text-[18px] xl:text-[22px] text-main-black leading-[40px] page-heading tracking-[0.48px]"
              />
            </div>
            <Image
              src={image}
              height={470}
              width={450}
              alt="Halcyon Agile"
              className="3sm:max-w-[294px] md:max-w-[450px] 3sm:max-h-[319px] md:max-h-[470px] mx-auto"
            />
          </div>
        </section>
      ) : (
        <section className="pt-[30px] pb-[40px] md:py-[94px] px-[20px]">
          <div className="text-main-black text-center font-inter text-[20px] 1sm:text-[25px] sm:text-[35px] lg:text-[45px] xl:text-[50px] font-[800] leading-normal pb-[17px] md:pb-[40px]">
            {title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-main-black text-center text-[12px] 2sm:text-[17px] sm:text-[17px] lg:text-[18px] xl:text-[22px] font-[400] leading-[40px] max-w-[926px] mx-auto page-heading"
          />
        </section>
      )}
    </>
  );
}
