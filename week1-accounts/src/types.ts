export type Account = {
    id: number;
    name: string;
    type: "checking" | "savings";
    balance: number;
    nickname?: string;
};