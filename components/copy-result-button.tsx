"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

type CopyResultButtonProps = {
  text: string;
  toolId: string;
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

export function CopyResultButton({
  text,
  toolId,
  className = "mt-5 w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-stone-900 transition hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-70",
}: CopyResultButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      await copyTextToClipboard(text);
      setStatus("copied");
      trackEvent("copy_calculator_result", {
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
        ? "已複製試算結果"
        : status === "failed"
          ? "複製失敗，請再試一次"
          : "複製試算結果"}
    </button>
  );
}
