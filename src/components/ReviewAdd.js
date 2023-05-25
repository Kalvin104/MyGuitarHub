import React from 'react'

const ReviewAdd = ({newGuitarReview, selectedItem, setNewGuitarReview, handleSubmitReview, selectItems}) => {



  return (
    <form className='addForm' onSubmit={handleSubmitReview}>
        <label htmlFor='addItem'></label>
        <input
        style={{marginTop: "10px", height: "50px", width: "400px", fontSize: "17px", marginLeft: "-75px"}}
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
            style={{height: "50px", width: "40px"}}
            aria-label='Add Item'
        >+</button>
    </form>
  )
}

export default ReviewAdd