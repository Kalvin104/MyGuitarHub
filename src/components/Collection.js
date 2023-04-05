import React from 'react'
import Menu_data from './Menu_data'


export default function Collection({myCollection, filtered, myCollectionTitle}) {

  
const [filter, setFilter] = React.useState([])


  //const filtered = allMyItems.filter((item) => item.id contain)
  function showCollection(){
    for (let i = 0; i < myCollection.length; i++){
    console.log("loop", myCollection[i])
    const x = Menu_data.filter((item) => item.id === myCollection[i])
    console.log("x = ", x)
  }
}
  

  const allMyItems = Menu_data.map((item) => item.id + " " + item.brand + " " + item.title);
 

  
  // console.log("myCollection", myCollection)
  // console.log(filtered)

  const filterItems = (category) => {
    const newItems = Menu_data.filter((item)=> item.category === category)

    }



  

  //const newItems = Menu_data.filter((item)=> item.category === category
  //const myItems = Menu_data.filter((item) => item.id === myCollection)

  return (
    <div>
        <h2>My Collection</h2>
        <div className="myCollection-container">
          <button onClick={showCollection}>Show my collection</button>
          <div className="myCollection-collection">
            <h3 className="myCollection-guitars">{myCollectionTitle}</h3>
          </div>
        </div>
        
    </div>
  )
}
