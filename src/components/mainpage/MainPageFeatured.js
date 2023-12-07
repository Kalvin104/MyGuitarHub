import React from 'react'

const MainPageFeatured = ({allGuitars}) => {

function getRandomGuitar(allGuitars){
  const randomIndex = Math.floor(Math.random() * allGuitars.length)
  return allGuitars[randomIndex]
}

const randomGuitar = getRandomGuitar(allGuitars)
console.log(randomGuitar)


  return (
    <main className='featured'>
      <h1>Featured Today!</h1>
      <article>
      {randomGuitar ? ( // Checking if randomGuitar exists
      Array.isArray(randomGuitar) ? ( // Checking if it's an array
        randomGuitar.map(guitar => {
          const { id, title, brand, img } = guitar || {}; // Use default empty object if guitar is undefined
          return (
            <>
            <p key={id}>{id} - {title} - {brand}</p>

            </>
          );
        })
      ) : ( // If it's not an array, assume it's a single guitar object
      <>
        <p key={randomGuitar.id}>{randomGuitar.id} - {randomGuitar.title} - {randomGuitar.brand}</p>
        <img src={`./assets/${randomGuitar.img}`}></img>
        </>
      )
    ) : (
      <p>No featured guitar available</p> // Render a message if randomGuitar is undefined or falsy
    )}
      </article>
    </main>
  )
}

export default MainPageFeatured