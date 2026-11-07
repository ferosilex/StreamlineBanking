import type { Currency } from "../types";

const LOCALES = { JPY: "ja-JP", USD: "en-US" } as const;

export default function Money({ amount, currency }: { amount: number; currency: Currency }) {
  const formatter = new Intl.NumberFormat(LOCALES[currency], { style: "currency", currency });
  const decimals = formatter.resolvedOptions().maximumFractionDigits ?? 0;  // 0 for JPY, 2 for USD
  return <span>{formatter.format(amount / 10 ** decimals)}</span>;
}
