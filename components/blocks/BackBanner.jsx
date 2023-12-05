import Image from "next/image";
import React from "react";
import { useHandleResize } from "@/lib/hooks/useHandleResize";
import Design from "@/public/images/banner-design.webp";
import { useRouter } from "next/router";
import MobileDesign from "@/public/images/mobile-banner-design.webp";

export default function Block({ block }) {
  const { desktop_image, mobile_image, background_color } = block.main;
  const bgColor = background_color.toLowerCase();
  const { asPath } = useRouter();

  return (
    <>
      <section
        style={{
          backgroundColor: background_color,
        }}
        className={`relative 2.5sm:mt-[50px] lg:mt-[100px] flex items-center min-h-[100vh] 2sm:min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[512px] full-banner p-[10px]`}
      >
        <picture className="w-full ">
          <source media="(min-width: 415px)" srcSet={desktop_image} />
          <source
            media="(max-width: 414px)"
            srcSet={mobile_image || desktop_image}
          />
          <Image
            src={mobile_image || []}
            width={1440}
            height={512}
            className="w-auto h-auto mx-auto z-[1] relative"
            alt="Halcyon Agile Banner"
            loading="eager"
          />
        </picture>
        <picture>
          <source media="(min-width: 415px)" srcSet={Design} />
          <source media="(max-width: 414px)" srcSet={MobileDesign || Design} />
          <Image
            src={MobileDesign}
            width={831}
            height={351}
            alt="Banner Design"
            className={`${
              asPath === "/case-studies" ? "hidden md:flex absolute" : "hidden"
            } right-0 bottom-0`}
          />
        </picture>
      </section>
    </>
  );
}

// min-h-[calc(88vh+10px)]

// import Image from "next/image";
// import React from "react";
// import { useHandleResize } from "@/lib/hooks/useHandleResize";

// export default function Block({ block }) {
//   const { desktop_image, mobile_image } = block.main;
//   const viewportWidth = useHandleResize();
//   return (
//     <>
//       <section className="relative min-h-[calc(88vh+10px)] md:min-h-[512px] mt-[80px] lg:mt-[100px] full-banner">
//         <div>
//           <picture className="w-full">
//             <source media="(min-width: 415px)" srcSet={desktop_image} />
//             <source media="(max-width: 414px)" srcSet={mobile_image || desktop_image} />
//             <Image
//               src={mobile_image || []}
//               width={1440}
//               height={798}
//               className="w-full h-full absolute left-0 right-0 top-0 object-cover min-h-[calc(88vh+10px)] md:min-h-[512px]"
//               alt="Halcyon Agile Banner"
//               loading="eager"
//             />
//           </picture>
//         </div>
//       </section>
//     </>
//   );
// }
