import React from "react";
export default function Block({ block }) {
  const { title, description } = block.main;

  return (
    <div className="flex flex-col justify-center w-full pt-[80px] md:pt-[100px] ">
      <div className="flex items-center justify-center min-h-[120px] bg-gradient-to-t from-[#2C80A6]  to-[#00AAE8]">
        <h2 className="text-[42px] font-[600] text-white leading-[1.3]">{title}</h2>
      </div>
      <div className="flex justify-center w-full head-title">
        <div className="container p-[20px] sm:px-[50px] py-[50px] md:py-[100px]">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}
