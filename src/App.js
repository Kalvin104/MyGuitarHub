
import React from 'react'
import './App.css';
import './stylesheets/qanda.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Collection from './components/Collection';


import Review from './Review'
import Controller from './Controller';
import people from './people'
import GuitarInfo from './GuitarInfo';

//QANDA APP
import Qanda from './components/Qanda';
import Qanda_data from './components/Qanda_data';

//MENU APP
import Menu from './components/Menu';
import Menu_data from './components/Menu_data';
import Categories from './components/Categories';

//CART APP
import Cart from './components/Cart';

function App() {

  //Q AND A APP
const [questions, setQuestions] = React.useState(Qanda_data)
const questionElements = questions.map(question => (
  <Qanda 
  key={question.id}
  {...question}
  />
))

//MENU APP
const allCategories = ["all", ...new Set(Menu_data.map((item) => item.category))]
const [menuItems, setMenuItems] = React.useState(Menu_data)
const [categories, setCategories] = React.useState(allCategories)

const allFiltered = [...new Set(Menu_data.map((item) => item.id))]
const [filtered, setFiltered] = React.useState(allFiltered)

//MENU APP END

//CATEGORY APP
const filterItems = (category) => {
  if (category != "all") {const newItems = Menu_data.filter((item)=> item.category === category)
  setMenuItems(newItems)} else {
    category = "all"
  setMenuItems(Menu_data)
  }
}
const [myCollection, setMyCollection] = React.useState([])
const [myCollectionTitle, setMyCollectionTitle] = React.useState([])
const [myCollectionBrand, setMyCollectionBrand] = React.useState([])
const [myCollectionPrice, setMyCollectionPrice] = React.useState([])

const [filteredCollection, setFilteredCollection] = React.useState([])

const selectItems = (id, expand) => {
  if (expand === true) {
    const newItems = Menu_data
    setMenuItems(newItems)
  } else {
    const newItems = Menu_data.filter((item) => item.id === id)
    setMenuItems(newItems)
  }
}

const addToCollection = (id, title, brand, price) => {
  setMyCollection(oldCollection => [...oldCollection, id])
  setMyCollectionTitle(oldCollectionTitle => [...oldCollectionTitle, title])
  setMyCollectionBrand(oldCollectionBrand => [...oldCollectionBrand, brand])
  setMyCollectionPrice(oldCollectionPrice => [...oldCollectionPrice, price])
}

//CATEGORY APP END
const [index, setIndex] = React.useState(0)
const checkNumber = (number) => {
  if(number > people.length - 1){
  return 0
  }
  if(number < 0){
      return people.length - 1
  }
  return number
}
function nextPerson(){
  setIndex(prevIndex => checkNumber(prevIndex + 1))
  return index
}
function prevPerson(){
  setIndex(prevIndex => checkNumber(prevIndex - 1))
  return index
}


return (
    <main>
      <Header />
      <div className="appcolumn">

      <div>
        <div className="categories-container">
          <h2>Guitar Categories</h2>
        {/* {questionElements} */}
        <Categories 
        categories={categories}
        filterItems={filterItems}
        />

        </div>
        <Menu 
        items={menuItems}
        selectItems={selectItems}
        addToCollection={addToCollection}
        />
        <Collection 
        myCollection={myCollection}
        myCollectionTitle={myCollectionTitle}
        myCollectionBrand={myCollectionBrand}
        myCollectionPrice={myCollectionPrice}

        filtered={filtered}
      /> 

      </div>
      
      </div>
      <div style={{textAlign: "center"}}>      
        <Cart />
      </div>
        <Footer />

      <div>
      {/* <div className="app-container">
        <div className="ourreviews">
          <h2>Famous Guitarists Guitars</h2>

        </div>
        <Controller 
        nextPerson={nextPerson}
        prevPerson={prevPerson}
        />
        <Review 
        index={index}
        />
        <GuitarInfo 
        index={index}
        />
      </div>
      <br></br> */}

      </div>
 
    </main>
  )
}
export default App;
