import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function Review(handleCheckGuitar, handleSubmitReview, guitarReviews) {

  return (
    <div>
          <ReviewList 
            guitarReviews={guitarReviews}
            handleCheckGuitar={handleCheckGuitar}
            handleSubmitReview={handleSubmitReview}
          />
    </div>
  )
}
