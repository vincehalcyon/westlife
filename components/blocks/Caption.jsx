import React from "react";
export default function Block({ block }) {
  const { title, background_color, description } = block.main;
  console.log(description, "test");
  const color = background_color;
  return (
    <section
      className={`w-full pt-[35px] md:pt-[55px] pb-[35px] md:pb-[55px] px-[20px]`}
    >
      <div
        className={`${
          background_color ? `py-[45px] sm:py-[60px]` : ` pb-[109px]`
        }  px-[8px] sm:px-[53px] w-full max-w-[1164px] rounded-tl-[30px] rounded-br-[30px] mx-auto`}
        style={{
          backgroundColor: background_color ? background_color : "",
        }}
      >
        <h2
          className={`text-main-black text-[22px] sm:text-[40px] text-center font-[800] leading-[1.3] max-w-[917px] mx-auto 
          `}
          >
          {/* ${ subtitle ? "pb-[15px] md:pb-[53px]" : ""} */}
          {title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: description || "",
          }}
          className="caption"
        />
      </div>
    </section>
  );
}
