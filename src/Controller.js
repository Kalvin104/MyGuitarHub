import React from 'react'

export default function Controller(props) {


  return (
    <div className="controller-container">
        <div className="controller-button-container">
            <button className="controller-buttons prev" onClick={props.prevPerson}>Previous</button>
            <button 
              className="controller-buttons next" 
              onClick={() => props.nextPerson(props.index)}>
              Next
              </button>
            
        </div>
        
    </div>
  )
}
