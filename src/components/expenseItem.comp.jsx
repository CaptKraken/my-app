import React from 'react'
import './ExpenseItem.scss'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div>
                <h2>title</h2>
                <div>amount</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
