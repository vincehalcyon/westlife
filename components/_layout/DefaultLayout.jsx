import Menu from "@/layout/partials/Menu";
import dynamic from "next/dynamic";
import globalState from "@/lib/store/globalState";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { getCookie } from "@/lib/services/cookieUtil";
import { useRouter } from "next/router";

export default function DefaultLayout(props) {
  const { googleTag } = useContext(GlobalContext);
  const showLazy = globalState((state) => state.showLazy);
  const [showCookie, setShowCookie] = useState(false);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);
  const { asPath } = useRouter();

  const CookieBar = () => {
    const Component = dynamic(() => import("../partials/CookieBar"));
    return <Component setHasAcceptedCookies={setHasAcceptedCookies} />;
  };
  const Footer = () => {
    const Component = dynamic(() => import("@/layout/partials/Footer"));
    return <Component />;
  };

  useEffect(() => {
    const hasAccepted = getCookie("cookiesAccepted");
    if (hasAccepted) {
      setHasAcceptedCookies(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowCookie(true);
    }, 2500);
  }, []);

  useEffect(() => {
    // Add Google Analytics script only when cookies are accepted and showLazy is true
    if (hasAcceptedCookies && showLazy) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTag?.data?.content?.google_code}`;
      script.async = true;

      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", googleTag?.data?.content?.google_code);
      // gtag("config", "G-XNL5RC4VDM");

      return () => {
        // Cleanup script when unmounting component
        document.head.removeChild(script);
      };
    }
  }, [
    hasAcceptedCookies,
    showLazy,
    asPath,
    googleTag?.data?.content?.google_code,
  ]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {asPath === "/" ? (
          <h1 className="hidden sr-only">
            Website, Mobile App, Software Development. Philippines
          </h1>
        ) : (
          <></>
        )}
        <Menu />
        {props.children}
        {showLazy && showCookie && <CookieBar />}
        {showLazy && <Footer />}
        {/* {showLazy && <ChatBot />} */}
        {showLazy && hasAcceptedCookies && <GoogleTagManager />}
      </div>
    </>
  );
}
const ChatBot = dynamic(() => import("../partials/ChatBot"), {
  ssr: false,
});
const GoogleTagManager = dynamic(() => import("../partials/GoogleTagManager"), {
  ssr: false,
});
