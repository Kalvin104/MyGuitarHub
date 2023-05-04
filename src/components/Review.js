import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function Review() {

    const [reviews, setReviews] = React.useState([])
    const [form, setForm] = React.useState({review: "", id: null})

  return (
    <div>
        <ReviewForm 
        form={form}
        reviews={reviews}
        setForm={setForm}
        setReviews={setReviews}
        />
        <ReviewList
        reviews={reviews}
        />
    </div>
  )
}
