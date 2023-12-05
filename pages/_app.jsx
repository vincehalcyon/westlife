// import "tw-elements/dist/css/tw-elements.min.css";
import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalState from "@/lib/store/globalState";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { useEffect } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleInteraction = () => {
      globalState.setState({
        showLazy: true,
      });
    };
    document.addEventListener("scroll", handleInteraction, { passive: true });
    document.addEventListener("mousemove", handleInteraction, {
      passive: true,
    });
    document.addEventListener("touchstart", handleInteraction, {
      passive: true,
    });
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     globalState.setState({
  //       showLazy: true,
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  // }, []);
  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {},
  //     Tawk_LoadStart = new Date();
  //   var s1 = document.createElement("script"),
  //     s0 = document.getElementsByTagName("script")[0];
  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/646426f774285f0ec46be144/1h0jjge3s";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");
  //   s0.parentNode.insertBefore(s1, s0);
  // }, []);
  useEffect(() => {
    if (pageProps?.statusCode === 404) {
      router.push("/404");
    }
  }, [pageProps?.statusCode, router]);
  return (
    <GlobalContext.Provider value={{ ...globalData }}>
      <DefaultLayout>
        <div className="text-[#55616d]">
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </GlobalContext.Provider>
  );
}