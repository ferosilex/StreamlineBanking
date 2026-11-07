import './App.css'
import AccountList from './components/AccountList.tsx'
import type { Account } from './types.ts'


const accounts: Account[] = [
  {
    id: 1,
    name: "Everyday Account",
    type: "checking",
    balance: -12500056,
    currency: 'USD',
    nickname: "Everyday"
  },
  {
    id: 3,
    name: "Business Account",
    type: "checking",
    currency:'JPY',
    balance: 25000056
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
