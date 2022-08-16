import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-center'>
            
            <div className='form-group'>
                <label htmlFor='charge'>Subject Name</label>
                <input type='text' className='form-control' name='charge' id='charge' placeholder='e.g Math' value={charge} onChange={handleCharge} />
            </div>
            
            <div className='form-group'>
              <label htmlFor='amount'>Marks</label>
              <input type='number' className='form-control' name='amount' id='amount' placeholder='e.g 70' value={amount} onChange={handleAmount} />
            </div>

        </div>
        <button type='submit' className='btn'>
            {edit ? 'Edit' : "Submit"}
            <AiOutlineSend className='btn-icon' />
        </button>
    </form>
  )
}

export default ExpenseForm ;