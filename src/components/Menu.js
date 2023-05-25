import React from 'react'
import ReviewAdd from './ReviewAdd'
import ReviewList from './ReviewList'

export default function Menu({items, selectItems, selectedItem, addToCollection, myCollection, handleCheckGuitar, handleSubmitReview, guitarReviews, setNewGuitarReview, newGuitarReview}) {

  const [expand, setExpand] = React.useState(false)
  const [showReviewInput, setShowReviewInput] = React.useState(false)
  const [collection, setCollection] = React.useState([])
  const [toggleCollectionButton, setToggleCollectionButton] = React.useState(false)

  const expandSection = {
    display: expand ? "" : "flex",
    height: expand ? "1000px" : "",
    overflowX: expand ? "hidden" : "auto"
  }

  const expandStyle = {
  backgroundColor: expand ? "transparent" : "White",
  height: expand ? "485px" : "485px",
  width: expand ? "100%" : "230px",
  margin: expand ? "auto" : ""


  }

  function expandBox(id){
    setExpand(prevExpand => !prevExpand)
    selectItems(id, expand)
  }

  let itemsArray = localStorage.getItem('guitars') ?
  JSON.parse(localStorage.getItem('guitars')) : [];

  function addToCollectionButton(id, title){
    if (myCollection.includes(id)){
      setToggleCollectionButton(prevToggle => !prevToggle)
    } else {
      itemsArray.push(title)
      localStorage.setItem('guitars', JSON.stringify(itemsArray))
      setCollection(collection => [...collection, id])
      setToggleCollectionButton(prevToggle => !prevToggle)
      return addToCollection(id, title)
  }

}

 function toggleAddReview(){
  setShowReviewInput(prevToggle => !prevToggle)
 }
  return (
    
    <div className="section-container" style={expandSection}>
      {items.map((menuItem)=>{

        const {id, title, category, price, desc, img, brand} = menuItem
        {return <article 
        key={id} 
        className="menu-item" 
        style={expandStyle}
        >
          <h3 
          className="menu-category"
          onClick={() =>  expandBox(id)}
          style={expand ? {backgroundColor: "#46cc56"} : {backgroundColor: "#2868dd"}}
          >{category}</h3>
          {<p  
          className="menu-title"
          style={expand ? {fontSize: "40px", margin: "auto", padding: "auto"} : { margin: "0", height: "47px"}}
          
          > 
          {title}
          </p>}
          
          <h4 className="menu-price">£{price}</h4>
          {!expand && <img src={`./assets/${img}`} alt="" style={{ height: "330px", width: "210px", objectFit: "cover"}}></img>}
          {expand && 
          <div>
            <div className="expand-container" style={{display: "flex"}}>
            <img src={`./assets/${img}`} alt="" style={{ height: "500px", width: "270px", objectFit: "fill"}}></img>
              <div className="menu-desc">
               <p style={{padding: "0px", margin: "0px", backgroundColor: "white", height: "300px"}}>{desc}</p>

                <div className="shopping-container">
                  <button 
                    className="shopping-button" 
                    onClick={() => addToCollectionButton(id, title, brand, price)}
                    style={toggleCollectionButton ? {backgroundColor: "#bd4a24"} : {backgroundColor: "#8ec583"}}
                  >
                    {toggleCollectionButton ? "Remove from Collection" : "Add to Collection"}</button>
                  <button 
                    className='shopping-button' 
                    onClick={() => toggleAddReview()}
                    style={showReviewInput ? {backgroundColor: "#bd4a24"} : {backgroundColor: "#8ec583"}}
                    >
                    
                    {showReviewInput ? "Hide Review Input" : "Add a Review!"}</button>
                </div>
                  {showReviewInput &&
                  <ReviewAdd 
                  newGuitarReview={newGuitarReview}
                  setNewGuitarReview={setNewGuitarReview}
                  handleSubmitReview={handleSubmitReview}
                  selectedItem={selectedItem}
                  /> }
              </div>
              
          </div>
          
          
          
          
          <h3>Reviews:</h3>
          { guitarReviews.length ?  ( 
          
          <ReviewList
            guitarReviews={guitarReviews.filter((review) => review.selectedItem === selectedItem)}
            handleCheckGuitar={handleCheckGuitar}
            handleSubmitReview={handleSubmitReview}
            selectedItem={selectedItem}
          
          />
          ) : (
            <p>No Reviews - Add one!</p>
          )}
         </div>
         }
        </article>}

        
      })}
      </div>
  )
}
