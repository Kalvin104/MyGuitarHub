import React from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({newListItem, setNewListItem, handleSubmitListItem}) => {



  return (
    <form className='addForm' onSubmit={handleSubmitListItem}> 
        <label htmlFor='addItem'></label>
        <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newListItem}
            onChange={(e) => setNewListItem(e.target.value)}
            >

            </input>
        <button
            type='submit'
            style={{height: "23px", width: "70px"}}
            aria-label='Add Item'
            >
            
            <FaPlus /></button>
       
    </form>
  )
}

export default AddItem