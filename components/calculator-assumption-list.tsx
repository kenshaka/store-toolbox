type CalculatorAssumptionItem = {
  label: string;
  value: string;
};

type CalculatorAssumptionListProps = {
  items: CalculatorAssumptionItem[];
};

export function CalculatorAssumptionList({ items }: CalculatorAssumptionListProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-sm font-semibold text-stone-200">目前試算假設</p>
      <dl className="mt-3 grid gap-2 text-sm text-stone-300">
        {items.map((item) => (
          <div key={item.label} className="flex items-start justify-between gap-3">
            <dt>{item.label}</dt>
            <dd className="text-right font-semibold text-white">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
