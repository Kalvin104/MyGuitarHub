import React from 'react'
import MyCart from './MyCart'

export default function Header({myCollection, myCollectionBrand, myCollectionTitle, myCollectionPrice}) {
  return (
    <div style={{paddingRight: "100px", paddingLeft: "50px", display: "flex", backgroundColor: "#1c1c1c", color: "white"}}>
        <h1>Guitar Collection and Shop</h1>
        <MyCart 
        myCollection={myCollection}
        myCollectionBrand={myCollectionBrand}
        myCollectionPrice={myCollectionPrice}
        myCollectionTitle={myCollectionTitle}
        />
    </div>
  )
}
