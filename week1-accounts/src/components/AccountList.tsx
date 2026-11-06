import type { Account } from '../types.ts'
import AccountCard from './AccountCard.tsx'

export function AccountList({ accounts }: { accounts: Account[] }) {
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