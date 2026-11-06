import './App.css'
import { AccountList } from './components/AccountList.tsx'
import type { Account } from './types.ts'


const accounts: Account[] = [
  {
    id: 1,
    name: "Everyday Account",
    type: "checking",
    balance: 125000,
    nickname: "Everyday"
  },
  {
    id: 2,
    name: "Savings Account",
    type: "savings",
    balance: 50000
  },
  {
    id: 3,
    name: "Business Account",
    type: "checking",
    balance: 250000
  },
  {
    id: 4,
    name: "Investment Account",
    type: "savings",
    balance: 100000
  },
  {
    id: 5,
    name: "Retirement Account",
    type: "savings",
    balance: 200000
  }
];

function App() {

  return (
    <>
      <div>
        <h1>Accounts</h1>
        <AccountList accounts={accounts} />
      </div>
      <div>
        <h2>Savings Accounts</h2>
        <AccountList accounts={accounts.filter(account => account.type === "savings")} />
      </div>
    </>
  )
}

export default App
