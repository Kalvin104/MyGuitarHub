import React from "react";

import { getGuitars } from "../api";

export default function Collection({
  myCollection,
  myCollectionTitle,
  allItems,
  coll
}) {
  myCollectionTitle = JSON.parse(localStorage.getItem("guitars"));

  // let theCollection = allItems.filter(item => coll.includes(item.id));

  const [guitars, setGuitars] = React.useState([]);

  React.useEffect(() => {
    async function loadGuitars() {
      try {
        const data = await getGuitars();
        setGuitars(data);

      } catch (err) {
        console.log(err);
      }
    }
    loadGuitars();
  }, []);

  React.useEffect(() => {
    fetch(`/api/guitars/`)
      .then(res => res.json())
      .then(data => console.log("TEST", data));
  }, []);

  const [myCollection2, setMyCollection] = React.useState(() => {
    //Getting stored collection from localStorage
    const saved = localStorage.getItem("guitars");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  return (
    <div>
      <br></br>
      <div className="myCollection-container">
        <div className="myCollection-collection">
          {myCollection2.map(menuItem => {
            const { id, title, category, img, brand, year } = menuItem;
            {
              return (
                <div className="collectionItem" key={id}>
                  <div className="collectionDetails">
                    <h3>{brand}</h3>
                    <p>{category}</p>
                    <p>{year}</p>
                    <p>{title}</p>
                  </div>
                  <div className="collectionImageDiv">
                    <img
                      id="collectionImage"
                      src={`./assets/${img}`}
                      alt=""
                    ></img>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
