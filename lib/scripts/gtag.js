// googleTagManager.js

export const gtagManagerScript = `
  // Google tag (gtag.js)
  const gtagScript = document.createElement("script");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-963121834";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "AW-963121834");
`;

export const gtagManagerConversion = `
  // Event snippet for Call Converesions conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    
    gtag('event', 'conversion', { 'send_to': 'AW-963121834/iGSvCNCZo5YYEKqloMsD', 'event_callback': callback });
    return false;
  }
`;
