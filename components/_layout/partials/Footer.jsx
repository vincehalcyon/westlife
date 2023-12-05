import Link from "next/link";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import React, { useContext } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Image from "next/image";
export default function Footer() {
  const { tenantDetails, menusFooter } = useContext(GlobalContext);
  const currentYear = new Date().getFullYear();

  return (
    <section className="px-[20px] bg-[#F2F2F2]">
      <div className="flex flex-col justify-center items-center 3sm:items-start 3sm:flex-row w-full py-[30px] gap-[30px] max-w-[1290px] mx-auto text-center 3sm:text-start">
        <div className="w-[50%] lg:w-[2/5] grid lg:grid-rows-4 lg:grid-flow-col h-[100%] gap-y-[12px] 3sm:gap-y-[20px]">
          {menusFooter.parentNodes.map((item, i) => (
            <div key={i}>
              <Link
                href={`${item.url}`}
                className="text-[#353535] text-[12px] lg:text-[16px]"
              >
                {item.label}
              </Link>
            </div>
          ))}
          <Link href={"/"} className="max-w-[122px] w-full mx-auto 3sm:mx-0">
            <Image
              src={tenantDetails?.data?.main.logo}
              alt="Halcyon Agile Logo"
              className="lg:hidden w-full h-full"
              width={122}
              height={37}
            />
          </Link>
        </div>
        <div className="font-inter text-dim-black text-[11px] sm:text-[16px] w-[50%] lg:w-full flex flex-col lg:flex-row gap-[14px]">
          <div className=" lg:w-[33.33%]">
            <div className="footer-details md:mb-[20px]">
              <p className="font-bold">Mobile</p>
              {tenantDetails?.data?.main?.mobile_contact?.map((item, index) => (
                <Link
                  key={index}
                  href={"tel:" + item?.contact_number}
                  onClick={() => {
                    `return gtag_report_conversion('tel:${item.contact_number}');`;
                  }}
                >
                  {item?.contact_number} {item?.service_provider}
                </Link>
              ))}
            </div>
            <div className="footer-details">
              <p className="font-bold">Landline</p>
              {tenantDetails?.data?.main?.landline_contact?.map(
                (item, index) => (
                  <Link
                    key={index}
                    href={"tel:" + item?.contact_number}
                    onClick={() => {
                      `return gtag_report_conversion('tel:${item.contact_number}');`;
                    }}
                  >
                    {item?.contact_number}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="footer-details lg:w-[33.33%] ">
            <div className="footer-details">
              <p className="font-bold">Sales</p>
              <Link
                href={"mailto:" + tenantDetails?.data?.main?.sales_contact}
                className="mb-[20px]"
              >
                {tenantDetails?.data?.main?.sales_contact}
              </Link>
              <p className="font-bold">Recruitment</p>
              <Link
                href={
                  "mailto:" + tenantDetails?.data?.main?.recruitment_contact
                }
                className="break-all"
              >
                {tenantDetails?.data?.main?.recruitment_contact}
              </Link>
            </div>
          </div>
          <div className="footer-details lg:w-[33.33%]">
            <p className="font-bold">Address</p>
            <div
              className={`text-center 3sm:text-start leading-[200px] flex-wrap`}
              dangerouslySetInnerHTML={{
                __html: tenantDetails?.data?.main?.office_address || "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center py-[10px] border-t-[0.5px] border-[#353535] text-dim-black mx-[21px] text-[12px]">
        Copyright {currentYear} Halcyon Digital Media Design Inc.
      </div>
    </section>
  );
}
