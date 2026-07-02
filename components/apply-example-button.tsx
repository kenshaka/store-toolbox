"use client";

type ApplyExampleButtonProps = {
  onApply: () => void;
  description?: string;
};

export function ApplyExampleButton({
  onApply,
  description = "不知道該填什麼數字時，可以先套用一組常見範例，立即查看試算結果。",
}: ApplyExampleButtonProps) {
  return (
    <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-stone-700">{description}</p>
        <button
          type="button"
          onClick={onApply}
          className="shrink-0 rounded-full bg-orange-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-800"
        >
          套用範例數字
        </button>
      </div>
    </div>
  );
}
