import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({guitarReviews, handleCheckGuitar, handleSubmitReview, selectedItem}) => {

  return (
     <div>
      <div style={{
        position: "relative", 
        height: "100px",
        marginTop: "5px",
        marginLeft: "-500px"
        }}>
        <ul>
          {guitarReviews && guitarReviews.map((review) => (
              <ReviewItem
              selectedItem={selectedItem}
              key={review.id}
              review={review} 
              handleCheckGuitar={handleCheckGuitar}
              handleSubmitReview={handleSubmitReview}
              />
          ))}
        </ul>
      </div>

     </div>
  )
}

export default ReviewList
