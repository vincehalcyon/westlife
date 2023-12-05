import Image from "next/image";
import React from "react";
export default function Block({ block }) {
  const { title, cards, optional_caption } = block.main;

  return (
    <section className="px-[20px] py-[36px] sm:py-[150px]">
      <div className="container-primary">
        <h2 className={`text-center ${cards.length > 4 ? "" : "md:text-start" } text-main-gray text-[20px] sm:text-[50px] font-[800] pb-[36px] sm:pb-[75px] leading-[100%]`}>
          {title}
        </h2>
        <div
          className={`grid grid-cols-1 ${
            cards.length > 4
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2"
          } gap-[20px] md:gap-[30px]`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="mx-auto w-full px-[16px] py-[40px] sm:px-[55px] sm:py-[45px] max-w-[556px] rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7EE]"
            >
              <div className="max-w-[50px] justify-center flex items-center max-h-[50px] 2sm:max-w-[100px] 2sm:min-h-[100px] 2sm:max-h-[100px] mx-auto md:mx-0">
                <Image
                  src={card?.image ? card?.image : ""}
                  width={100}
                  height={105}
                  alt={card.title}
                  className="h-full w-full object-contain "
                />
              </div>
              <h3 className="text-center md:text-start text-[20px] sm:text-[40px] py-[21px] md:pt-[50px] md:pb-[30px] text-main-black font-[800] leading-[100%]">
                {card.title}
              </h3>
              <div
                className="text-center md:text-start text-[12px] sm:text-[18px] text-main-gray leading-[20px]  md:leading-[27.5px] tracking-[0.72px]"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
        {optional_caption == "with_caption" ? (
          <div className="w-full py-[35px] sm:py-[70px] px-[13px] sm:px-[20px] max-w-[1132px] rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7EE]">
            <h2 className="text-main-black text-[20px] sm:text-[40px] text-center font-[800] pb-[20px] leading-[100%]">
              {block.caption.caption_title}
            </h2>
            {/* <h3 className="text-main-gray text-[12px] sm:text-[30px] text-center font-[500] italic max-w-[238px] sm:max-w-none mx-auto"> */}
            <h3 className="text-main-gray text-[12px] sm:text-[30px] text-center font-[500] italic  mx-auto">
              {block.caption.caption_subtitle}
            </h3>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
