
import React from 'react'
import { FaTrashAlt }from 'react-icons/fa'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
        <li className="item" key={item.id} style={{listStyle: "none"}}>
                <input
                    type="checkbox"
                    onChange={() => {handleCheck(item.id)}}
                    checked={item.checked}
                ></input>
                <label
                    style={(item.checked) ? {textDecoration: 'line-through'} : null}
                    onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt 
                    role="button" 
                    tabIndex="0"
                    onDoubleClick={() => handleDelete(item.id)}
                    aria-label={`Delete ${item.item}`}
                />
            </li>
  )
}

export default LineItem