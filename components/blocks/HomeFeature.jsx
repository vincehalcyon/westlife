import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import initializeLazyLoading from "@/lib/services/initializeLazyLoading";
export default function Block({ block }) {
  const {
    background_color,
    image_position,
    image,
    title,
    description,
    button_label,
    button_link,
    button_target,
    custom_trapezoid,
  } = block.main;
  useEffect(() => {
    initializeLazyLoading();
  }, []);

  const bgColor = background_color.toLowerCase();
  let backgroundColor = bgColor.includes("fff") || bgColor.includes("white");

  return (
    <div
      className={
        background_color
          ? image_position === "right"
            ? `${
                backgroundColor === "true"
                  ? `${
                      custom_trapezoid === "true"
                        ? `relative md:ml-5 lg:ml-10`
                        : ``
                    }`
                  : `${
                      custom_trapezoid === "true"
                        ? "relative"
                        : "trapezoid-bottom-left md:trapezoid-left"
                    } md:ml-5 lg:ml-10 sm:mx-0 mx-4`
              }`
            : `${
                custom_trapezoid === "true"
                  ? "relative"
                  : "trapezoid-bottom-right md:trapezoid-right"
              } md:mr-5 lg:mr-10 sm:mx-0 mx-4`
          : "relative"
      }
      style={{
        backgroundColor:
          custom_trapezoid === "true" ? "white" : background_color,
      }}
    >
      <div
        className={`w-full flex-col md:flex-row max-w-[1650px] mx-auto h-[120%] flex justify-center
          ${
            backgroundColor === "true"
              ? "md:mt-12 mt-2 pb-[1rem] md:pr-12 px-6"
              : custom_trapezoid === "true" ? "" : "my-[40px] md:my-16 py-4 md:px-16 px-6"
          }
        `}
      >
        <div
          className={`${
            custom_trapezoid === "true"
              ? `${
                  image_position === "right"
                    ? `absolute top-0 right-0 trapezoid-small-right-mobile md:trapezoid-small-right w-full h-full hidden md:flex`
                    : `absolute top-0 left-0 trapezoid-small-left-mobile md:trapezoid-small-left w-full h-full`
                }`
              : `hidden`
          }`}
          style={{
            backgroundColor: image_position ? background_color : "white",
          }}
        ></div>
        <div
          className={`flex flex-col flex-col-reverse md:grid md:grid-cols-2 max-w-[1400px] min-h-[400px] xl:min-h-[550px] items-center md:pb-5 md:pt-[75px] z-[1] lazy`}
        >
          <Image
            alt="Main Banner"
            blurDataURL={image}
            // src={image}
            loading="lazy"
            data-src={image}
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width={2000}
            height={0}
            className={`w-full sm:max-w-[500px] md:max-w-[850px] lazy mt-[30px] md:mt-[0] ${
              custom_trapezoid === "true" ? "hidden md:block" : ""
            }
            ${button_link ? "" : "mb-[50px] md:mb-0"}
            ${
              background_color === "#FFFFFF" ||
              background_color === "#ffffff" ||
              background_color === "white"
                ? "pb-0"
                : "md:pb-12"
            }
              ${image_position === "right" && "md:order-last"}
            `}
          />

          <div
            className={`flex flex-col justify-center pt-7 md:pt-0 md:mb-6 lg:mb-0 
              ${
                background_color !== "#FFFFFF" ||
                background_color !== "#ffffff" ||
                background_color !== "white"
                  ? "text-[#55616D]"
                  : "text-white"
              }
              ${
                image_position === "right"
                  ? "md:pl-6 2xl:pl-6 xl:pl-6 pr-2 lg:pr-12 "
                  : "md:pl-12 xl:pl-16 md:pr-12 2xl:pr-12"
              } 
            `}
          >
            <h2 className={`text-main-black font-[800] mb-7  md:text-3xl lg:text-[40px] leading-[30px] lg:leading-[50px]  md:tracking-wide sm:pr-0 md:pr-6 text-center md:text-start ${custom_trapezoid === "true" ? "text-[20px] max-w-[600px]" : "text-[28px] md:text-[40px]"}`}>
              {title || block?.title || ""}
            </h2>
            <div
              className={`leading-6 text-[14px] xl:text-lg post-description hasCheck md:text-start text-center`}
              dangerouslySetInnerHTML={{
                __html: description ? description : "",
              }}
            />

            {button_link && button_label && (
              <Link
                href={button_link}
                target={button_target}
                className="hidden md:block mt-6 cursor-pointer slide-line-hover w-fit duration-300 text-[#333333] hover:text-cyan mx-auto md:mx-0"
              >
                <div
                  aria-label="Call to Action Button"
                  className="flex items-center w-fit pb-[2px] "
                >
                  <span className="mr-2 text-lg font-semibold tracking-wider">
                    Learn More
                  </span>
                  <svg
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 12"
                    fill="currentColor"
                  >
                    <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>
        {button_link && button_label && (
          <Link
            href={button_link}
            target={button_target}
            className="mb-[50px] md:hidden mt-6 cursor-pointer w-fit text-[#333333] mx-auto md:mx-0"
          >
            {/* className="mb-[50px] md:hidden mt-6 cursor-pointer border-b-[2px] border-main-black w-fit hover:border-cyan transition-hover duration-300 text-[#333333] hover:text-cyan mx-auto md:mx-0" */}
            <div
              aria-label="Call to Action Button"
              className="flex items-center w-fit pb-[2px] "
            >
              <span className="mr-2 text-[16px] md:text-lg font-semibold tracking-wider">
                Learn More
              </span>
              <svg
                width="16"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 12"
                fill="currentColor"
              >
                <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
