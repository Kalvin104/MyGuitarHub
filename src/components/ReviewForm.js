import React, { useState } from 'react'

export const ReviewForm = ({form, reviews, setForm, setReviews}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
  
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({ review: "", id: null });
      };
    

  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Leave a Review Below!</h2>
        <label htmlFor="review"></label>
        <textarea
          value={form.review}
          placeholder="What'd you think?"
          id="review"
          name="review"
          onChange={handleChange}
        />
        <button type="submit">Submit Review</button>
    </form>
  )
  }

export default ReviewForm
