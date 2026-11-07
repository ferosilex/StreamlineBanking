export type Currency = "JPY" | "USD";

export type Account = {
    id: number;
    name: string;
    type: "checking" | "savings";
    balance: number;
    currency: Currency;
    nickname?: string;
};