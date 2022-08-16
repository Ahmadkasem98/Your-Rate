import React,{ useEffect, useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';




// const initialState = [
//   {id:Math.random() , charge:'rent',amount:1600},
//   {id:Math.random() , charge:'car payment',amount:400},
//   {id:Math.random() , charge:'Credit card bill',amount:1200}
// ];

const initialState = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [] ;

function App() {
// ***************** Values ***************************
// ******** All Expenses , Add Expenses ***************

  const [expenses, setExpenses] = useState(initialState);

  // ****** Single Expense
  const [ charge , setCharge ] = useState('');
  // ****** Single Expense
  const [ amount , setAmount ] = useState('');
 
// Alert 
  const [ alert , setAlert ] = useState({show:false})

  // Edit Item 
  const [edit , setEdit ] = useState(false)

  const [id , setId] = useState(0);

  // ************ UseEffect **************************
 useEffect(() => {
  console.log("useEffect");
  localStorage.setItem("expenses" ,JSON.stringify(expenses));
 } , [expenses] );


// ************ Functionality **************************

// handleCharge
const handleCharge = (e) => {
  setCharge(e.target.value)
}

// handleAmount
const handleAmount = (e) => {
  setAmount(e.target.value)
}

// handle Alert 
const handleAlert = ({type,text}) => {
  setAlert({show:true , type , text })
  setTimeout(()=> {
    setAlert({show:false})
  },3000)
};

// handleSubmit
const handleSubmit = (e) => {
  e.preventDefault()
  if(charge !== "" && amount > 0 ){
    if (edit) {
      let TemExpenses = expenses.map(item => {
        return item.id === id ? {...item,charge,amount } : item
      });
      setExpenses(TemExpenses);
      handleAlert({type:'success' , text:'Item edited'})
      setEdit(false);
    }else{
      const singleExpense = {id:Math.random(),charge,amount}
      setExpenses([...expenses,singleExpense]) 
      handleAlert({type:'success' , text:'Item added'})

    }

    setCharge("")
    setAmount("")
  }
  else {
   handleAlert({type:'danger' , text:"Charge can't be empty value and amount value has to be bigger than zero "})
  }
}

// ******* Clear Items 
const clearItems = () => {
  setExpenses([])
}
// ******* handle Delete 
const DeleteItems = id => {
  let tempExpenses = expenses.filter(item => 
  item.id !== id);
  setExpenses(tempExpenses)
  handleAlert({type:'danger',text:'Item Deleted'})
}
// ******* handle Edit 
const EditItems = id => {
  let expense = expenses.find(item => item.id === id )
  let {amount,charge} = expense
  setAmount(amount)
  setCharge(charge)
  setEdit(true)
  setId(id)
}

let Rate = expenses.reduce((acc,curr) => {
  return (acc += parseInt(curr.amount))  
      },0) / expenses.length

  return (
<>    
    {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert />
    <h1>Mark Record</h1>
    <main className="App">
    <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit} />
    <ExpenseList expenses={expenses} clearItems={clearItems} DeleteItems={DeleteItems} EditItems={EditItems} />
    </main>
    <h1>
    </h1>
    <h1> Total Marks : {" "}
    <span className='total'>
       {" "} {expenses.reduce((acc,curr) => {
      return (acc += parseInt(curr.amount) );
      }, 0)}
    </span>
    </h1>
    <h1>
        Your Rate : {" "}  
      <span className='total'>
      {Rate > 0 ? Rate : '0'}
      </span>
      </h1>

    </>
  );
}

export default App;
