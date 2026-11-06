import type { Account } from '../types.ts'
import AccountCard from './AccountCard.tsx'

export function AccountList({ accounts }: { accounts: Account[] }) {
  if (accounts.length === 0) {
    return <p>No accounts available.</p>;
  }

  return (
    <div>
      {accounts.map(account => (
        <AccountCard
          key={account.id}
          name={account.name}
          type={account.type}
          balance={account.balance}
          nickname={account.nickname}
        />
      ))}
    </div>
  );
}