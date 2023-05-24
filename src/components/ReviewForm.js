import React from 'react'

export const ReviewForm = ({key, form, reviews, setForm, setReviews}) => {


  const [currentReviews, setCurrentReviews] = React.useState(JSON.parse(localStorage.getItem('review')) || [])
  
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({ review: "", id: key });
        currentReviews.push(form)
        localStorage.setItem(`review`, JSON.stringify(currentReviews))
      };
    
  return (
    <form className="form" onSubmit={handleSubmit} >
        <h2>Leave a Review Below!</h2>
        <label htmlFor="review"></label>
        <textarea
          value={form.review}
          placeholder="What'd you think?"
          id="review"
          name="review"
          onChange={handleChange}
          style={{height: "65px", width: "780px"}}
          
        />
        <br></br>
        <button type="submit">Submit Review</button>
    </form>
  )
  }

export default ReviewForm
