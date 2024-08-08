import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] =useState([])
  const [searchInput, setSearchInput] =useState("")

 // const [filteredItem, setfilteredItem,] =useState([])

  //Fetching Transaction

  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then((response) =>response.json())
    .then(data=>setTransactions(data))
  },[])  // Empty dependency array means this effect runs once after the initial render




function handleSubmission(newTransaction) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application-json",
      },
      body: JSON.stringify(newTransaction)
  })
  .then((response) => {
   return response.json() 
  })
  .then(addTransaction =>{
    setTransactions (prevtransactions => [...prevtransactions, addTransaction]);
  })
  .catch((error) => {
        console.log(error)
         });

}
// f
function userSearch(event) {
  setSearchInput(event.target.value)
}
// Filter List Data
const searchedResult = transactions.filter((transaction) => {
  if(transaction.description.toLowerCase().includes(searchInput.toLowerCase()) )return transactions
  else if(searchInput==='')return true
})
    
  return (
    <div>
      <Search onChange={userSearch} />
      <AddTransactionForm onFormSubmission= {handleSubmission}/>
      <TransactionsList transactions = {searchedResult}  />
    </div>
  );
} 

export default AccountContainer;
