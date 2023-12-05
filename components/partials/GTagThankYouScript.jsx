import { useEffect } from "react";

const GTagThankYouScript = () => {
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

    // Event snippet for the specific page conversion
    gtag("event", "conversion", { send_to: "AW-963121834/U85_CK7zv-IYEKqloMsD" });

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // You can return null as this component doesn't render anything
};

export default GTagThankYouScript;
