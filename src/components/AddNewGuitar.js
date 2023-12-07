import React, {useState, useEffect} from 'react'

import { getPrice } from "./priceapi"
import { guitarsApi } from "./guitarsapi"

const AddNewGuitar = ({

}) => {
 
 
    const [newPrice1, setNewPrice1] = React.useState('')

    const handleInputChange = (e) => {
        setNewPrice1(e.target.value)
    }

    const addPriceToDatabase = () => {
        if (newPrice1 === '') {
            console.error('PRICE CANT BE EMPTY')
            return;
        }
        //Simulate an API call to add new price to MirageJS DB
        fetch('./api/prices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ value: newPrice1 }),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log('Price added to database', data)
            })
            .catch((error) => {
                console.error('Error adding PRICE to DB', error)
            })
    }
    const [prices, setPrices] = useState([])

    const fetchPrices = async () => {
        console.log('fetchPrice')
        try {
            const res = await fetch('/api/prices')
            if (res.ok) {
                const data = await res.json()
                const array = Object.keys(data).map((key) => [key, data[key]])
                console.log('array', array)
                const fetchedData = Array.isArray(data) ? data : Object.values(data)
                console.log('fetcheddata', fetchedData)
                // Update the prices state with the fetched data
                console.log('prices', prices)
                setPrices(fetchedData[0])

            } else {
                throw new Error('failed to fetch prices')
            }
        } catch (err) {
            console.log(err)
        }
        
    }
    // Trigger the fetch operation when the component mounts
    useEffect(() => {
        fetchPrices()
    }, []) // Empty dependency array means this effect runs once when the component mounts

    const [newBrand, setNewBrand] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newYear, setNewYear] = useState('')
    const [newPrice, setNewPrice] = useState(0)
    const [newDesc, setNewDesc] = useState('') 

    const [guitarData, setGuitarData] = useState({
        brand: '',
        category: '',
        title: '',
        year: '',
        price: 0,
        desc: ''

    })

    function handleSubmitGuitar(e){
        e.preventDefault()
        console.log('handleSubmitGuitar', guitarData)
        fetch('./api/guitars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guitarData)
        })
        .then(res => console.log(res.json))
        .catch(err => console.log(err.stack))
    }
// Update functions
function handleBrandChange(e) {
    setGuitarData({ ...guitarData, brand: e.target.value });
  }
  
  function handleCategoryChange(e) {
    setGuitarData({ ...guitarData, category: e.target.value });
  }
  
  function handleTitleChange(e) {
    setGuitarData({ ...guitarData, title: e.target.value });
  }
  
  function handleYearChange(e) {
    setGuitarData({ ...guitarData, year: e.target.value });
  }
  
  function handlePriceChange(e) {
    setGuitarData({ ...guitarData, price: e.target.value });
  }
  
  function handleDescChange(e) {
    setGuitarData({ ...guitarData, desc: e.target.value });
  }
  


    return (
        <div>
            <button onClick={addPriceToDatabase}>+</button>
            <button onClick={fetchPrices}>Show</button>
        <input
        style={{ width: '110px' }}
        className="input"
        id="inputPrice"
        type="number"
        placeholder="£"
        onChange={handleInputChange}
        required
      />
      <ul>
        {prices.map((price) => (
          <li key={price.id}>
            <p>ID: {price.id}</p>
            <p>Value: {price.value}</p>
          </li>
        ))}
      </ul>
      
    <form className="addGuitarForm" onSubmit={handleSubmitGuitar}>
        <div style={{display: "flex"}}>
        <div id="formlabelsdiv">
            <label id="formlabels">Brand:</label>
            <label id="formlabels">Category</label>
            <label id="formlabels">Title</label>
            <label id="formlabels">Year:</label>
            <label id="formlabels">Price</label>
            <label id="formlabels">Description</label>
        </div>
        <div id="inputBoxes">
        <select style={{width: "100px", gap: "5px"}} 
        className="input" name="brand" id="brand" onChange={handleBrandChange}>
            <option value="Epiphone">Epiphone</option>
            <option value="Gibson">Gibson</option>
            <option value="Fender">Fender</option>
            <option value="PRS">PRS</option>
            <option value="Taylor">Taylor</option>
            <option value="Martin">Martin</option>
            <option value="Ibanez">Epiphone</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Gretsch">Gretsch</option>
        </select>
        
        <input
        style={{width: "200px"}}
            className="input"
            id="inputCategory"
            type="text"
            placeholder="e.g. Les Paul / Stratocaster"
            onChange={handleCategoryChange}
            required
        ></input>
        
        <input
        style={{width: "300px"}}
            className="input"
            id='inputTitle'
            type='text'
            placeholder='Title'
            required
            onChange={handleTitleChange}
        >
        </input>
        
        <input
        style={{width: "40px"}}
        className="input"
         id='inputYear'
         type='text'
         placeholder='Year'
         onChange={handleYearChange}
         required
        ></input>
        
        <input
            style={{width: "110px"}}
            className="input"
            id='inputPrice'
            type='number'
            placeholder='£'
            onChange={handlePriceChange}
            required
        ></input>
        
        <textarea
            className="inputDesc"
            id='inputDesc'
            type='text'
            placeholder='Write about this guitar...'
            onChange={handleDescChange}
            //required
        ></textarea>
        </div>
        
        </div>
        <div style={{width: "100%", marginLeft: "40%", paddingTop: "20px"}}>
        <button
        className="inputBtn"
        type='submit'
        aria-label='Add Item'
        >Submit</button>
        </div>
    </form>
    </div>

    // brand: "Gibson",
    // title: "Standard '60s",
    // category: "Les Paul",
    // year: "1960",
    // price: 2779,
    // img: "gibson60sicedtea.jpeg",
    // desc: "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s has a solid mahogany body with an AA figured maple top, and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with a classic-style Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic® \"Kidney\" tuners, and gold Top Hat knobs with silver reflectors. The 60s Burstbucker™ pickups are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.",
    // on: false
  )
}

export default AddNewGuitar