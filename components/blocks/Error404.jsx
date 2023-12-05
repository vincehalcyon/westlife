import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { useRouter } from "next/router";

export default function Block({ block }) {
  const { title, description } = block.main;
  const { tenantDetails } = useContext(GlobalContext);
  const router = useRouter();
  return (
    <div className="relative h-auto">
      <div className="w-full">
        <Image
          src={"/images/background3.jpg"}
          alt={""}
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-[925px] object-cover"
        />
      </div>
      <div className="absolute top-0 flex items-center justify-center w-full h-full p-[10px]">
        <div className="h-[493px] w-[482px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] opacity-[0.85] bg-[#FFF] justify-center flex items-center flex-col gap-y-5 p-[10px]">
          <div className="flex flex-col gap-y-10">
            <Image
              priority={true}
              loading="eager"
              src={tenantDetails?.data?.main.logo}
              alt="Halcyon Agile Logo"
              className="w-[250px] h-[76px]"
              width={0}
              height={0}
              quality={100}
            />
            <span className="text-[#555] text-center text-[22px] font-bold tracking-[2.2px]">
              {title}
            </span>
          </div>
          <div className="flex flex-col max-w-[318px] gap-y-8">
            <div className="flex items-center gap-x-5">
              <Image
                priority={true}
                loading="eager"
                src={"/brokenlink.png"}
                alt="Halcyon Agile Logo"
                className="w-[79px] h-[79px] 3sm:w-[85px] 3sm:h-[85px]"
                width={0}
                height={0}
                quality={100}
              />
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="font-normal text-[14px] 3sm:text-[18px] leading-[25px] text-[#555555]"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => router.push(`/`)}
                className="w-[250px] h-[51px] rounded-[32px] bg-[#00AAE8] text-[#FFF] text-center text-[18px] font-semibold leading-[24px] tracking-[0.36px]"
              >
                &lt;&lt; BACK TO HOME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
