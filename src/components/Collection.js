import React from 'react'

export default function Collection({ myCollection, myCollectionTitle, menuItems}) {

const [showMyCollection, setMyShowCollection] = React.useState(true)


  function showCollection(){
    setMyShowCollection(prevClick => !prevClick)
  }

  myCollectionTitle = JSON.parse(localStorage.getItem('guitars'))
  
  let theCollection = menuItems.filter((item) => myCollection.includes(item.id))

  return (
    <div>
      <br></br>
        <div className="myCollection-container">
          <button onClick={showCollection}>{showMyCollection ? "Hide" : "Show"}</button>
          {showMyCollection && <div className="myCollection-collection">
            {theCollection.map((menuItem)=> {
              const {id, title, category, img, brand, year} = menuItem
              {return (
              <div key={id}>
                {brand} - {category} ({year}) {title}
                <img src={`./assets/${img}`}></img>
              </div> )}
            })}
          </div>}
        </div>
    </div>
  )
}