import React from 'react'

import MainPageFeatured from './MainPageFeatured'

const MainPage = ({allGuitars}) => {
  return (
    <div>
      <MainPageFeatured allGuitars={allGuitars}/>
    </div>
  )
}

export default MainPage