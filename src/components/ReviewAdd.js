import React from 'react'

const ReviewAdd = ({newGuitarReview, selectedItem, setNewGuitarReview, handleSubmitReview, selectItems}) => {



  return (
    <form className='addForm' onSubmit={handleSubmitReview}>
        <label htmlFor='addItem'></label>
        <input
        autoFocus
        id='addItem'
        type='text'
        placeholder="What'd ya think?"
        required
        value={newGuitarReview}
        onChange={(e) => setNewGuitarReview(e.target.value)}
        ></input>
        <button
            type='submit'
            style={{height: "23px", width: "70px"}}
            aria-label='Add Item'
        >+</button>
    </form>
  )
}

export default ReviewAdd