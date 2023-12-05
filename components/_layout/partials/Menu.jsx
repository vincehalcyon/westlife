import React, { useState, useEffect, useContext, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { useRouter } from "next/router";
import CustomIcon from "@/components/svg-custom/CustomIcon";
// import useCookieBarStore from "@/lib/store/persistentStore";

export default function Menu() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const { tenantDetails, menus, contactUs } = useContext(GlobalContext);
  // const { showCookieBar, setShowCookieBar } = useCookieBarStore();
  const approachingLowSection = scrollY >= 40;
  const isAtHomepage = router.pathname === "/";
  useEffect(() => {
    if (showSideMenu && window.innerWidth < 1024) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showSideMenu]);
  useEffect(() => {
    if (isAtHomepage) {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
    return window.removeEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, [isAtHomepage]);
  return (
    <>
      <div
        className={`h-[100vh] bg-white  overflow-y-auto z-[99999] w-full fixed ${
          showSideMenu ? "flex top-0" : "hidden"
        }`}
      >
        <div className="absolute top-0 right-0 transition duration-500 flex justify-end pr-[20px] items-center h-[100px] text-main-black">
          <div onClick={() => setShowSideMenu(!showSideMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M3.3 33L0 29.7L13.2 16.5L0 3.3L3.3 0L16.5 13.2L29.7 0L33 3.3L19.8 16.5L33 29.7L29.7 33L16.5 19.8L3.3 33Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="h-full mt-3 flex flex-col justify-center mx-auto items-center">
          <Link href={"/"} className="max-w-[190px] w-full mb-[43px]">
            <Image
              prefetch={false}
              src={tenantDetails?.data?.main.logo}
              alt="Website, Mobile App, Software Development. Philippines"
              className=" w-full aspect-ratio-[184/56]"
              width={184}
              height={56}
            />
          </Link>
          <Link
            href={
              "tel:" +
              tenantDetails?.data?.main?.mobile_contact[1]?.contact_number
            }
            onClick={() => {
              `return gtag_report_conversion('tel:${tenantDetails?.data?.main?.mobile_contact[1]?.contact_number}');`;
            }}
            className="pb-[20px] whitespace-nowrap font-bold flex justify-center items-center gap-[11px] text-main-black hover:text-cyan transition-all duration-150 text-2xl leading-[1.3]"
          >
            <div className="max-w-[15px]">
              <CustomIcon iconType={"contactIcon"} />
            </div>
            {tenantDetails?.data?.main?.mobile_contact[1]?.contact_number}
          </Link>
          <ul
            className={`
                    flex flex-col items-center text-center md:mx-0 mx-12 text-main-black list-none gap-y-[21px]
                  `}
          >
            {menus.parentNodes &&
              menus.parentNodes.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    if (link.children.length > 0) {
                      showChildren === link.id
                        ? setShowChildren(null)
                        : setShowChildren(link.id);
                    } else {
                      setShowChildren(null);
                      setShowSideMenu(false);
                      router.push(link.url);
                    }
                  }}
                >
                  <Link
                    href={link.url}
                    className={`text-[30px] leading-[43px] font-bold my-2 border-transparent tracking-normal cursor-pointer
                                ${
                                  router.asPath === link.url &&
                                  router.asPath !== "/"
                                    ? "underline underline-offset-4 text-[#00AAE8] "
                                    : "slide-line-hover"
                                }
                                `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          <Link
            prefetch={false}
            href={contactUs?.data?.main?.button_link}
            className="text-2xl text-white px-[25px] py-[14px] tracking-wider mt-[51px] transition ease-in-out delay-150 bg-[#353535] hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 duration-100 rounded-full cursor-pointer"
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            Contact Us
            <span className="hidden sr-only" hidden>
              Learn More
            </span>
          </Link>
        </div>
      </div>

      <div
        className={` px-[20px] landscape:sticky landscape:sm:fixed portrait:fixed sm:fixed top-0 z-50 w-full mt-0 transition duration-600 ease-in-out text-dim-black overflow-x-hidden overflow-y-hidden font-inter items-center flex h-[80px] lg:h-[100px]
          ${isAtHomepage && !showSideMenu ? "bg-white" : "bg-white"}
          ${
            approachingLowSection && !showSideMenu
              ? "bg-white backdrop-blur-md bg-opacity-[.92] shadow"
              : `${
                  isAtHomepage ? "md:bg-transparent shadow-none" : ""
                } bg-white shadow `
          }
        `}
      >
        <div
          className={`
            max-w-[1285px] w-full flex items-center mx-auto justify-between h-[80px] lg:h-[100px]
          `}
        >
          <Link
            href={"/"}
            className="flex text-lg cursor-pointer"
            onClick={() => router.push(`/`)}
          >
            <Image
              priority={true}
              prefetch={false}
              loading="eager"
              src={tenantDetails?.data?.main.logo}
              alt="Website, Mobile App, Software Development. Philippines"
              className={`${
                showSideMenu ? "hidden" : "block"
              } w-full max-w-[155px] md:max-w-[184px] aspect-ratio-[184/56]`}
              width={184}
              height={56}
            />
          </Link>
          <div className="flex">
            <ul
              className={`lg:flex gap-x-[20px] xl:gap-x-[41px] hidden flex-row items-center whitespace-nowrap overflow-x-auto list-none`}
            >
              {menus.parentNodes &&
                menus.parentNodes.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {
                      if (link.children.length > 0) {
                        showChildren === link.id
                          ? setShowChildren(null)
                          : setShowChildren(link.id);
                      } else {
                        if (link.target === "_blank") {
                          window.open(link.url);
                        } else {
                          setShowChildren(null);
                          router.push(link.url);
                        }
                      }
                    }}
                  >
                    <Link
                      prefetch={false}
                      href={link?.url}
                      target={link?.target}
                      className={`md:text-base text-sm mt-2 border-b-2 border-transparent tracking-normal cursor-pointer
                        ${
                          router.asPath === link.url && router.asPath !== "/"
                            ? "underline underline-offset-4 text-dim-black"
                            : "slide-line-hover"
                        }
                        `}
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <Link
              prefetch={false}
              href={contactUs?.data?.main?.button_link}
              className=" lg:text-[18px] self-center text-center lg:block hidden px-[18px] py-[8px] mr-[25px] ml-[41px] transition ease-in-out delay-150 bg-[#353535] hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
            >
              <span className="text-[18px] leading-[100%] text-white whitespace-nowrap font-[600] tracking-[0.36px]">
                Contact Us
              </span>
            </Link>
            <Link
              href={
                "tel:" +
                tenantDetails?.data?.main?.mobile_contact[1]?.contact_number
              }
              onClick={() => {
                `return gtag_report_conversion('tel:${tenantDetails?.data?.main?.mobile_contact[1]?.contact_number}');`;
              }}
              className="whitespace-nowrap hidden lg:flex justify-center items-center gap-[11px] text-dim-black hover:text-cyan transition-all duration-150 text-[18px] leading-[1.3]"
            >
              <div className="max-w-[13px]">
                <CustomIcon iconType={"contactIcon"} />
              </div>
              {tenantDetails?.data?.main?.mobile_contact[1]?.contact_number}
            </Link>
          </div>

          <div
            className={`${showSideMenu ? "hidden" : "flex lg:hidden"}`}
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="28"
              viewBox="0 0 34 28"
              fill="none"
            >
              <rect width="34" height="4" fill="currentColor" />
              <rect y="12" width="34" height="4" fill="currentColor" />
              <rect y="24" width="34" height="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
