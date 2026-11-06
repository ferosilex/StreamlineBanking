export default function AccountCard() {
const accountName = "Everyday Account";
const accountBalance = "¥125,000";

    return (
       <div>
         <h2>{accountName}</h2>
         <p>{accountBalance}</p>
       </div>
     );
}