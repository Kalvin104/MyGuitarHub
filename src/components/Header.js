import React from 'react'

export default function Header({openHome, openCollection, openAddGuitar, openColl, home, showAdd}) {

  const [hover, setHover] = React.useState(false)


  const hoverStyle = {
    backgroundColor: hover ? "" : "green"
  }

  const selectHome = {
    backgroundColor: home ? "#F0F0F0" : "",
    color: home ? "black" : "white",
    paddingLeft: "25px",
    paddingRight: "25px"
  }
  const selectCollection = {
    backgroundColor: openColl ? "#F0F0F0" : "",
    color: openColl ? "black" : "white",

    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "50px"
  }
  const selectAddGuitar = {
    backgroundColor: showAdd ? "#F0F0F0" : "",
    color: showAdd ? "black" : "white",
    
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "50px"
  }



  return (
    <div style={{paddingRight: "100px", paddingLeft: "50px", display: "flex", backgroundColor: "#1c1c1c", color: "white"}}>
        <h1
        style={selectHome}
        className="tab"
        id='home-icon'
        onClick={() => openHome()}
        >MyGuitarHub</h1>

        <div style={{display: "flex"}}>
          <div className="tab" id='addGuitar' style={selectAddGuitar} onClick={() => openAddGuitar()}>New Guitar</div>
          <div className="tab" id='addGuitar' style={selectCollection} onClick={() => openCollection()}>Collection</div>
        </div>
       
    </div>
    
  )
}
