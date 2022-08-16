import React from 'react'
import { AiFillEdit , AiFillDelete } from 'react-icons/ai'

const ExpenseItem = ({expense,EditItems,DeleteItems}) => {
    const {id , charge , amount } = expense ;
  
    return (
      
        <li className='item'>
            <div className='info'>
               <span className='expense'>{charge} </span>
               <span className='amount'> {amount} </span>
            </div>

            <div>
                <button onClick={()=> EditItems(id)} className='edit-btn' aria-label='edit button'><AiFillEdit /></button>
                <button onClick={()=> DeleteItems(id)} className='clear-btn' aria-label='delete button'><AiFillDelete /></button>
            </div>
        </li>
  )
}

export default ExpenseItem