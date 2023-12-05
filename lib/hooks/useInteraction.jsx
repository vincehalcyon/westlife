import { useRouter } from "next/router";
import { useEffect } from "react";

const useInteraction = ({ onInteraction }) => {
  const { asPath } = useRouter();
  useEffect(() => {
    const addListeners = () => {
      document.addEventListener("scroll", callback, { passive: true });
      document.addEventListener("mousemove", callback, { passive: true });
      document.addEventListener("touchstart", callback, { passive: true });
    };
    const removeListeners = () => {
      document.removeEventListener("scroll", callback, { passive: true });
      document.removeEventListener("mousemove", callback, {
        passive: true,
      });
      document.removeEventListener("touchstart", callback, {
        passive: true,
      });
    };
    const callback = () => {
      if (asPath) {
        onInteraction();
        removeListeners();
      }
    };

    if (asPath) {
      addListeners();
    }

    return () => {
      removeListeners();
    };
  }, [asPath, onInteraction]);
};

export default useInteraction;