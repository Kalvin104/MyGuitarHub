import React from 'react'
import MyCartPanel from './MyCartPanel'

export default function MyCart({myCollection, myCollectionBrand, myCollectionTitle, myCollectionPrice}) {


  const [showCart, setShowCart] = React.useState(false)

  function setShowCartButton(){
    setShowCart(prev => !prev)
  }

  return (
    <div className="myCart-container" style={{
      position: "absolute",
      right: "50px",
      
    }}>
        <h3>My Cart</h3>
        <button onClick={setShowCartButton}>Show {myCollection.length} items in basket</button>
        {showCart && 
        <MyCartPanel 
        myCollection={myCollection}
        myCollectionBrand={myCollectionBrand}
        myCollectionPrice={myCollectionPrice}
        myCollectionTitle={myCollectionTitle}
        />}
    </div>
  )
}
