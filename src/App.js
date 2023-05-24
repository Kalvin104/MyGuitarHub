

import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Collection from './components/Collection';
//MENU APP
import Menu from './components/Menu';
import Menu_data from './components/Menu_data';
import Categories from './components/Categories';
//CART APP
import Cart from './components/Cart';


//import SearchItem from './components/SearchItem';

function App() {

const [selectedItem, setSelectedItem] = React.useState(null)
//MENU APP
const allCategories = ["all", ...new Set(Menu_data.map((item) => item.category))]
const [menuItems, setMenuItems] = React.useState(Menu_data)
const [categories, setCategories] = React.useState(allCategories)
const allFiltered = [...new Set(Menu_data.map((item) => item.id))]
const [filtered, setFiltered] = React.useState(allFiltered)

//CATEGORY APP
const filterItems = (category) => {
  if (selectedItem === null) {
    if (category !== "all") 
      {const newItems = Menu_data.filter((item)=> item.category === category)
      setMenuItems(newItems)} else {
        category = "all"
      setMenuItems(Menu_data)
    }
  }
}
const [myCollection, setMyCollection] = React.useState(() => {
  //Getting stored collection from localStorage
  const saved = localStorage.getItem("guitars")
  const initialValue = JSON.parse(saved)
  return initialValue || []
})

const [myCollectionTitle, setMyCollectionTitle] = React.useState([])
const [myCollectionBrand, setMyCollectionBrand] = React.useState([])
const [myCollectionPrice, setMyCollectionPrice] = React.useState([])

const selectItems = (id, expand) => {
  if (expand === true) {
    const newItems = Menu_data
    setMenuItems(newItems)
    setSelectedItem(null)
  } else {
    
    const newItems = Menu_data.filter((item) => item.id === id)
    setMenuItems(newItems)
    setSelectedItem(id)
  }
}

const addToCollection = (id, title, brand, price) => {
  setMyCollection(oldCollection => [...oldCollection, id])
  setMyCollectionTitle(oldCollectionTitle => [...oldCollectionTitle, title])
  setMyCollectionBrand(oldCollectionBrand => [...oldCollectionBrand, brand])
  setMyCollectionPrice(oldCollectionPrice => [...oldCollectionPrice, price])
}

const [clear, setClear] = React.useState(false)

function clearCollection(){
  localStorage.removeItem("guitars")
  setMyCollection([])
  setClear(prevClear => !prevClear)
  console.log("myCollection after clear: ", myCollection)
}

function clearCollectionMenu(){
  console.log("clear collection menu selected")
}
//REVIEWS
const [guitarReviews, setGuitarReviews] = React.useState(JSON.parse(localStorage.getItem('reviewList')) || [])
const [newGuitarReview, setNewGuitarReview] = React.useState('')

const saveReviews = (newItems) => {
  setGuitarReviews(newItems)
  localStorage.setItem(`reviewList`, JSON.stringify(newItems))
}
const addNewGuitarReview = (review) => {
  const id = guitarReviews.length ? guitarReviews[guitarReviews.length - 1].id + 1 : 1
  const myNewReview = {selectedItem, id, review}
  const listReviews = [...guitarReviews, myNewReview]
  saveReviews(listReviews)
}
const handleCheckGuitar = (id) => {
  const listReviews = guitarReviews.map((review) => review.id === id ? {...review} : review)
  saveReviews(listReviews)
}
const handleSubmitReview = (e) => {
  e.preventDefault()
  if(!newGuitarReview) return;
  addNewGuitarReview(newGuitarReview)
  setNewGuitarReview('')
}

return (
    <main>
      <Header 
      myCollection={myCollection}
      myCollectionBrand={myCollectionBrand}
      myCollectionPrice={myCollectionPrice}
      myCollectionTitle={myCollectionTitle}
      />
      <div className="appcolumn">
        <br></br>
        <h3>Select your favourite guitars and give them a review!</h3>
        <br></br>
      <div>
        <div className="categories-container">
        <Categories 
        categories={categories}
        filterItems={filterItems}
        />

        </div>
        <Menu 
        items={menuItems}
        selectItems={selectItems}
        addToCollection={addToCollection}
        clearCollectionMenu={clearCollectionMenu}
        myCollection={myCollection}
        //Pass down functions to review component
        handleCheckGuitar={handleCheckGuitar}
        handleSubmitReview={handleSubmitReview}
        guitarReviews={guitarReviews}
        //Pass down ReviewAdd
        newGuitarReview={newGuitarReview}
        setNewGuitarReview={setNewGuitarReview}
        selectedItem={selectedItem}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Collection 
        key={myCollection}
        myCollection={myCollection}
        myCollectionTitle={myCollectionTitle}
        myCollectionBrand={myCollectionBrand}
        myCollectionPrice={myCollectionPrice}
        filtered={filtered}
        setClear={setClear}
        clear={clear}
        clearCollection={clearCollection}
      /> 
      <button onClick={() => {clearCollection(); clearCollectionMenu()}}> Clear Collectiona</button>
      </div>
      
      </div>
      <div style={{textAlign: "center"}}>      
        {/* <Cart /> */}
      </div>
        <Footer />
      <div>
      </div>
 
    </main>
  )
}
export default App;
