import Link from "next/link";

export type ToolDecisionGuideRow = {
  label: string;
  value: string;
  note: string;
};

export type ToolDecisionGuideItem = {
  title: string;
  description: string;
};

export type ToolDecisionGuideNextStep = ToolDecisionGuideItem & {
  href?: string;
  linkLabel?: string;
};

export type ToolDecisionGuideProps = {
  scenarioTitle: string;
  scenarioDescription: string;
  scenarioQuestions: string[];
  exampleTitle: string;
  exampleDescription: string;
  exampleRows: ToolDecisionGuideRow[];
  exampleConclusion: string;
  interpretations: ToolDecisionGuideItem[];
  commonMistakes: string[];
  limitations: string[];
  nextSteps: ToolDecisionGuideNextStep[];
};

export default function ToolDecisionGuide({
  scenarioTitle,
  scenarioDescription,
  scenarioQuestions,
  exampleTitle,
  exampleDescription,
  exampleRows,
  exampleConclusion,
  interpretations,
  commonMistakes,
  limitations,
  nextSteps,
}: ToolDecisionGuideProps) {
  return (
    <section className="mt-10 space-y-8" aria-labelledby="decision-guide-title">
      <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-orange-700">實際使用情境</p>
        <h2 id="decision-guide-title" className="mt-2 text-2xl font-bold">
          {scenarioTitle}
        </h2>
        <p className="mt-4 leading-7 text-stone-700">{scenarioDescription}</p>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          {scenarioQuestions.map((question) => (
            <li
              key={question}
              className="rounded-2xl bg-stone-100 p-4 text-sm leading-6 text-stone-700"
            >
              {question}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-orange-700">示範情境</p>
        <h2 className="mt-2 text-2xl font-bold">{exampleTitle}</h2>
        <p className="mt-4 leading-7 text-stone-700">{exampleDescription}</p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200">
          <table className="min-w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-stone-100 text-stone-800">
              <tr>
                <th className="px-4 py-3 font-bold">項目</th>
                <th className="px-4 py-3 font-bold">示範數值</th>
                <th className="px-4 py-3 font-bold">判讀方式</th>
              </tr>
            </thead>
            <tbody>
              {exampleRows.map((row) => (
                <tr key={row.label} className="border-t border-stone-200">
                  <th className="px-4 py-3 font-semibold text-stone-900">
                    {row.label}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 text-stone-700">
                    {row.value}
                  </td>
                  <td className="min-w-64 px-4 py-3 leading-6 text-stone-600">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-2xl bg-orange-50 p-5 text-sm leading-7 text-orange-950">
          <strong>這組範例的重點：</strong> {exampleConclusion}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">結果怎麼解讀？</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {interpretations.map((item) => (
            <div key={item.title} className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">常見計算錯誤</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-stone-700">
            {commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">工具限制與使用範圍</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-stone-700">
            {limitations.map((limitation) => (
              <li key={limitation}>{limitation}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">試算後的下一步</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {nextSteps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                {step.description}
              </p>
              {step.href && step.linkLabel ? (
                <Link
                  href={step.href}
                  className="mt-4 inline-flex text-sm font-bold text-orange-300 transition hover:text-orange-200"
                >
                  {step.linkLabel} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
