import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Link from "next/link";

export default function Block({ block }) {
  const { tenantDetails } = useContext(GlobalContext);
  return (
    <div className="relative h-auto">
      <div className="w-full">
        <Image
          src={"/images/background1.png"}
          alt={""}
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-[925px] object-cover"
        />
      </div>
      <div className="absolute top-0 w-full -z-10">
        <Image
          src={"/images/background2.png"}
          alt={""}
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-[925px] object-cover"
        />
      </div>
      <div className="absolute top-0 flex items-center justify-center w-full h-full p-[10px]">
        <div className="h-[493px] w-[482px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] opacity-[0.85] bg-[#FFF] justify-center flex items-center flex-col gap-y-5 p-[10px]">
          <div className="flex flex-col gap-y-8">
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
              USER LOGIN
            </span>
          </div>
          <form>
            <div className="flex flex-col gap-y-5">
              <input
                className="w-[250px] h-[40px] rounded-[5px] border-[1px] border-[#9A9A9A] border-solid bg-[#FFF] px-[15px] placeholder-[#9A9A9A] text-[16px] font-normal leading-normal"
                placeholder="Email or Username"
              />
              <input
                className="w-[250px] h-[40px] rounded-[5px] border-[1px] border-[#9A9A9A] border-solid bg-[#FFF] px-[15px] placeholder-[#9A9A9A] text-[16px] font-normal leading-normal"
                placeholder="Password"
              />
              <button className="w-[250px] h-[51px] rounded-[32px] bg-[#00AAE8] text-[#FFF] text-center text-[18px] font-semibold leading-[24px] tracking-[0.36px]">
                Log In
              </button>
              <Link
                href="/forgot-password"
                className="text-[#00AAE8] text-[16px] text-center font-normal underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
