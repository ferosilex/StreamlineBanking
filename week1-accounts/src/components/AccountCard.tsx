import Card from "./Card";

type AccountCardProps = {
  type: "checking" | "savings";
  name: string;
  balance: number; // in yen
  nickname?: string;
};

export default function AccountCard({ type, name, balance, nickname }: AccountCardProps) {

    return (
        <Card>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Balance: ¥{balance.toLocaleString("ja-JP")}</p>
            {nickname && <p>Nickname: {nickname}</p>}
        </Card>
    );
}