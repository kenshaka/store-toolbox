"use client";

import { trackEvent } from "@/lib/gtag";

type CalculatorResetButtonProps = {
  toolId: string;
  onReset: () => void;
  className?: string;
};

function clearCalculatorSearchParams() {
  if (typeof window === "undefined" || !window.location.search) {
    return;
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.hash}`,
  );
}

export function CalculatorResetButton({
  toolId,
  onReset,
  className = "mt-5 w-full rounded-full border border-orange-100 bg-white/70 px-5 py-3 text-sm font-bold text-stone-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800",
}: CalculatorResetButtonProps) {
  function handleReset() {
    onReset();
    clearCalculatorSearchParams();
    trackEvent("reset_calculator", {
      tool_id: toolId,
    });
  }

  return (
    <button type="button" onClick={handleReset} className={className}>
      清除重填
    </button>
  );
}
