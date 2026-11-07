import type { Currency } from "../types";
import Card from "./Card";
import Money from "./Money";

type AccountCardProps = {
  type: "checking" | "savings";
  name: string;
  balance: number; // in yen
  nickname?: string;
  currency: Currency;
};

export default function AccountCard({ type, name, balance, nickname, currency }: AccountCardProps) {

    return (
        <Card>
            <h2>{name}</h2>
            <p>Type: {type}</p>

            {balance < 0 ? (
                <p style={{ color: 'red' }}>Balance: <Money amount={balance} currency={currency} /></p>
            ) : (
                <p>Balance: <Money amount={balance} currency={currency} /></p>
            )}
            
            {nickname && <p>Nickname: {nickname}</p>}
        </Card>
    );
}