import React from 'react'

export default function Categories({categories, filterItems}) {

  // const [selected, setSelected] = React.useState()

  // const styles = {
  //   backgroundColor: selected ? "Red" : "" 
  // }

  // function selectCategory(){
  //   setSelected(prevSelected => !prevSelected)
  // }

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return <button 
        type="button" 
        className="filter-btn" 
        key={index} 
        onClick={() => filterItems(category)}
        >
        {category}
        </button>
      })}
    </div>
  )
}

// <button className="filter-btn" onClick={() => filterItems('Fender')}>Fender</button>
// <button className="filter-btn" onClick={() => filterItems('Les Paul')}>Les Paul</button>
// <button className="filter-btn" onClick={() => filterItems('PRS')}>PRS</button>
// <button className="filter-btn" onClick={() => filterItems('Acoustic')}>Acoustic</button>
// <button className="filter-btn" onClick={() => filterItems(null)}>All</button>
