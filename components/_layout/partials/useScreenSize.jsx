import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
    setIsTablet(window.innerWidth > 768 && window.innerWidth < 1024);
    setIsDesktop(window.innerWidth > 1023);
  };
  return { isSmallScreen, isTablet, isDesktop };
};



// import { useEffect, useState } from "react";

// export const useScreenSize = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     // Check the screen size on initial component render
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("load", handleResize);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("load", handleResize);
//     };
//   }, []);

//   const handleResize = () => {
//     setIsSmallScreen(window.innerWidth < 760);
//   };

//   return { isSmallScreen }
// };
