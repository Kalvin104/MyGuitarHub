import React from 'react'

export default function Header({openHome, openCollection, openAddGuitar, openColl, home, showAdd}) {

  const [hover, setHover] = React.useState(false)


  const hoverStyle = {
    backgroundColor: hover ? "" : "green"
  }

  const selectHome = {
    backgroundColor: home ? "#F0F0F0" : "",
    color: home ? "black" : "white"
  }
  const selectCollection = {
    backgroundColor: openColl ? "#F0F0F0" : "",
    color: openColl ? "black" : "white",
    paddingTop: "30px", paddingLeft: "5px", height: "51px", width: "85px"
  }
  const selectAddGuitar = {
    backgroundColor: showAdd ? "#F0F0F0" : "",
    color: showAdd ? "black" : "white",
    paddingTop: "30px", paddingLeft: "5px", height: "51px", width: "85px"
  }



  return (
    <div style={{paddingRight: "100px", paddingLeft: "50px", display: "flex", backgroundColor: "#1c1c1c", color: "white"}}>
        <h1
        style={selectHome}
        id='home-icon'
        onClick={() => openHome()}
        >MyGuitarHub</h1>

        <div style={{marginLeft: "50px", display: "flex", gap: "30px"}}>
          <div id='addGuitar' style={selectAddGuitar} onClick={() => openAddGuitar()}>New Guitar</div>
          <div id='addGuitar' style={selectCollection} onClick={() => openCollection()}>Collection</div>
        </div>
       
    </div>
    
  )
}
