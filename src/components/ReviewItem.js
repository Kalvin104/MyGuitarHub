import React from 'react'

const ReviewItem = ({review, handleCheckGuitar, selectedItem}) => {

  return (
    <li className="item" key={review.id} style={{listStyle: "none"}}>
      <label
        onDoubleClick={() => handleCheckGuitar(review.id)}
      ></label>
      
      {review.review}
      
    </li>
  )
}

export default ReviewItem