import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Block({ block, index }) {
  const { asPath } = useRouter();
  const {
    title,
    image,
    image_position,
    description,
    button_label,
    button_link,
    button_target,
    features,
  } = block.main;
  return (
    <section className="bg-gradient-to-b from-white from-1% to-[#f1fbfe] to-50%">
      {features?.map((feature, index) => (
        <div key={index}>
          <div className="max-w-[1650px] w-full mx-auto flex justify-center ">
            <div
              className={`max-w-[283px] md:max-w-[1400px] flex flex-col lg:flex-row text-center md:text-start items-center gap-[20px] lg:gap-[63px] lazy py-[50px] md:py-[100px] ${index === features?.length - 1 ? "" : "border-[#D9D9D9] border-b-[1.5px]"}`}
            >
              <Image
                src={feature?.image}
                width={500}
                height={500}
                alt={feature?.title}
                className={`max-w-[245px] md:max-w-[350px] max-h-[170px] md:max-h-[300px] ${
                  feature?.image_position === "right" && "lg:order-last"
                }`}
              />
              <div className="max-w-[599px]">
                <h2 className="text-main-black text-[20px] 2sm:text-[40px] pb-[20px] lg:pb-[40px] font-inter font-[800] leading-[100%] text-center lg:text-start">
                  {feature?.title}
                </h2>
                <div className="text-[12px] 2sm:text-[18px] leading-[27.5px] tracking-[0.72px] font-inter text-center lg:text-start">
                  <div
                    dangerouslySetInnerHTML={{ __html: feature?.description || "" }}
                  />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
