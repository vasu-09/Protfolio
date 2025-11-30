// AdsterraAd.js
import React, { useEffect, useRef } from "react";

const AdsterraAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://www.effectivegatecpm.com/ixvhvqk4fv?key=fb6f3da617c5c62200d7528d3b32050e";

    if (adRef.current) {
      adRef.current.innerHTML = "";
      adRef.current.appendChild(script);
    }
  }, []);

  return <div ref={adRef} />;
};

export default AdsterraAd;
