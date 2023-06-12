import React from 'react'

export default function Collection({ myCollection, myCollectionTitle, allItems, coll }) {

  myCollectionTitle = JSON.parse(localStorage.getItem('guitars'))
  


  let theCollection = allItems.filter((item) => coll.includes(item.id))

  return (
    <div>
      <br></br>
        <div className="myCollection-container">
          <div className="myCollection-collection">
            {theCollection.map((menuItem)=> {
              const {id, title, category, img, brand, year} = menuItem
              {return (
              <div className='collectionItem' key={id}>
                <div className="collectionDetails">
                  <h3>{brand}</h3>
                  <p>{category}</p>
                  <p>{year}</p>
                  <p>{title}</p>
                </div>
                <div className="collectionImageDiv">
                  <img id="collectionImage" src={`./assets/${img}`}></img>
                </div>
              </div> )}
            })}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}