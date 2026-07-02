"use client";

import { useState } from "react";
import {
  type CalculatorShareParam,
  formatShareParamValue,
} from "@/lib/calculator-share-params";
import { trackEvent } from "@/lib/gtag";

type CopyCalculatorLinkButtonProps = {
  toolId: string;
  params: CalculatorShareParam[];
  className?: string;
};

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const copied = document.execCommand("copy");
    if (!copied) {
      throw new Error("Copy command failed");
    }
  } finally {
    document.body.removeChild(textarea);
  }
}

function buildCalculatorShareUrl(params: CalculatorShareParam[]) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";

  params.forEach(({ key, value }) => {
    url.searchParams.set(key, formatShareParamValue(value));
  });

  return url.toString();
}

export function CopyCalculatorLinkButton({
  toolId,
  params,
  className = "w-full rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-orange-200 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70",
}: CopyCalculatorLinkButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      await copyTextToClipboard(buildCalculatorShareUrl(params));
      setStatus("copied");
      trackEvent("copy_calculator_link", {
        tool_id: toolId,
      });
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("failed");
      window.setTimeout(() => setStatus("idle"), 2200);
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {status === "copied"
        ? "已複製分享連結"
        : status === "failed"
          ? "複製失敗，請再試一次"
          : "複製分享連結"}
    </button>
  );
}
