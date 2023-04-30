import React from 'react'

export default function MyCartPanel({myCollection, myCollectionBrand, myCollectionPrice, myCollectionTitle}) {
  return (
    <div className="myCartPanel" 
    style={{
      backgroundColor: "rgb(28,28,28)", 
      width: "400px", 
      height: "100%",
      position: "fixed",
      marginLeft: "-155px",
      top: "80px",
      transition: "1s"
      }}>
        <p>{myCollectionTitle}</p>
    </div>
  )
}
