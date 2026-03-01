"use client";

import Script from "next/script";

export const PlausibleContainer = () => {
  const handleLoad = () => {
    // prettier-ignore
    // @ts-expect-error
    window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
    // @ts-expect-error
    plausible.init();
  };

  return (
    <Script
      src="https://plsbl.simonknittel.de/js/pa-M2cIZdjvDyx7AgYWIpTEC.js"
      defer
      onLoad={handleLoad}
    />
  );
};
