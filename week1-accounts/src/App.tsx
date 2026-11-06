import './App.css'
import AccountCard from './components/AccountCard.tsx'

function App() {

  return (
    <div>
      <h1>Accounts</h1>
      <AccountCard name="Everyday Account" balance={125000} nickname="Everyday" />
      <AccountCard name="Savings Account" balance={50000} />
      <AccountCard name="Business Account" balance={250000} />
    </div>
  )
}

export default App
