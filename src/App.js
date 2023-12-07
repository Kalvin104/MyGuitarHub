import React from "react";
import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Menu_data from "./components/Menu_data";
import Categories from "./components/Categories";

import MainPage from "./components/mainpage/MainPage";

import { getGuitars } from './api'

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  //LOAD GUITARS
  const [allGuitars, setAllGuitars] = useState([]);
  const [guitarCache, setGuitarCache] = useState([]);
  function loadData() {
    React.useEffect(() => {
      async function loadGuitars() {
        try {
          const data = await getGuitars()
          setAllGuitars(data);
          setGuitarCache(data);
        } catch (err) {
          console.log(err);
        }
      }
      loadGuitars();
    }, [])
  }
  loadData();

  //MENU APP
  const allCategories = [
    "all",
    ...new Set(Menu_data.map(item => item.category))
  ];
  const [allItems, setAllItems] = useState(
    JSON.parse(localStorage.getItem("menuItems")) || Menu_data
  );
  const [menuItems, setMenuItems] = React.useState(
    JSON.parse(localStorage.getItem("menuItems")) || Menu_data
  );
  const [categories, setCategories] = React.useState(allCategories);

  //CATEGORY APP
  const filterItems = category => {
    if (selectedItem === null) {
      if (category !== "all") {
        const newItems = allItems.filter(item => item.category === category);
        setMenuItems(newItems);
      } else {
        category = "all";
        setMenuItems(
          JSON.parse(localStorage.getItem("menuItems")) || Menu_data
        );
      }
    }
  };
  const [myCollection, setMyCollection] = React.useState(() => {
    //Getting stored collection from localStorage
    const saved = localStorage.getItem("guitars");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const selectItems = (id, expand) => {
    if (expand === true) {
      setMenuItems(JSON.parse(localStorage.getItem("menuItems")) || Menu_data);
      setSelectedItem(null);
    } else {
      const newItems = menuItems.filter(item => item.id === id);
      setMenuItems(newItems);
      setSelectedItem(id);
    }
  };

  const [coll, setColl] = React.useState(myCollection);

  const addToCollection = id => {
    setMyCollection(oldCollection => [...oldCollection, id]);
    let theCollection = allItems.filter(item => coll.includes(item.id));
    setColl(theCollection);
  };

  function clearCollectionMenu() {
    console.log("clear collection menu selected");
  }
  //REVIEWS
  const [guitarReviews, setGuitarReviews] = React.useState(
    JSON.parse(localStorage.getItem("reviewList")) || []
  );
  const [newGuitarReview, setNewGuitarReview] = React.useState("");

  const saveReviews = newItems => {
    setGuitarReviews(newItems);
    localStorage.setItem(`reviewList`, JSON.stringify(newItems));
  };
  const addNewGuitarReview = review => {
    const id = guitarReviews.length
      ? guitarReviews[guitarReviews.length - 1].id + 1
      : 1;
    const myNewReview = { selectedItem, id, review };
    const listReviews = [...guitarReviews, myNewReview];
    saveReviews(listReviews);
  };
  const handleCheckGuitar = id => {
    const listReviews = guitarReviews.map(review =>
      review.id === id ? { ...review } : review
    );
    saveReviews(listReviews);
  };
  const handleSubmitReview = e => {
    e.preventDefault();
    if (!newGuitarReview) return;
    addNewGuitarReview(newGuitarReview);
    setNewGuitarReview("");
  };

  const addItem = (brand, category, title, year, price, desc) => {
    const id = allItems.length ? allItems[allItems.length - 1].id + 1 : 1;
    const newGuitar = {
      id,
      brand,
      title,
      category,
      year,
      price,
      img: "test-image.png",
      desc
    };
    const listItems = [...allItems, newGuitar];
    setMenuItems(listItems);
    setAllItems(listItems);
    localStorage.setItem(`menuItems`, JSON.stringify(listItems));
    console.log(listItems);
  };

  return (
    <main id="main">
      <div className="appcolumn">
        <MainPage 
          allGuitars={allGuitars}
          
        />
        <br></br>
        <h3>Select your favourite guitars and give them a review!</h3>
        <br></br>
        <div>
          <div className="categories-container">
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <Menu
            items={menuItems}
            selectItems={selectItems}
            addToCollection={addToCollection}
            clearCollectionMenu={clearCollectionMenu}
            myCollection={myCollection}
            allGuitars={allGuitars}
            setAllGuitars={setAllGuitars}
            guitarCache={guitarCache}
            setGuitarCache={setGuitarCache}
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
        </div>
      </div>
    </main>
  );
}
export default App;
