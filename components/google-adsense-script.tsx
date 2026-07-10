/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID?.trim();

export default function GoogleAdSenseScript() {
  if (!adsenseClientId) {
    return null;
  }

  return (
    <Script
      async
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
