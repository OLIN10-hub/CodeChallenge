import React, {useState} from "react";

function AddTransactionForm({onFormSubmission}) {
  const [formData, setFormData] = useState ({
     date:'',
     description:"",
     category: '',
     amount:0
  })  

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    onFormSubmission(formData)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onChange={handleChange} onSubmit={handleSubmit} >
        <div className="inline fields">
          <input type="date" name="date"  />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category"  />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
