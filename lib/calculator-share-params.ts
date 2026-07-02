export type CalculatorShareParam = {
  key: string;
  value: number;
};

export function getSharedNumberParam(
  searchParams: URLSearchParams,
  key: string,
): number | null {
  const rawValue = searchParams.get(key);

  if (rawValue === null || rawValue.trim() === "") {
    return null;
  }

  const value = Number(rawValue);

  if (!Number.isFinite(value) || value < 0) {
    return null;
  }

  return value;
}

export function formatShareParamValue(value: number) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return String(Number(value.toFixed(4)));
}
