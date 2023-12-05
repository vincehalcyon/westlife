import React, { useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "@/lib/context/GlobalContext";
import CustomIcon from "../svg-custom/CustomIcon";
import Link from "next/link";
export default function Block({ block }) {
  const router = useRouter();
  const { asPath } = useRouter();
  const { title, description, button_label, button_link } = block.main;
  const { contactUs } = useContext(GlobalContext);
  return (
    <>
      <div
        className={`relative flex items-center justify-center ${
          asPath === "/software"
            ? "contact-us-background"
            : "contact-us-background-white"
        } h-[300px] sm:h-[600px]`}
      >
        <div className="flex flex-col items-center max-h-[] max-w-[270px] sm:max-w-[596px] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.06)]">
          <div className="px-[20px] md:px-0 leading-[1.3] tracking-[0.4px] md:tracking-[0px] max-w-[429px] text-center text-[20px] sm:text-[30px] md:text-[40px] font-bold font-inter pt-[30px] sm:pt-[74px] text-main-black">
            {contactUs?.name}
          </div>
          <div
            className={`text-[6px] leading-[100%] sm:text-[12px] md:text-[19px] font-[500] italic text-center text-main-black pb-[10px] sm:pt-[20px] sm:pb-[53px] px-[30px] sm:px-[60px]`}
            dangerouslySetInnerHTML={{
              __html: contactUs?.data?.main?.description || "",
            }}
          />
          <div className="flex justify-center pb-[30px] sm:pb-[40px]">
            <Link
              class={`flex gap-[4px] justify-center items-center px-[11px] sm:px-[22px] py-[2px] sm:py-[15px] transition ease-in-out delay-150 bg-[#353535] hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer`}
              href={`${contactUs?.data?.main?.button_link}`}
            >
              <span className="text-[12px] sm:text-[18px] font-[600]  leading-[24px] tracking-[0.12px] md:tracking-[0.36px]">
                {button_label}
              </span>
              <div className="max-w-[12px] md:max-w-[24px] max-h-[12px] md:max-h-[24px]">
                <CustomIcon iconType="arrowRight" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
