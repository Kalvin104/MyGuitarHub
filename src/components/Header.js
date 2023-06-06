import React from 'react'

export default function Header({openHome, openCollection, openAddGuitar}) {

  const [hover, setHover] = React.useState(false)

  const hoverStyle = {
    backgroundColor: hover ? "" : "green"
  }



  return (
    <div style={{paddingRight: "100px", paddingLeft: "50px", display: "flex", backgroundColor: "#1c1c1c", color: "white"}}>
        <h1
        id='home-icon'
        onClick={() => openHome()}
        >MyGuitarHub</h1>

        <div style={{marginLeft: "50px", display: "flex", gap: "30px"}}>
          <div id='addGuitar' style={{paddingTop: "30px", paddingLeft: "5px", height: "51px", width: "85px"}} onClick={() => openAddGuitar()}>New Guitar</div>
          <div id='addGuitar' style={{paddingTop: "30px", paddingLeft: "5px", height: "51px", width: "85px"}} onClick={() => openCollection()}>Collection</div>
        </div>
       
    </div>
    
  )
}
