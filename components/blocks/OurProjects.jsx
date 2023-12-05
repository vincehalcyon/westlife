import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useScreenSize } from "@/layout/partials/useScreenSize";

export default function Block({ block }) {
  const { title, description, projects } = block.main;
  const { isSmallScreen } = useScreenSize();
  const [visibleItems, setVisibleItems] = useState(6);
  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <section className="px-[20px] min-h-[454px] bg-white">
      <div className="max-w-[1920px] w-full mx-auto flex justify-center py-[50px]">
        <div className="text-center">
          <h2 className="text-[20px] sm:text-[40px] leading-[100%] sm:leading-[50px] tracking-[0.8px] pb-[7px] sm:pb-[29px] font-[800] font-inter ">
            {title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="pb-[10px] sm:pb-[50px] text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.24px] sm:tracking-[0.32px] max-w-[547px] mx-auto font-inter"
          />
          <div className="columns-2 relative">
            {projects
              .slice(0, isSmallScreen ? visibleItems : projects.length)
              .map((e, index) => (
                <div
                  key={index}
                  className="group w-full inline-block align-top items-center bg-white p-[9px] mb-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
                >
                  <div className="relative overflow-hidden lazy">
                    <Image
                      blurDataURL={e.image}
                      placeholder="blur"
                      src={e.image}
                      width={0}
                      height={0}
                      alt={e.name}
                      className="object-cover w-full h-full mx-auto lazy"
                    />
                    <div className="absolute bottom-0 w-full transition-[2000ms] duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-b from-white/0 to-black/100 text-white text-[10px] sm:text-[20px] py-[10px] md:px-[15px] font-[500]">
                      {e.name}
                    </div>
                  </div>
                </div>
              ))}
            {isSmallScreen ? (
              <div className="absolute bottom-0 left-0 w-full h-[102px] bg-gradient-to-t from-white/100 to-transparent/0" />
            ) : (
              <></>
            )}
          </div>
          {isSmallScreen && visibleItems !== projects.length   ? (
            <button
              onClick={loadMore}
              className="px-[28px] py-[5px] rounded-full border-[2px] border-solid border-dim-black text-center text-dim-black text-[12px] leading-[24px] tracking-[0.18px] font-[600] font-inter"
            >
              Load More
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}