export type ArticlePracticalGuideRow = {
  item: string;
  figure: string;
  decision: string;
};

export type ArticlePracticalGuideProps = {
  heading: string;
  introduction: string;
  caseTitle: string;
  caseDescription: string;
  caseRows: ArticlePracticalGuideRow[];
  caseConclusion: string;
  decisionChecklist: string[];
  commonMisjudgments: string[];
  dataToRecord: string[];
  methodology: string;
  reviewedDate: string;
};

export default function ArticlePracticalGuide({
  heading,
  introduction,
  caseTitle,
  caseDescription,
  caseRows,
  caseConclusion,
  decisionChecklist,
  commonMisjudgments,
  dataToRecord,
  methodology,
  reviewedDate,
}: ArticlePracticalGuideProps) {
  return (
    <section className="rounded-3xl border border-orange-200 bg-orange-50/60 p-5 sm:p-7">
      <p className="text-sm font-semibold text-orange-700">進一步實作</p>
      <h2 className="mt-2 text-2xl font-bold text-stone-900">{heading}</h2>
      <p className="mt-4 leading-8 text-stone-700">{introduction}</p>

      <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold text-stone-900">{caseTitle}</h3>
        <p className="mt-3 leading-7 text-stone-700">{caseDescription}</p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200">
          <table className="min-w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-stone-100">
              <tr>
                <th className="px-4 py-3 font-bold text-stone-900">觀察項目</th>
                <th className="px-4 py-3 font-bold text-stone-900">示範數字</th>
                <th className="px-4 py-3 font-bold text-stone-900">應如何判斷</th>
              </tr>
            </thead>
            <tbody>
              {caseRows.map((row) => (
                <tr key={row.item} className="border-t border-stone-200">
                  <th className="px-4 py-3 font-semibold text-stone-900">
                    {row.item}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 text-stone-700">
                    {row.figure}
                  </td>
                  <td className="min-w-64 px-4 py-3 leading-6 text-stone-600">
                    {row.decision}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 rounded-2xl bg-stone-100 p-4 text-sm leading-7 text-stone-700">
          <strong className="text-stone-900">案例判讀：</strong> {caseConclusion}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="font-bold text-stone-900">決策前檢查</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-700">
            {decisionChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="font-bold text-stone-900">容易誤判的地方</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-700">
            {commonMisjudgments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="font-bold text-stone-900">建議留下的紀錄</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-700">
            {dataToRecord.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-orange-200 pt-5 text-sm leading-7 text-stone-600">
        <p>
          <strong className="text-stone-800">內容整理方式：</strong> {methodology}
        </p>
        <p className="mt-2">
          <strong className="text-stone-800">最後檢視：</strong> {reviewedDate}
        </p>
      </div>
    </section>
  );
}
