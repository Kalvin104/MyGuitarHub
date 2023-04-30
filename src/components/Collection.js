import React from 'react'
import Menu_data from './Menu_data'


export default function Collection({myCollection, filtered, myCollectionTitle, clearCollection}) {

const [showMyCollection, setMyShowCollection] = React.useState(true)


  //const filtered = allMyItems.filter((item) => item.id contain)
  function showCollection(){
    setMyShowCollection(prevClick => !prevClick)
    for (let i = 0; i < myCollection.length; i++){
    console.log("loop", myCollection[i])
    const x = Menu_data.filter((item) => item.id === myCollection[i])
    console.log("x = ", x)
  }
}


    myCollectionTitle = JSON.parse(localStorage.getItem('guitars'))


const rows = []

  for (let i = 0; i < myCollection.length; i++){
  rows.push(<p>{myCollectionTitle[i]}</p>)
    
  }



  return (
    <div>
        <h2 style={{marginLeft: "-70%"}}>My Collection</h2>
        <div className="myCollection-container">
          <button onClick={showCollection}>{showMyCollection ? "Hide" : "Show"}</button>
          <div className="myCollection-collection">
            <h3 className="myCollection-guitars">
              {showMyCollection && rows}</h3>
          </div>
        </div>
        
    </div>
  )
}
