/* eslint-disable no-lone-blocks */
import React from 'react'
import Review from './Review'
import ReviewList from './ReviewList'

export default function Menu({items, selectItems, addToCollection, myCollection}) {

  const [expand, setExpand] = React.useState(false)
  const [collection, setCollection] = React.useState([])

  const expandStyle = {
  backgroundColor: expand ? "#e2e0e0" : "White",
  height: expand ? "597px" : "140px",
  width: expand ? "100%" : "150px",
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
      console.log("Already in collection")
    } else {
      itemsArray.push(title)
      localStorage.setItem('guitars', JSON.stringify(itemsArray))
      setCollection(collection => [...collection, id])
      return addToCollection(id, title)
  }

}

//MENU LAYOUT
  return (
    
    <div className="section-container">
      {items.map((menuItem)=>{

        const {id, title, category, price, desc, img, brand} = menuItem
        {return <article 
        key={id} 
        className="menu-item" 
        style={expandStyle}
        >
          <h3 
          className="menu-category"
          onClick={() => expandBox(id)}
          style={expand ? {backgroundColor: "#46cc56"} : {backgroundColor: "#2868dd"}}
          >{category}</h3>
          {<p  
          className="menu-title"
          style={expand ? {fontSize: "40px", margin: "auto", padding: "auto"} : { margin: "0", height: "47px"}}
          
          > 
          {title}
          </p>}
          
          <h4 className="menu-price">£{price}</h4>
          {expand && 
          <div>
            <div className="expand-container" style={{display: "flex"}}>
              <div className="menu-desc">
               <p>{desc}</p>
              
               </div>
           <img src={`./assets/${img}`} alt="" style={{height: "250px", width: "140px"}}></img>
          </div>
          <div className="shopping-container">
            <button className="shopping-button">Add to Cart</button>
            <button className="shopping-button" onClick={() => addToCollectionButton(id, title, brand, price)}>Add to Collection</button>
            <button className="shopping-button">Add Review</button>
          </div>
          <Review />
         </div>
         }
        </article>}

        
      })}
      </div>
  )
}
