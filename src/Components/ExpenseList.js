import React from 'react'
import ExpenseItem from './ExpenseItem';
import {AiFillDelete} from 'react-icons/ai'

const ExpenseList = ({expenses,DeleteItems,EditItems,clearItems}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return  <ExpenseItem key={Math.random()} expense={expense} DeleteItems={DeleteItems} EditItems={EditItems}/>
        })}
            </ul>
            {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          <AiFillDelete className="btn-icon" />
        </button>
      )}
    </>
  )
}

export default ExpenseList ;