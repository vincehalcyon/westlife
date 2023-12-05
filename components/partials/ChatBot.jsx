import useInteraction from "@/lib/hooks/useInteraction";
import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";

const ChatBot = () => {
  const [shouldLoadScript, setShouldLoadScript] = useState(false);

  const loadScript = () => {
    setShouldLoadScript(true);
  };

  useInteraction({ onInteraction: loadScript });

  return (
    <>
      {/* SCRIPT */}
      {shouldLoadScript && (
        <>
          <Script
            src="https://embed.tawk.to/646426f774285f0ec46be144/1h0jjge3s"
            async
          />
        </>
      )}
    </>
  );
};

export default ChatBot;
