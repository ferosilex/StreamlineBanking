import Card from "./Card";

type AccountCardProps = {
  name: string;
  balance: number; // in yen
  nickname?: string;
};

export default function AccountCard({ name, balance, nickname }: AccountCardProps) {

    return (
        <Card>
            <h2>{name}</h2>
            <p>Balance: ¥{balance.toLocaleString("ja-JP")}</p>
            {nickname && <p>Nickname: {nickname}</p>}
        </Card>
    );
}