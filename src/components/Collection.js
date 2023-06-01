import React from 'react'
import Menu_data from './Menu_data'

export default function Collection({ myCollection, filtered, myCollectionTitle, clearCollection, menuItems}) {

const [showMyCollection, setMyShowCollection] = React.useState(true)


  function showCollection(){
    setMyShowCollection(prevClick => !prevClick)
  }

  myCollectionTitle = JSON.parse(localStorage.getItem('guitars'))
  
  let theCollection = menuItems.filter((item) => myCollection.includes(item.id))

  return (
    <div>
        <h2 style={{marginLeft: "auto"}}>My Collection</h2>
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