"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSenseSlotProps = {
  slot?: string;
  label?: string;
  className?: string;
  minHeight?: number;
  format?: "auto" | "fluid";
  fullWidthResponsive?: boolean;
};

const clientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;
const showPlaceholders =
  process.env.NEXT_PUBLIC_ADSENSE_SHOW_PLACEHOLDERS === "true";

function hasUsableAdSenseConfig(slot?: string) {
  return Boolean(
    clientId?.startsWith("ca-pub-") && slot && slot.trim().length > 0,
  );
}

export function AdSenseSlot({
  slot,
  label = "廣告",
  className = "",
  minHeight = 120,
  format = "auto",
  fullWidthResponsive = true,
}: AdSenseSlotProps) {
  const pushedRef = useRef(false);
  const isConfigured = hasUsableAdSenseConfig(slot);

  useEffect(() => {
    if (!isConfigured || pushedRef.current) {
      return;
    }

    pushedRef.current = true;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      pushedRef.current = false;
    }
  }, [isConfigured]);

  if (!isConfigured) {
    if (!showPlaceholders) {
      return null;
    }

    return (
      <aside
        aria-label="廣告版位預留"
        className={`rounded-3xl border border-dashed border-orange-200 bg-white/70 p-5 text-center text-sm text-stone-500 ${className}`}
        style={{ minHeight }}
      >
        <p className="font-semibold text-stone-600">廣告版位預留</p>
        <p className="mt-2 text-xs leading-5 text-stone-500">
          設定 AdSense 廣告單元 slot ID 後，這裡會顯示廣告。
        </p>
      </aside>
    );
  }

  return (
    <aside
      aria-label={label}
      className={`rounded-3xl border border-orange-100/80 bg-white/90 p-4 shadow-sm shadow-orange-950/5 ${className}`}
    >
      <p className="mb-3 text-center text-xs font-semibold tracking-wide text-stone-400">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </aside>
  );
}
