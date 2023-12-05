import React, { useState, useEffect } from "react";
import { getCookie } from "@/lib/services/cookieUtil";

const CookieBar = ({ setHasAcceptedCookies }) => {
  const [showCookieBar, setShowCookieBar] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  useEffect(() => {
    const hasAcceptedCookies = getCookie("cookiesAccepted");
    if (hasAcceptedCookies) {
      setHasAccepted(true);
      setHasAcceptedCookies(true); // Update hasAcceptedCookies state in the parent component
    } else {
      setShowCookieBar(true);
    }
  }, [setHasAcceptedCookies]);

  const acceptCookies = () => {
    setCookie("cookiesAccepted", "true", 365); // Set the cookie to expire in 1 year (365 days)
    setHasAccepted(true);
    setShowCookieBar(false);
    setHasAcceptedCookies(true);
  };
  const rejectCookies = () => {
    sessionStorage.setItem("cookiesRejected", "true");
    setShowCookieBar(false);
  };

  useEffect(() => {
    const cookiesRejected = sessionStorage.getItem("cookiesRejected");
    if (cookiesRejected) {
      setShowCookieBar(false);
    }
  }, []);

  return showCookieBar && !hasAccepted ? (
    <div
      className={`w-full fixed bottom-0 z-[9999999999] px-[20px] pointer-events-none ${
        showCookieBar ? "block" : "hidden"
      }`}
    >
      <div className="max-w-[1296px] h-full mx-auto w-full mb-[25px] md:mb-[49px]">
        <div className="pointer-events-auto flex flex-col 2sm:flex-row gap-[16px] max-w-[562px] h-full rounded-[20px] bg-white p-[15px] sm:p-[25px] shadow-[0px_0px_10px_rgba(0,0,0,0.32)]">
          <div className="flex flex-col gap-[8px] sm:gap-[15px]">
            <div className="text-dim-black text-[20px] font-[800] leading-[1.3]">
              Cookies Policy
            </div>
            <div className="text-main-black text-[12px] leading-[1.3]">
              Halcyon Agile uses cookies to ensure that you get the best
              experience. By continuing to browse our site, you are agreeing to
              our use of cookies.
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <button
              onClick={acceptCookies}
              className="text-white text-[12px] font-[600] leading-[1.3] px-[36px] py-[8px] bg-dim-black hover:bg-[#386EC1] transition-all duration-150 rounded-[50px]"
            >
              Agree
            </button>
            <button
              onClick={rejectCookies}
              className="text-dim-black text-[12px] font-[600] leading-[1.3] px-[10px] py-[8px] bg-[#F1F1F1] hover:bg-[#9c9c9c] transition-all duration-150 rounded-[50px]"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieBar;
