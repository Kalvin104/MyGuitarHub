import React from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewList({reviews}) {
  return (
    <div style={{position: "relative"}}>
        <h3>Review List:</h3>
        {reviews.map((review) => (
             <ReviewItem review={review} />
        ))}


    </div>
  )
}
