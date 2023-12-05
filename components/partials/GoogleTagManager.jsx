import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-963121834";
    script.async = true;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-963121834");

    // Add the gtag_report_conversion function
    window.gtag_report_conversion = function (url) {
      var callback = function () {
        if (typeof url !== "undefined") {
          window.location = url;
        }
      };

      gtag("event", "conversion", {
        send_to: "AW-963121834/iGSvCNCZo5YYEKqloMsD",
        event_callback: callback,
      });
      return false;
    };

    // Additional gtag function
    gtag("event", "conversion", { send_to: "AW-963121834/LLaoCNDIjosYEKqloMsD" });

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // You can return null as this component doesn't render anything
};

export default GoogleTagManager;
