import React from 'react'
import Guitars from './Guitars'


export default function GuitarInfo(props) {


    const checkNumber = (number) => {
        if(number > Guitars.length - 1){
        return 0
        }
        if(number < 0){
            return Guitars.length - 1
        }
        return number
      }

    const [index, setIndex] = React.useState(0)

    const guitarinfo = Guitars[index]

    function nextGuitar(){
        setIndex(prevIndex => checkNumber(prevIndex + 1))
    }

    function prevGuitar(){
        setIndex(prevIndex => checkNumber(prevIndex - 1))
    }

  return (
    <div className="bigcont">
        <div className="guitar-container">
          <button onClick={prevGuitar}>L</button>  
        <div className="guitarinfo-container">
            <div className="guitarinfo-header">
                <h1>{guitarinfo.guitar}</h1>
                <h2>£{guitarinfo.price}</h2>
            </div>
            <div className="guitarinfo-main">
                <img className="guitarinfo-image" src="./assets/" alt=""></img>
                <p className="guitarinfo-info">
                    {guitarinfo.info}
                </p>
            </div>
        </div>
          <button onClick={nextGuitar}>R</button>  
        </div>
        
    </div>
  )
}
