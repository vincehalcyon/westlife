import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import initializeLazyLoading from "@/lib/services/initializeLazyLoading";

export default function Block({ block }) {
  const {
    title,
    image,
    image_position,
    description,
    button_label,
    button_link,
    button_target,
    caption,
    slogan,
  } = block.main;

  useEffect(() => {
    initializeLazyLoading();
  }, []);

  return (
    <section className="px-[20px] min-h-[454px]">
      <div className="max-w-[1650px] w-full mx-auto flex justify-center py-[50px]">
        <div className="max-w-[1400px] flex flex-col md:flex-row gap-[63px] text-center md:text-start items-center ">
          <div
            className={` md:${
              image_position === "right" && "order-last"
            } text-center rounded-[32px]  max-w-[548px] px-[20px] md:px-[65px] w-full py-[39px] min-h-[343px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] lazy`}
          >
            <Image
              blurDataURL={image}
              placeholder="blur"
              // src={image}
              width={78}
              height={78}
              alt={title}
              loading="lazy"
              data-src={image}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              className="mx-auto pb-[30px] lazy"
            />
            <div
              className="blue-text text-[24px] leading-[35px] tracking-[0.48px] font-bold pb-[40px]"
              dangerouslySetInnerHTML={{ __html: slogan || "" }}
            />
            {button_link && button_label && (
              <Link
                href={button_link}
                target={button_target}
                className="mt-6 cursor-pointer block max-w-[418px] mx-auto hover:-translate-y-0.5 hover:scale-110 duration-300"
              >
                <div className="bg-cyan  py-[12px] text-[18px] font-[600] flex items-center border-b w-full max-w-[418px] h-[51px] justify-center mx-auto border-cyan rounded-[32px] ">
                  <span className="mr-2 text-lg font-semibold tracking-wider text-white">
                    {button_label}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 12"
                    fill="white"
                  >
                    <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                  </svg>
                </div>
              </Link>
            )}
          </div>
          <div>
            <h2 className="text-[30px] lg:text-[40px] font-bold pb-[20px] leading-[46px] tracking-[0.8px]">
              {title}
            </h2>
            <div className="text-[16px]">
              <div
                dangerouslySetInnerHTML={{ __html: description || "" }}
                className="hasCheck"
              />
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
